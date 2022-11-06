import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalRoute from './GlobalRoute';
// import PrivateRoute from './PrivateRoute';

import TestPage from '../../pages/TestPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalRoute />}>
          <Route path='/test' element={<TestPage />} />
        </Route>

        {/* <Route path='*' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
