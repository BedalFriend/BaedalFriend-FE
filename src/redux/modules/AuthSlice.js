import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 9 * 30 * 1000;

export const tokenSlice = createSlice({
  name: 'authToken',
  initialState: {
    authenticated: false, // 로그인 여부
    accessToken: null, // Access Token 저장
    expireTime: null, // Access Token 만료 시간
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;
export default tokenSlice.reducer;
