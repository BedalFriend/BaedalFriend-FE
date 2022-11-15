import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalRoute from './GlobalRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import TestPage from '../../pages/TestPage';
import KakaoLoginPage from '../../pages/KakaoLoginPage';
import SignPage from '../../pages/sign/SignPage';
import MainPage from '../../pages/main/MainPage';
import ChatPage from '../../pages/chat/ChatPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}></Route>

        <Route element={<PublicRoute />}>
          <Route path='/sign' element={<SignPage />} />
        </Route>

        <Route path='/kakaoLogin' element={<KakaoLoginPage />} />
        <Route path='/chat' element={<ChatPage />} />

        <Route element={<GlobalRoute />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='*' element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
