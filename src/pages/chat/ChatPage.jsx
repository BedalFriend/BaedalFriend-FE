import React, { useContext, useEffect, useState } from 'react';
import * as ChatST from './ChatPageStyle';

import Layout from '../../components/layout/Layout';

import { TabContext } from '../../context/TabContext';
import ProfilePic from '../../components/elements/profilePic/ProfilePic';
import Chat from './Chat';

export default function ChatPage({ room }) {
  const { setTab } = useContext(TabContext);
  const [isDroped, setIsDroped] = useState(false);
  const toggleDroped = () => {
    setIsDroped((prev) => !prev);
  };

  useEffect(() => {
    setTab('Chat');
    // eslint-disable-next-line
  }, []);

  const boyUser = {
    id: 1,
    nickname: '김수달',
    profileURL:
      'https://i.pinimg.com/236x/56/cc/80/56cc80ea80aff65bc09c7967b993821c.jpg',
  };

  const girlUser = {
    id: 2,
    nickname: '김순이',
    profileURL:
      'https://i.pinimg.com/236x/cb/24/f1/cb24f1478772b27702ff45e5490b6b6f.jpg',
  };

  const noPicUser = {
    id: 3,
    nickname: '의문의 사나이',
    profileURL: null,
  };

  const userArr = [boyUser, girlUser, noPicUser];

  const VacUser = () => {
    const result = [];
    for (let i = 0; i < 5 - userArr.length; i++) {
      result.push(
        <svg
          key={i}
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='14' cy='14' r='13.5' stroke='#FFDCCD' />
          <circle cx='6' cy='14' r='2' fill='#FFDCCD' />
          <circle cx='14' cy='14' r='2' fill='#FFDCCD' />
          <circle cx='22' cy='14' r='2' fill='#FFDCCD' />
        </svg>
      );
    }
    return result;
  };

  return (
    <Layout>
      <ChatST.TopBox>
        <ChatST.TopFirst>
          <span style={{ color: 'var(--color-orange)' }}>3</span>/5 명
        </ChatST.TopFirst>

        <ChatST.TopSecond>
          <ChatST.Users>
            {userArr.map((user) => (
              <ProfilePic
                key={user.id}
                size='28px'
                border='1px solid var(--color-orange)'
                user={user}
              />
            ))}

            <VacUser />

            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginLeft: '6px', cursor: 'pointer' }}
              onClick={toggleDroped}
            >
              <rect
                x='28'
                y='28'
                width='28'
                height='28'
                rx='14'
                transform='rotate(-180 28 28)'
                fill='var(--color-blur-orange)'
              />
              <g mask='url(#mask0_571_1507)'>
                <path
                  d='M20.723 11.1828L14.5171 18.4301C14.4433 18.5161 14.3632 18.5769 14.277 18.6125C14.1909 18.6486 14.0985 18.6667 14 18.6667C13.9015 18.6667 13.8091 18.6486 13.723 18.6125C13.6368 18.5769 13.5567 18.5161 13.4828 18.4301L7.25858 11.1828C7.08619 10.9821 7 10.7312 7 10.4301C7 10.129 7.09235 9.87096 7.27705 9.6559C7.46174 9.44085 7.67722 9.33332 7.92348 9.33332C8.16975 9.33332 8.38522 9.44085 8.56992 9.6559L14 15.9785L19.4301 9.6559C19.6025 9.45519 19.8147 9.35483 20.0669 9.35483C20.3196 9.35483 20.5383 9.46235 20.723 9.67741C20.9077 9.89246 21 10.1434 21 10.4301C21 10.7168 20.9077 10.9677 20.723 11.1828Z'
                  fill='var(--color-orange)'
                />
              </g>
            </svg>
          </ChatST.Users>

          <ChatST.TopBtn>게시물 보기</ChatST.TopBtn>
        </ChatST.TopSecond>

        <ChatST.TopLine isDroped={isDroped} />
      </ChatST.TopBox>

      <ChatST.TopThird isDroped={isDroped}>
        <ChatST.BigUsers>
          {userArr.map((user) => (
            <ChatST.BigUser key={user.id}>
              <ProfilePic size='48px' border='none' user={user} />
              <ChatST.Nickname>{user.nickname}</ChatST.Nickname>
            </ChatST.BigUser>
          ))}
        </ChatST.BigUsers>
      </ChatST.TopThird>

      <ChatST.Body>
        <div style={{ height: '136px' }}></div>
        <Chat isSame={false} />
        <Chat isSame={true} />
        <Chat isSame={false} />
        <Chat isSame={false} />
        <Chat isSame={false} />
        <Chat isSame={true} />
        <Chat isSame={true} />
        <div style={{ height: '120px' }}></div>
      </ChatST.Body>

      <ChatST.BottomBox>
        <ChatST.InputBox>
          <ChatST.InputWrapper>
            <ChatST.Input />
          </ChatST.InputWrapper>
          <svg
            width='44'
            height='44'
            viewBox='0 0 44 44'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='44' height='44' rx='22' fill='var(--color-orange)' />
            <g mask='url(#mask0_261_792)'>
              <path
                d='M11.4354 26.427L21.1873 15.0384C21.3034 14.9032 21.4292 14.8077 21.5646 14.7518C21.7001 14.695 21.8452 14.6667 22 14.6667C22.1548 14.6667 22.2999 14.695 22.4354 14.7518C22.5708 14.8077 22.6966 14.9032 22.8127 15.0384L32.5937 26.427C32.8646 26.7424 33 27.1367 33 27.6098C33 28.0829 32.8549 28.4885 32.5646 28.8264C32.2744 29.1644 31.9358 29.3333 31.5488 29.3333C31.1618 29.3333 30.8232 29.1644 30.533 28.8264L22 18.8909L13.467 28.8264C13.1961 29.1418 12.8626 29.2995 12.4663 29.2995C12.0692 29.2995 11.7256 29.1306 11.4354 28.7926C11.1451 28.4547 11 28.0604 11 27.6098C11 27.1592 11.1451 26.765 11.4354 26.427Z'
                fill='var(--color-light-orange)'
              />
            </g>
          </svg>
        </ChatST.InputBox>
      </ChatST.BottomBox>
    </Layout>
  );
}
