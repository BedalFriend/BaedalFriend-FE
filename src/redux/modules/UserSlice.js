import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  nickname: null,
  address: null,
  profileURL: null,
  role: null,
  onGoing: null,
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
      state.onGoing = action.payload.onGoing;
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
      state.onGoing = null;
      state.createdAt = null;
      state.modifiedAt = null;
    },
    UPDATE_USER: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.address = action.payload.address;
      state.profileURL = action.payload.profileURL;
      state.role = action.payload.role;
      state.onGoing = action.payload.onGoing;
      state.createdAt = action.payload.createdAt;
      state.modifiedAt = action.payload.modifiedAt;
    },
  },
});

export const { SET_USER, DELETE_USER, UPDATE_USER } = userSlice.actions;
export default userSlice.reducer;
