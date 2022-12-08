import { createContext, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';

import { getCookieToken } from '../shared/storage/Cookie';
import { ADD_CHAT, UPDATE_CHANNEL } from '../redux/modules/ChatSlice';
import store from '../redux/config/ConfigStore';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_USER } from '../redux/modules/UserSlice';

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
        initSub();
        //unsubscribe();
      },
    });

    client.current.activate();
  };

  const initSub = async () => {
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

  const onMessageReceived = async (payload) => {
    const { user } = await getInfo();
    const received = JSON.parse(payload.body);
    if (received.roomId === user.onGoing) {
      switch (received.type) {
        case 'TALK':
          return dispatch(ADD_CHAT(received));
        case 'ENTER':
          {
            const channel = store.getState()?.chat?.channel;
            if (channel.data.chatRoomMembers) {
              const tempMembers = [...channel.data.chatRoomMembers];
              tempMembers.push({ member: received.member });
              dispatch(
                UPDATE_CHANNEL({
                  ...channel.data,
                  chatRoomMembers: tempMembers,
                })
              );
              dispatch(ADD_CHAT(received));
            }
          }
          return;
        case 'EXIT':
          {
            const channel = store.getState()?.chat?.channel;
            if (channel.data.chatRoomMembers) {
              const target = channel.data.chatRoomMembers.findIndex(
                (item) => item.member.id === received.member.id
              );
              const tempMembers = [...channel.data.chatRoomMembers];
              tempMembers.splice(target, 1);
              dispatch(
                UPDATE_CHANNEL({
                  ...channel.data,
                  chatRoomMembers: tempMembers,
                })
              );
              dispatch(ADD_CHAT(received));
            }
          }
          return;
        case 'FINISH':
          {
            console.log('received: ', received);
            const user = store.getState()?.user;
            dispatch(UPDATE_USER({ ...user, onGoing: null }));
            if (
              window.location.pathname.includes('/chat') ||
              window.location.pathname === `/detail/${received.roomId}`
            )
              window.location.replace('/');
          }
          return;
        default:
          return;
      }
    }
  };

  const publish = async (payload, roomId, type) => {
    const { user, authorization, refreshToken } = await getInfo();
    if (!client.current.connected) return;
    client.current.publish({
      destination: '/pub/chat/message',
      body: JSON.stringify({
        type,
        roomId,
        sender: user.nickname,
        message: payload,
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
