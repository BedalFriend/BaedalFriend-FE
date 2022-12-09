import React, { useContext, useEffect, useState } from 'react';
import * as ChatST from './ChatPageStyle';

import Layout from '../../components/layout/Layout';
import ProfilePic from '../../components/elements/profilePic/ProfilePic';
import Chat from './Chat';
import Notice from './Notice';

import { SocketContext } from '../../context/SocketContext';
import { TabContext } from '../../context/TabContext';
import { useDispatch, useSelector } from 'react-redux';
import { __exitChannel, __getChannel } from '../../redux/modules/ChatSlice';
import useInput from '../../hooks/useInput';
import { useNavigate, useParams } from 'react-router-dom';
import SVG from '../../shared/SVG';
import { UPDATE_USER } from '../../redux/modules/UserSlice';
import { __completePost } from '../../redux/modules/PostSlice';

export default function ChatPage() {
  const { id } = useParams();
  const { publish } = useContext(SocketContext);
  const [msgInput, setMsgInput, msgInputHandler] = useInput('');
  const channel = useSelector((state) => state.chat.channel);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { setTab } = useContext(TabContext);
  const [isDroped, setIsDroped] = useState(false);
  const toggleDroped = () => {
    setIsDroped((prev) => !prev);
  };

  useEffect(() => {
    setTab('Chat');
    dispatch(__getChannel(id));
    // eslint-disable-next-line
  }, []);

  /* 스크롤 내리기 */
  useEffect(() => {
    const handler = setTimeout(async () => {
      scrollUL();
    }, 50);
    return () => {
      clearTimeout(handler);
    };
  }, [channel?.data?.chatMessages?.length]);

  const VacUser = () => {
    const result = [];
    for (
      let i = 0;
      i <
      channel?.data?.post?.maxCapacity - channel?.data?.chatRoomMembers?.length;
      i++
    ) {
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (msgInput === '') return;
    publish(msgInput, id, 'TALK');
    setMsgInput('');
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const navigate = useNavigate();

  const scrollUL = () => {
    let chatBody = document.querySelector('#body');
    if (chatBody) chatBody.scrollTo(0, chatBody.scrollHeight);
  };

  return (
    <Layout>
      <ChatST.TopBox>
        <ChatST.TopFirst>
          <span style={{ color: 'var(--color-orange)' }}>
            {channel?.data?.chatRoomMembers?.length}
          </span>
          /{channel?.data?.post?.maxCapacity} 명
        </ChatST.TopFirst>

        <ChatST.TopSecond>
          <ChatST.Users>
            {channel?.data?.chatRoomMembers?.map((user) => (
              <ProfilePic
                key={user.member.id}
                size='28px'
                border='1px solid var(--color-orange)'
                user={user.member}
              />
            ))}

            <VacUser />

            <ChatST.TopSVG
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={toggleDroped}
              isDroped={isDroped}
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
            </ChatST.TopSVG>
          </ChatST.Users>

          <ChatST.TopBtn
            onClick={() => {
              navigate(`/detail/${id}`);
            }}
          >
            게시물 보기
          </ChatST.TopBtn>
        </ChatST.TopSecond>

        <ChatST.TopLine isDroped={isDroped} />
      </ChatST.TopBox>

      <ChatST.TopThird isDroped={isDroped}>
        <ChatST.BigUsers>
          {channel?.data?.chatRoomMembers?.map((user) => (
            <ChatST.BigUser key={user.member.id}>
              <ProfilePic size='48px' border='none' user={user.member} />
              <ChatST.Nickname>{user.member.nickname}</ChatST.Nickname>
            </ChatST.BigUser>
          ))}
        </ChatST.BigUsers>
      </ChatST.TopThird>

      <ChatST.Body id='body'>
        <div style={{ height: '136px' }}></div>
        {channel?.data?.chatMessages?.map((chat, index) => {
          switch (chat.type) {
            case 'TALK':
              if (
                index > 0 &&
                channel.data.chatMessages[index - 1].type !== 'TALK' &&
                chat.type === 'TALK'
              ) {
                return <Chat key={chat.id} chat={chat} isSame={false} />;
              }
              if (
                index > 0 &&
                channel.data.chatMessages[index - 1].member.id ===
                  chat.member.id
              ) {
                return <Chat key={chat.id} chat={chat} isSame={true} />;
              } else {
                return <Chat key={chat.id} chat={chat} isSame={false} />;
              }
            case 'ENTER':
              return <Notice key={chat.id} chat={chat} action='ENTER' />;
            case 'EXIT':
              return <Notice key={chat.id} chat={chat} action='EXIT' />;
            default:
              return;
          }
        })}
        <div style={{ height: '130px' }}></div>
      </ChatST.Body>

      <ChatST.BottomBox>
        <svg
          width='28'
          height='44'
          viewBox='0 0 28 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ margin: '4px 4px 0 4px' }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <circle
            cx='6'
            cy='22'
            r='2'
            transform='rotate(-90 6 22)'
            fill='#FF5B15'
          />
          <circle
            cx='14'
            cy='22'
            r='2'
            transform='rotate(-90 14 22)'
            fill='#FF5B15'
          />
          <circle
            cx='22'
            cy='22'
            r='2'
            transform='rotate(-90 22 22)'
            fill='#FF5B15'
          />
        </svg>

        <ChatST.Form onSubmit={onSubmitHandler}>
          <ChatST.InputWrapper>
            <ChatST.Input
              type='text'
              onChange={msgInputHandler}
              value={msgInput}
            />
          </ChatST.InputWrapper>
          <button style={{ margin: '0', padding: '0' }}>
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
                  fill='var(--color-white)'
                />
              </g>
            </svg>
          </button>
        </ChatST.Form>
      </ChatST.BottomBox>

      {isOpen ? (
        <ChatST.Area>
          {isWarning ? (
            <ChatST.Box>
              <ChatST.ModalInfo>
                <SVG
                  category='Error'
                  size='24px'
                  color='var(--color-system-error)'
                />
                {user.id === channel?.data?.post?.member?.id ? (
                  <ChatST.InfoText style={{ width: '100%' }}>
                    <span style={{ fontWeight: 'var(--weight-bold)' }}>
                      공동 구매를 완료할까요?
                    </span>
                    <br />
                    공구를 종료하면 채팅방이 사라져요.
                  </ChatST.InfoText>
                ) : (
                  <ChatST.InfoText style={{ width: '100%' }}>
                    <span style={{ fontWeight: 'var(--weight-bold)' }}>
                      채팅방을 나갈까요?
                    </span>
                    <br />
                    채팅방을 나가면 참여가 취소돼요.
                  </ChatST.InfoText>
                )}
              </ChatST.ModalInfo>

              <ChatST.ModalBtnSet>
                {user.id === channel?.data?.post?.member?.id ? (
                  <>
                    <ChatST.ModalBtn
                      style={{ color: 'var(--color-system-error' }}
                      onClick={() => {
                        publish(msgInput, id, 'FINISH');
                        dispatch(__completePost(id));
                      }}
                    >
                      완료하기
                    </ChatST.ModalBtn>
                    <ChatST.ModalBtn
                      style={{ color: 'var(--color-system-success' }}
                      onClick={() => {
                        setIsOpen(false);
                        setIsWarning(false);
                      }}
                    >
                      돌아가기
                    </ChatST.ModalBtn>
                  </>
                ) : (
                  <>
                    <ChatST.ModalBtn
                      style={{ color: 'var(--color-system-error' }}
                      onClick={() => {
                        dispatch(__exitChannel(id));
                        dispatch(UPDATE_USER({ ...user, onGoing: null }));
                        publish(msgInput, id, 'EXIT');
                        navigate('/');
                      }}
                    >
                      나가기
                    </ChatST.ModalBtn>
                    <ChatST.ModalBtn
                      style={{ color: 'var(--color-system-success' }}
                      onClick={() => {
                        setIsOpen(false);
                        setIsWarning(false);
                      }}
                    >
                      돌아가기
                    </ChatST.ModalBtn>
                  </>
                )}
              </ChatST.ModalBtnSet>
            </ChatST.Box>
          ) : (
            <ChatST.Box>
              <ChatST.ModalInfo style={{ height: '114px', padding: '28px 0' }}>
                {user.id === channel?.data?.post?.member?.id ? (
                  <ChatST.Option
                    style={{ marginBottom: '24px' }}
                    onClick={() => {
                      setIsWarning(true);
                    }}
                  >
                    공구 완료하기
                  </ChatST.Option>
                ) : (
                  <ChatST.Option
                    style={{ marginBottom: '24px' }}
                    onClick={() => {
                      setIsWarning(true);
                    }}
                  >
                    채팅방 나가기
                  </ChatST.Option>
                )}

                <ChatST.Option style={{ color: 'var(--color-blur-white)' }}>
                  <SVG
                    category='Bad'
                    size='16px'
                    color='var(--color-blur-white)'
                  />
                  신고하기
                </ChatST.Option>
              </ChatST.ModalInfo>

              <ChatST.ModalBtnSet>
                <ChatST.ModalBtn
                  style={{ color: 'var(--color-orange)', width: '100%' }}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  돌아가기
                </ChatST.ModalBtn>
              </ChatST.ModalBtnSet>
            </ChatST.Box>
          )}

          <ChatST.ModalLayout
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </ChatST.Area>
      ) : null}
    </Layout>
  );
}
