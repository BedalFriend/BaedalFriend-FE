import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { DELETE_TOKEN, SET_TOKEN } from '../redux/modules/AuthSlice';
import { DELETE_USER, SET_USER } from '../redux/modules/UserSlice';
import { setRefreshToken, removeCookieToken } from '../shared/storage/Cookie';

import {
  signupUser,
  loginUser,
  logoutUser,
  requestToken,
  getKakaoCode,
} from '../shared/api/Users';

import kakaoPath from '../imgs/kakao_login/ko/kakao_login_medium_wide.png';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import Timer from '../components/elements/timer/Timer';
import { TabContext } from '../context/TabContext';
import { useEffect } from 'react';

export default function TestPage(props) {
  const { setTab } = useContext(TabContext);
  const dispatch = useDispatch();

  const signupInfo = {
    email: 'test@gmail.com',
    password: 'qwer1234*',
    passwordConfirm: 'qwer1234*',
    nickname: 'test1234',
    role: 0,
  };

  const loginInfo = {
    email: 'test@gmail.com',
    password: 'qwer1234*',
  };

  const onSignupHandler = async () => {
    const response = await signupUser(signupInfo);
    console.log(response);
  };
  const onLoginHandler = async () => {
    const response = await loginUser(loginInfo);

    setRefreshToken(response.headers.refresh_token);
    dispatch(SET_TOKEN(response.headers.authorization));
    dispatch(SET_USER(response.userInfo));

    //Todo: 받아온 userInfo의 채팅방 구독하기
  };
  const onLogoutHandler = async () => {
    await logoutUser();
    removeCookieToken();
    dispatch(DELETE_TOKEN());
    dispatch(DELETE_USER());
  };
  const onReissueHandler = async () => {
    const response = await requestToken();
    setRefreshToken(response.headers.refresh_token);
    dispatch(SET_TOKEN(response.headers.authorization));
    dispatch(SET_USER(response.userInfo));
  };
  const onGetKakaoCode = async () => {
    await getKakaoCode();
  };

  useEffect(() => {
    setTab('Mypage');
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Init>
        <h1>THIS IS TEST PAGE</h1>
        <Box>
          버튼을 눌러 테스트 해보세요.
          <Button onClick={onSignupHandler}>SIGNUP TEST BUTTON</Button>
          <Button onClick={onLoginHandler}>LOGIN TEST BUTTON</Button>
          <Button onClick={onLogoutHandler}>LOGOUT TEST BUTTON</Button>
          <Button onClick={onReissueHandler}>REISSUE TEST BUTTON</Button>
          <img src={kakaoPath} alt='kakao login' onClick={onGetKakaoCode} />
        </Box>
      </Init>

      <Timer limit='10' />
      <h1
        onClick={() => {
          console.log(new Date('2022-11-10 17:30:25') - new Date());
        }}
      >
        Date Generator!
      </h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
      <h1>Scroll Generator...</h1>
    </Layout>
  );
}

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
  font-weight: 300;
  font-display: swap;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-family: 'Pretendard';
  font-weight: 500;
  font-display: swap;
`;

const Init = styled.div`
  margin-top: 60px;
`;
