import axios from 'axios';

function getInstance() {
  /* const token = Token 받아오기 */
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  };

  if (token !== undefined && token != null) {
    headers.Authorization = ``;
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 120000,
    withCredentials: true,
    headers,
  });
}

export default getInstance;
export const basePath = '/api';
