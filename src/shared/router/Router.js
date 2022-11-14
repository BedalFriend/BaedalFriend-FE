import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalRoute from './GlobalRoute';
// import PrivateRoute from './PrivateRoute';

import TestPage from '../../pages/TestPage';
import KakaoLoginPage from '../../pages/KakaoLoginPage';
import MainPage from '../../pages/main/MainPage';
import SearchPage from '../../pages/search/SearchPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalRoute />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/search' element={<SearchPage/>} />
        </Route>

        <Route path='/kakaoLogin' element={<KakaoLoginPage />} />

        <Route path='*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
