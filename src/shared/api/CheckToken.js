import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_TOKEN, SET_TOKEN } from '../../redux/modules/AuthSlice';
import { DELETE_USER, SET_USER } from '../../redux/modules/UserSlice';
import {
  getCookieToken,
  removeCookieToken,
  setRefreshToken,
} from '../storage/Cookie';

import { requestToken } from './Users';

export function CheckToken(key) {
  const [isAuth, setIsAuth] = useState('Loading');
  const { authenticated, expireTime } = useSelector((state) => state.token);
  const refreshToken = getCookieToken();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthToken = async () => {
      if (refreshToken === undefined) {
        dispatch(DELETE_TOKEN());
        dispatch(DELETE_USER());
        setIsAuth('Failed');
      } else {
        if (authenticated && new Date().getTime() < expireTime) {
          setIsAuth('Success');
        } else {
          const response = await requestToken();
          if (response.status) {
            dispatch(SET_TOKEN(response.headers.authorization));
            dispatch(SET_USER(response.userInfo));
            removeCookieToken();
            setRefreshToken(response.headers.refresh_token);
            setIsAuth('Success');
          } else {
            dispatch(DELETE_TOKEN());
            dispatch(DELETE_USER());
            removeCookieToken();
            setIsAuth('Failed');
          }
        }
      }
    };

    checkAuthToken();
    // eslint-disable-next-line
  }, [refreshToken, key]);

  return {
    isAuth,
  };
}
