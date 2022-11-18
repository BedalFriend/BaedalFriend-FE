import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../modules/AuthSlice';
import userReducer from '../modules/UserSlice';
import postReducer from '../modules/PostSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    post: postReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
