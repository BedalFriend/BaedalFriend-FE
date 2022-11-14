import { createContext, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';

import { getCookieToken } from '../shared/storage/Cookie';
import store from '../redux/config/ConfigStore';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const client = useRef({});

  const getInfo = () => {
    const user = store.getState()?.user;
    const authorization = store.getState()?.token?.accessToken;
    const refreshToken = getCookieToken();
    return { user, authorization, refreshToken };
  };

  const connect = () => {
    client.current = new StompJS.Client({
      webSocketFactory: () =>
        new SockJS(`${process.env.REACT_APP_API_URL}/ws/chat`),
      connectHeaders: {},
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onDisconnect: (e) => {
        console.log('Disconnect...!', e);
      },
      onChangeState: (e) => {
        console.log('change', e);
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    //client.current.activate();
  };

  const subscribe = () => {
    if (!client.current.connected) return;
    client.current.subscribe(`/sub/chat/room/1`, onMessageReceived, {
      id: `sub-1`,
    });
  };

  const onMessageReceived = (payload) => {
    console.log(JSON.parse(payload.body));
  };

  const publish = (message) => {
    const { user, authorization, refreshToken } = getInfo();

    if (!client.current.connected) return;
    client.current.publish({
      destination: '/pub/chat/message',
      body: JSON.stringify({
        type: 'TALK',
        roomId: '1',
        sender: user.nickname,
        message,
      }),
      headers: { Authorization: authorization, Refresh_Token: refreshToken },
    });
  };

  useEffect(() => {
    connect();
    window.setTimeout(() => {
      publish('안녕하세요!');
    }, 3000);
    //return () => disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <SocketContext.Provider value={{ client, subscribe, publish }}>
      {children}
    </SocketContext.Provider>
  );
}
