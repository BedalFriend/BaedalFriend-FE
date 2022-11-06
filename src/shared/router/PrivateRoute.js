import { Outlet, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CheckToken } from '../CheckToken';

export default function PrivateRoute() {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Failed') {
    return <Navigate to='/test' state={{ from: location }} />;
  }

  return <Outlet />;
}
