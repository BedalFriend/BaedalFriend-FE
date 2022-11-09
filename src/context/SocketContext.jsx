import { createContext, useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';
import { getCookieToken } from '../shared/storage/Cookie';
import { useSelector } from 'react-redux';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const user = useSelector((state) => state.user);
  const authorization = useSelector((state) => state.token.accessToken);
  const refreshToken = getCookieToken();

  //const [stompClient, setStompClient] = useState();
  const client = useRef({});

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
    client.current.subscribe(
      `/sub/chat/room/1`,
      (e) => {
        console.log('yes!');
        console.log(JSON.parse(e));
      },
      { id: `sub-1` }
    );
  };

  const publish = (message) => {
    if (!client.current.connected) return;

    client.current.publish({
      destination: '/chat/message',
      body: JSON.stringify({
        type: 'TALK',
        roomId: '1',
        sender: 'kim',
        message,
      }),
    });
  };

  useEffect(() => {
    connect();
    window.setTimeout(() => {
      publish('안녕하세요!');
    }, 3000);
    //return () => disconnect();
  }, []);

  return (
    <SocketContext.Provider value={{ client }}>
      {children}
    </SocketContext.Provider>
  );
}
