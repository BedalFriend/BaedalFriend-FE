import React from 'react';
import * as ChatST from './ChatStyle';
import { useSelector } from 'react-redux';

import ProfilePic from '../../components/elements/profilePic/ProfilePic';

export default function Chat({ chat, isSame }) {
  const user = useSelector((state) => state.user);
  const created = new Date(chat.createdAt);

  const MyChat = () => {
    return (
      <ChatST.Box isSame={isSame} isMine={true}>
        <ChatST.InfoCol isMine={true}>
          <ChatST.TimeStamp>
            {created.getHours() < 10 ? '0' : ''}
            {created.getHours()}:{created.getMinutes() < 10 ? '0' : ''}
            {created.getMinutes()}
          </ChatST.TimeStamp>
        </ChatST.InfoCol>

        <ChatST.ContentCol>
          <ChatST.Bubble isMine={true}>{chat.message}</ChatST.Bubble>
        </ChatST.ContentCol>
      </ChatST.Box>
    );
  };

  const TheirChat = () => {
    return (
      <ChatST.Box isSame={isSame} isMine={false}>
        <ChatST.ProfileCol>
          {isSame ? null : (
            <ProfilePic size='36px' border='none' user={chat.member} />
          )}
        </ChatST.ProfileCol>

        <ChatST.ContentCol>
          {isSame ? null : <ChatST.Nickname>{chat.sender}</ChatST.Nickname>}

          <ChatST.Bubble isMine={false}>{chat.message}</ChatST.Bubble>
        </ChatST.ContentCol>

        <ChatST.InfoCol isMine={false}>
          <ChatST.TimeStamp>
            {created.getHours() < 10 ? '0' : ''}
            {created.getHours()}:{created.getMinutes() < 10 ? '0' : ''}
            {created.getMinutes()}
          </ChatST.TimeStamp>
        </ChatST.InfoCol>
      </ChatST.Box>
    );
  };

  return <>{chat.member.id === user.id ? <MyChat /> : <TheirChat />}</>;
}
