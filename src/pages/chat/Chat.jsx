import React from 'react';
import * as ChatST from './ChatStyle';
import { useSelector } from 'react-redux';

import ProfilePic from '../../components/elements/profilePic/ProfilePic';

export default function Chat({ chat }) {
  const user = useSelector((state) => state.user);
  const MyChat = () => {
    return (
      <ChatST.Box>
        <ChatST.InfoCol></ChatST.InfoCol>
        <ChatST.ContentCol></ChatST.ContentCol>
      </ChatST.Box>
    );
  };
  const TheirChat = () => {
    return (
      <ChatST.Box>
        <ChatST.ProfileCol>
          <ProfilePic size='36px' border='none' user={user} />
        </ChatST.ProfileCol>

        <ChatST.ContentCol>
          <ChatST.Nickname>김까콩</ChatST.Nickname>
          <ChatST.Bubble> 안녕하세요 안녕하세요</ChatST.Bubble>
        </ChatST.ContentCol>

        <ChatST.InfoCol>
          <ChatST.TimeStamp>12:00</ChatST.TimeStamp>
        </ChatST.InfoCol>
      </ChatST.Box>
    );
  };

  return <TheirChat />;
}
