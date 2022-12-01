import { createContext, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';

import { getCookieToken } from '../shared/storage/Cookie';
import { ADD_CHAT } from '../redux/modules/ChatSlice';
import store from '../redux/config/ConfigStore';
import { useDispatch } from 'react-redux';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const dispatch = useDispatch();
  const client = useRef({});

  const getInfo = async () => {
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
        // unsubscribe();
      },
    });

    client.current.activate();
  };

  const subscribe = async () => {
    const { user } = await getInfo();
    if (!client.current.connected) return;
    if (
      user.onGoing !== null &&
      user.onGoing !== undefined &&
      user.onGoing !== 0
    ) {
      client.current.subscribe(
        `/sub/chat/room/${user.onGoing}`,
        onMessageReceived,
        {
          id: `sub-${user.onGoing}`,
        }
      );
    }
  };

  const unsubscribe = async () => {
    const { user } = await getInfo();
    if (!client.current.connected) return;
    if (
      user.onGoing !== null &&
      user.onGoing !== undefined &&
      user.onGoing !== 0
    ) {
      client.current.unsubscribe(`sub-${user.onGoing}`);
    }
  };

  const onMessageReceived = async (payload) => {
    const { user } = await getInfo();
    const received = JSON.parse(payload.body);
    if (received.roomId === user.onGoing) dispatch(ADD_CHAT(received));
  };

  const publish = async (message, roomId, type) => {
    const { user, authorization, refreshToken } = await getInfo();
    if (!client.current.connected) return;
    client.current.publish({
      destination: '/pub/chat/message',
      body: JSON.stringify({
        type,
        roomId,
        sender: user.nickname,
        message,
      }),
      headers: { Authorization: authorization, Refresh_Token: refreshToken },
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    connect();
    return () => disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <SocketContext.Provider value={{ client, subscribe, unsubscribe, publish }}>
      {children}
    </SocketContext.Provider>
  );
}
