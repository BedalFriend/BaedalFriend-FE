import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TestPage from '../../pages/TestPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<TestPage />} />
        {/* <Route path='*' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
