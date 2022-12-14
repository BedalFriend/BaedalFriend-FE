import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalRoute from './GlobalRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import KakaoLoginPage from '../../pages/KakaoLoginPage';
import LoginPage from '../../pages/login/LoginPage';
import SignPage from '../../pages/sign/SignPage';
import MainPage from '../../pages/main/MainPage';
import UploadPage from '../../pages/upload/UploadPage';
import DetailPage from '../../pages/detail/DetailPage';
import ChatPage from '../../pages/chat/ChatPage';
import SearchPage from '../../pages/search/SearchPage';
import NearbyPage from '../../pages/nearby/NearbyPage';
import CategoryPage from '../../pages/search/CategoryPage';
import MyPage from '../../pages/mypage/MyPage';
import MyEditPage from '../../pages/mypage/MyEditPage';
import ModifyPage from '../../pages/modify/ModifyPage';
import ReviewPage from '../../pages/review/ReviewPage';
import MyPostPage from '../../pages/mypage/MyPostPage';
import AddressPage from '../../pages/address/AddressPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/chat/:id' element={<ChatPage />} />
          <Route path='/address' element={<AddressPage />} />
          <Route path='/modify/:id' element={<ModifyPage />} />
          <Route path='/myEdit' element={<MyEditPage />} />
          <Route path='/myPost' element={<MyPostPage />} />
          <Route path='/post' element={<UploadPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign' element={<SignPage />} />
        </Route>

        <Route path='/kakaoLogin' element={<KakaoLoginPage />} />

        <Route element={<GlobalRoute />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/nearby' element={<NearbyPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/review/:id' element={<ReviewPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='*' element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
