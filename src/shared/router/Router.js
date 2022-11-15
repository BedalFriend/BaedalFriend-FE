import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalRoute from './GlobalRoute';
// import PrivateRoute from './PrivateRoute';

import TestPage from '../../pages/TestPage';
import KakaoLoginPage from '../../pages/KakaoLoginPage';
import MainPage from '../../pages/main/MainPage';
import UploadPage from '../../pages/upload/UploadPage';
import DetailPage from '../../pages/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalRoute />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/post' element={<UploadPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Route>

        <Route path='/kakaoLogin' element={<KakaoLoginPage />} />

        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
