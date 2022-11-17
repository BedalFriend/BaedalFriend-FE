import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import getInstance from '../../shared/api/Request';
import { basePath } from '../../shared/api/Request';

export const __getThunk = createAsyncThunk(
  'GET_POSTS', //action value
  async (_, thunkAPI) => {
    try {
      const { data } = await getInstance().get('v1/posts');
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getDetailThunk = createAsyncThunk(
  'GET_POST', //action value
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(`v1/posts/${arg}`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __addPostThunk = createAsyncThunk(
  'ADD_POST', //action value

  async (arg, thunkAPI) => {
    //콜백

    try {
      const { data } = await getInstance().post('v1/auth/posts', arg);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __deletePost = createAsyncThunk(
  'DELETE_POST',
  async (arg, thunkAPI) => {
    try {
      console.log('delete', arg);
      await getInstance().delete(`/v1/auth/posts/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __getSearchThunk = createAsyncThunk(
  'GET_SEARCH',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(`${basePath}/posts/search?keyword=${arg}&type=roomTitle&page=1`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

 
const initialState = {
  post: { data: {}, isLoading: false, error: null },
  posts: { data: [], isLoading: false, error: null },
};

export const postsSlice = createSlice({
  name: 'post', //모듈의 이름
  initialState,
  reducers: {},
  extraReducers: {
    //get
    [__getThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload;
    },

    //get Detail
    [__getDetailThunk.pending]: (state) => {
      state.post.isLoading = true;
    },
    [__getDetailThunk.rejected]: (state, action) => {
      state.post.isLoading = false;
      state.post.error = action.payload;
    },
    [__getDetailThunk.fulfilled]: (state, action) => {
      state.post.isLoading = false;
      state.post.data = action.payload;
    },

    //add Post
    [__addPostThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__addPostThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data.push(action.payload);
      // console.log('state.posts.data', current(state.posts.data));
    },
    [__addPostThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
    },

    //delete Post
    [__deletePost.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      console.log('Delete.action.payload', action.payload);
      console.log('state.posts.data', current(state.posts.data));
      const target = state.posts.data.findIndex(
        (post) => post.id === parseInt(action.payload)
      );
      console.log('target', target);
      state.posts.data.splice(target, 1);
    },
    [__deletePost.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },

    //get Search
    [__getSearchThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getSearchThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getSearchThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload.content;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
