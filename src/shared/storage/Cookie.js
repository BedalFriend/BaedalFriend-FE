import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 6.8);

  return cookies.set('refreshToken', refreshToken, {
    sameSite: 'strict',
    secure: true,
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get('refreshToken');
};

export const removeCookieToken = () => {
  return cookies.remove('refreshToken', { sameSite: 'strict', path: '/' });
};
