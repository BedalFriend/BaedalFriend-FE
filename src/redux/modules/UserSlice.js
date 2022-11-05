import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'authUser',
  initialState: {
    memberId: null,
    email: null,
    nickname: null,
    address: null,
    profileUrl: null,
    role: null,
    createdAt: null,
    modifiedAt: null,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.memberId = action.payload.memberId;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.address = action.payload.address;
      state.profileUrl = action.payload.profileUrl;
      state.role = action.payload.role;
      state.createdAt = action.payload.createdAt;
      state.modifiedAt = action.payload.modifiedAt;
    },
    DELETE_USER: (state) => {
      state.memberId = null;
      state.email = null;
      state.nickname = null;
      state.address = null;
      state.profileUrl = null;
      state.role = null;
      state.createdAt = null;
      state.modifiedAt = null;
    },
  },
});

export const { SET_USER, DELETE_USER } = userSlice.actions;
export default userSlice.reducer;
