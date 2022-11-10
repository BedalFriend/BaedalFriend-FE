import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  nickname: null,
  address: null,
  profileURL: null,
  role: null,
  createdAt: null,
  modifiedAt: null,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.address = action.payload.address;
      state.profileURL = action.payload.profileURL;
      state.role = action.payload.role;
      state.createdAt = action.payload.createdAt;
      state.modifiedAt = action.payload.modifiedAt;
    },
    DELETE_USER: (state) => {
      state.id = null;
      state.email = null;
      state.nickname = null;
      state.address = null;
      state.profileURL = null;
      state.role = null;
      state.createdAt = null;
      state.modifiedAt = null;
    },
  },
});

export const { SET_USER, DELETE_USER } = userSlice.actions;
export default userSlice.reducer;
