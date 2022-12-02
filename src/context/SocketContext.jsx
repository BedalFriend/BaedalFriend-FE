import { createContext, useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';

import { getCookieToken } from '../shared/storage/Cookie';
import { ADD_CHAT } from '../redux/modules/ChatSlice';
import store from '../redux/config/ConfigStore';
import { useDispatch, useSelector } from 'react-redux';

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
      onChangeState: (e) => {
        console.log('change!', e);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        //subscribe();
        //unsubscribe();
      },
    });

    client.current.activate();
  };

  const subscribe = (id) => {
    if (!client.current.connected) return;
    if (id !== null && id !== undefined && id !== 0) {
      client.current.subscribe(`/sub/chat/room/${id}`, onMessageReceived, {
        id: `sub-${id}`,
      });
    }
  };

  const user = useSelector((state) => state.user);
  useEffect(() => {
    subscribe(user.onGoing);
    return () => {
      unsubscribe(user.onGoing);
    };
  }, [user.onGoing]);

  const unsubscribe = (id) => {
    if (!client.current.connected) return;
    if (id !== null && id !== undefined && id !== 0) {
      client.current.unsubscribe(`sub-${id}`);
    }
  };

  const onMessageReceived = (payload) => {
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
