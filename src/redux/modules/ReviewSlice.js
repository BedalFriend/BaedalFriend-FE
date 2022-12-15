import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getInstance from '../../shared/api/Request';
import { basePath } from '../../shared/api/Request';

export const __getReviewThunk = createAsyncThunk(
  'GET_POSTS', //action value
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(
        `${basePath}/auth/review/${arg}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  post: { data: {}, isLoading: false, error: null },
};

export const ReviewSlice = createSlice({
  name: 'review', //모듈의 이름
  initialState,
  reducers: {},
  extraReducers: {
    //get
    [__getReviewThunk.pending]: (state) => {
      state.post.isLoading = true;
    },
    [__getReviewThunk.rejected]: (state, action) => {
      state.post.isLoading = false;
      state.post.error = action.payload;
    },
    [__getReviewThunk.fulfilled]: (state, action) => {
      state.post.isLoading = false;
      state.post.data = action.payload;
    },
  },
});

export const { CLEAR_POSTS, UPDATE_POST } = ReviewSlice.actions;
export default ReviewSlice.reducer;
