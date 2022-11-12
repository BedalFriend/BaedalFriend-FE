import { createContext, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';
import { getCookieToken } from '../shared/storage/Cookie';
import store from '../redux/config/ConfigStore';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const client = useRef({});

  const connect = () => {
    const user = store.getState()?.user;
    const authorization = store.getState()?.token?.accessToken;
    const refreshToken = getCookieToken();
    client.current = new StompJS.Client({
      webSocketFactory: () =>
        new SockJS(`${process.env.REACT_APP_API_URL}/ws/chat`),
      connectHeaders: {
        Authorization: authorization,
        Refresh_Token: refreshToken,
      },
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('Connect...!');
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const subscribe = () => {
    if (client.current.connected) {
      client.current.subscribe(
        `/sub/chat/room/1`,
        () => {
          console.log('receive!');
        },
        {
          id: `sub-1`,
        }
      );
    }
  };

  const onMessageReceived = (payload) => {
    console.log('Received!');
  };

  const publish = (message) => {
    const user = store.getState()?.user;
    const authorization = store.getState()?.token?.accessToken;
    const refreshToken = getCookieToken();
    //console.log(user, authorization, refreshToken);
    if (!client.current.connected) return;

    client.current.publish({
      destination: '/sub/chat/message',
      body: JSON.stringify({
        type: 'TALK',
        roomId: 1,
        memberId: 4,
        sender: 'kim',
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
    <SocketContext.Provider value={{ client }}>
      {children}
    </SocketContext.Provider>
  );
}
