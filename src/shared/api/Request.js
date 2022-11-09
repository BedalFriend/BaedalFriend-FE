import axios from 'axios';
import store from '../../redux/config/ConfigStore';
import { getCookieToken } from '../storage/Cookie';

export default function getInstance() {
  const authorization = store.getState()?.token?.accessToken;
  const refreshToken = getCookieToken();

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: null,
    Refresh_Token: null,
  };

  if (authorization !== undefined && authorization != null) {
    headers.Authorization = authorization;
  }
  if (refreshToken !== undefined && refreshToken != null) {
    headers.Refresh_Token = refreshToken;
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 120000,
    //withCredentials: true,
    headers,
  });
}

export const basePath = '/v1';
