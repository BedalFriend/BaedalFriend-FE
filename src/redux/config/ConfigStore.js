import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../modules/AuthSlice';
import userReducer from '../modules/UserSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
