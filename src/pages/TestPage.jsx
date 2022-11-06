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
  getKakaoToken,
} from '../shared/api/Users';

import kakaoPath from '../imgs/kakao_login/ko/kakao_login_medium_wide.png';

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

  const onGetKakaoToken = async () => {
    const response = await getKakaoToken();
    console.log(response);
  };

  return (
    <div>
      <h1>THIS IS TEST PAGE</h1>
      <div
        style={{ display: 'flex', flexFlow: 'column nowrap', width: '400px' }}
      >
        <button onClick={onSignupHandler}>SIGNUP TEST BUTTON</button>
        <button onClick={onLoginHandler}>LOGIN TEST BUTTON</button>
        <button onClick={onLogoutHandler}>LOGOUT TEST BUTTON</button>
        <button onClick={onReissueHandler}>REISSUE TEST BUTTON</button>
        <img src={kakaoPath} alt='kakao login' onClick={onGetKakaoToken} />
      </div>
    </div>
  );
}
