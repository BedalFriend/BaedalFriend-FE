import React from 'react';
import * as ChatST from './ChatStyle';
import { useSelector } from 'react-redux';

import ProfilePic from '../../components/elements/profilePic/ProfilePic';

export default function Chat({ chat, isSame }) {
  const user = useSelector((state) => state.user);
  const MyChat = () => {
    return (
      <ChatST.Box isSame={isSame} isMine={true}>
        <ChatST.InfoCol isMine={true}>
          <ChatST.TimeStamp>12:00</ChatST.TimeStamp>
        </ChatST.InfoCol>

        <ChatST.ContentCol>
          <ChatST.Bubble isMine={true}>
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
          </ChatST.Bubble>
        </ChatST.ContentCol>
      </ChatST.Box>
    );
  };
  const TheirChat = () => {
    return (
      <ChatST.Box isSame={isSame} isMine={false}>
        <ChatST.ProfileCol>
          {isSame ? null : <ProfilePic size='36px' border='none' user={user} />}
        </ChatST.ProfileCol>

        <ChatST.ContentCol>
          {isSame ? null : <ChatST.Nickname>김까콩</ChatST.Nickname>}

          <ChatST.Bubble isMine={false}>
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
            안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
          </ChatST.Bubble>
        </ChatST.ContentCol>

        <ChatST.InfoCol isMine={false}>
          <ChatST.TimeStamp>12:00</ChatST.TimeStamp>
        </ChatST.InfoCol>
      </ChatST.Box>
    );
  };

  return <MyChat />;
}
