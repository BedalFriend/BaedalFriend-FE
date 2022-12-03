import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../modules/AuthSlice';
import userReducer from '../modules/UserSlice';
import postReducer from '../modules/PostSlice';
import chatReducer from '../modules/ChatSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    post: postReducer,
    chat: chatReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
