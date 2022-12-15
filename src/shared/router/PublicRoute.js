import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CheckToken } from '../api/CheckToken';

export default function PublicRoute() {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Success') {
    return <Navigate to='/' state={{ from: location }} />;
  }

  return <Outlet />;
}
