import axios from 'axios';

export default function getKakaoInstance() {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  return axios.create({
    baseURL: 'https://kauth.kakao.com',
    headers,
  });
}
