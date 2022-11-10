import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CheckToken } from '../api/CheckToken';

export default function GlobalRoute() {
  const location = useLocation();
  CheckToken(location.key);
  return <Outlet />;
}
