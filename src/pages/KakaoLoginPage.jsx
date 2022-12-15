import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

import { sendKaKaoToken } from '../shared/api/Users';

import { SET_TOKEN } from '../redux/modules/AuthSlice';
import { SET_USER } from '../redux/modules/UserSlice';
import { setRefreshToken } from '../shared/storage/Cookie';

export default function KakaoLoginPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const PARAMS = new URL(document.location).searchParams;
  const KAKAO_CODE = PARAMS.get('code');
  const KAKAO_ERROR = PARAMS.get('error');

  const onProperCodeHandler = async () => {
    //TODO: 받은 인가코드를 서비스 서버로 보내기
    const response = await sendKaKaoToken(KAKAO_CODE);
    if (response.status) {
      setRefreshToken(response.headers.refresh_token);
      dispatch(SET_TOKEN(response.headers.authorization));
      dispatch(SET_USER(response.userInfo));
    }
  };

  if (KAKAO_ERROR) {
    return <Navigate to='/sign' state={{ from: location }} />;
  } else if (KAKAO_CODE) {
    onProperCodeHandler();
    return <Navigate to='/' state={{ from: location }} />;
  }
}
