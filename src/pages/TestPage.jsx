import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_TOKEN, SET_TOKEN } from '../redux/modules/AuthSlice';
import { DELETE_USER, SET_USER } from '../redux/modules/UserSlice';
import {
  setRefreshToken,
  getCookieToken,
  removeCookieToken,
} from '../shared/storage/Cookie';

import {
  signupUser,
  loginUser,
  logoutUser,
  requestToken,
  getKakaoCode,
} from '../shared/api/Users';

import kakaoPath from '../imgs/kakao_login/ko/kakao_login_medium_wide.png';
import styled from 'styled-components';

export default function TestPage(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  console.log(user.email);
  console.log(token.accessToken);
  console.log(getCookieToken());

  const signupInfo = {
    email: 'test@gmail.com',
    password: 'qwer1234*',
    passwordConfirm: 'qwer1234*',
    nickname: 'test1234',
    address: '경북 포항시 남구 중흥로152번길 26-2',
    role: 1,
  };

  const loginInfo = {
    email: 'test@gmail.com',
    password: 'qwer1234*',
  };

  const onSignupHandler = async () => {
    console.log('lets signup!');
    const response = await signupUser(signupInfo);
    console.log(response);
  };
  const onLoginHandler = async () => {
    console.log('lets login~');
    const response = await loginUser(loginInfo);
    //console.log(response);

    setRefreshToken(response.headers.refresh_token);
    dispatch(SET_TOKEN(response.headers.authorization));
    dispatch(SET_USER(response.userInfo));
  };
  const onLogoutHandler = async () => {
    console.log('lets logout?');
    await logoutUser();
    removeCookieToken();
    dispatch(DELETE_TOKEN());
    dispatch(DELETE_USER());
  };
  const onReissueHandler = async () => {
    console.log('lets request token!!!');
    const response = await requestToken();
    setRefreshToken(response.headers.refresh_token);
    dispatch(SET_TOKEN(response.headers.authorization));
    dispatch(SET_USER(response.userInfo));
    console.log(response);
  };

  const onGetKakaoCode = async () => {
    await getKakaoCode();
  };

  return (
    <div>
      <h1>THIS IS TEST PAGE</h1>
      <Box>
        버튼을 눌러 테스트 해보세요.
        <Button onClick={onSignupHandler}>SIGNUP TEST BUTTON</Button>
        <Button onClick={onLoginHandler}>LOGIN TEST BUTTON</Button>
        <Button onClick={onLogoutHandler}>LOGOUT TEST BUTTON</Button>
        <Button onClick={onReissueHandler}>REISSUE TEST BUTTON</Button>
        <img src={kakaoPath} alt='kakao login' onClick={onGetKakaoCode} />
      </Box>
    </div>
  );
}

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
  font-family: 'Pretendard';
  font-weight: 700;
  font-display: swap;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 10px;
  background-color: black;
  color: white;
`;
