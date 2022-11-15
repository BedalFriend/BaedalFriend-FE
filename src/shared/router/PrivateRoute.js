import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { CheckToken } from '../api/CheckToken';

export default function PrivateRoute() {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Failed') {
    return <Navigate to='/sign' state={{ from: location }} />;
  }

  return <Outlet />;
}
