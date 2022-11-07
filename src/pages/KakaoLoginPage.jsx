import React from 'react';
import { Navigate, useLocation } from 'react-router';

import { getKakaoToken } from '../shared/api/Users';

export default function KakaoLoginPage() {
  const location = useLocation();
  const PARAMS = new URL(document.location).searchParams;
  const KAKAO_CODE = PARAMS.get('code');
  const KAKAO_ERROR = PARAMS.get('error');

  const onProperCodeHandler = async () => {
    //* Proper Code인 경우 response에 kakao token이 담긴 return을 받는다.
    const response = await getKakaoToken(KAKAO_CODE);
    console.log(response);
    //TODO: 받은 response를 이용해 서비스 서버로 요청보내기
    //...
  };

  if (KAKAO_ERROR) {
    return <Navigate to='/test' state={{ from: location }} />;
  } else if (KAKAO_CODE) {
    onProperCodeHandler();
    return <Navigate to='/test' state={{ from: location }} />;
  }
}
