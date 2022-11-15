import React, { useContext, useEffect } from 'react';
import * as ChatST from './ChatPageStyle';

import Layout from '../../components/layout/Layout';

import { TabContext } from '../../context/TabContext';

export default function ChatPage(props) {
  const { setTab } = useContext(TabContext);

  useEffect(() => {
    setTab('Chat');
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <ChatST.TopBox></ChatST.TopBox>

      <ChatST.Body></ChatST.Body>

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
            <rect width='44' height='44' rx='22' fill='#FF5B15' />
            <g mask='url(#mask0_261_792)'>
              <path
                d='M11.4354 26.427L21.1873 15.0384C21.3034 14.9032 21.4292 14.8077 21.5646 14.7518C21.7001 14.695 21.8452 14.6667 22 14.6667C22.1548 14.6667 22.2999 14.695 22.4354 14.7518C22.5708 14.8077 22.6966 14.9032 22.8127 15.0384L32.5937 26.427C32.8646 26.7424 33 27.1367 33 27.6098C33 28.0829 32.8549 28.4885 32.5646 28.8264C32.2744 29.1644 31.9358 29.3333 31.5488 29.3333C31.1618 29.3333 30.8232 29.1644 30.533 28.8264L22 18.8909L13.467 28.8264C13.1961 29.1418 12.8626 29.2995 12.4663 29.2995C12.0692 29.2995 11.7256 29.1306 11.4354 28.7926C11.1451 28.4547 11 28.0604 11 27.6098C11 27.1592 11.1451 26.765 11.4354 26.427Z'
                fill='#FFDCCD'
              />
            </g>
          </svg>
        </ChatST.InputBox>
      </ChatST.BottomBox>
    </Layout>
  );
}
