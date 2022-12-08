import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getInstance from '../../shared/api/Request';

//TODO: 채팅방 퇴장하기
export const __exitChannel = createAsyncThunk(
  'EXIT_CHANNEL',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().delete(`/chat/channel/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

//TODO: roomId를 넘겨주고 특정 채팅방 정보 받아오기
export const __getChannel = createAsyncThunk(
  'GET_CHANNEL',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(`/chat/channel/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

//TODO: roomId를 넘겨주고 채팅방 입장하기
export const __enterChannel = createAsyncThunk(
  'ENTER_CHANNEL',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().post(`/chat/channel/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  //? 현재 보고있는 채널 정보
  channel: {
    data: {},
    isLoading: false,
    error: null,
  },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    CLEAR_CHANNEL: (state) => {
      state.channel = {
        data: {},
        isLoading: false,
        error: null,
      };
    },
    ADD_CHAT: (state, action) => {
      state.channel.data.chatMessages = [
        ...state.channel.data.chatMessages,
        action.payload,
      ];
    },
    UPDATE_CHANNEL: (state, action) => {
      state.channel.data = action.payload;
    },
  },
  extraReducers: {
    /* 보고있는 해당 채널 정보 받기 */
    [__getChannel.pending]: (state) => {
      state.channel.isLoading = true;
    },
    [__getChannel.fulfilled]: (state, action) => {
      state.channel.data = action.payload.data;
      //console.log('fullfilled', state.channel.data);
      state.channel.isLoading = false;
    },
    [__getChannel.rejected]: (state, action) => {
      //console.log('error', action.payload);
      state.channel.isLoading = false;
      state.channel.error = action.payload;
    },
  },
});

export const { CLEAR_CHANNEL, ADD_CHAT, UPDATE_CHANNEL } = chatSlice.actions;
export default chatSlice.reducer;
