import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import getInstance from '../../shared/api/Request';
import { basePath } from '../../shared/api/Request';

export const __getThunk = createAsyncThunk(
  'GET_POSTS', //action value
  async (_, thunkAPI) => {
    try {
      const { data } = await getInstance().get(`${basePath}/posts`);
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
      const { data } = await getInstance().get(
        `${basePath}/posts/detail/${arg}`
      );

      if (data.success) {
        return thunkAPI.fulfillWithValue(data.data);
      } else if (data.error.code === 'NOT_FOUND_POST') {
        return thunkAPI.rejectWithValue(data.error.code);
      }
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
      const { data } = await getInstance().post(`${basePath}/auth/posts`, arg);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __modifyPostThunk = createAsyncThunk(
  'PATCH_POST',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().put(
        `${basePath}/auth/posts/${arg.postId}`,
        arg
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  'DELETE_POST',
  async (arg, thunkAPI) => {
    try {
      console.log('delete', arg);
      await getInstance().delete(`${basePath}/auth/posts/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __increaseParticipantThunk = createAsyncThunk(
  'INCREASE_PARTICIPANT', //action value

  async (arg, thunkAPI) => {
    //콜백

    try {
      const { data } = await getInstance().post(
        `${basePath}/posts/participant/i/${arg}`,
        arg
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __decreaseParticipantThunk = createAsyncThunk(
  'DECREASE_PARTICIPANT', //action value

  async (arg, thunkAPI) => {
    //콜백

    try {
      const { data } = await getInstance().put(
        `${basePath}/posts/participant/d/${arg}`,
        arg
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __changeAddressThunk = createAsyncThunk(
  'CHANGE_ADDRESS', //action value

  async (arg, thunkAPI) => {
    //콜백
    console.log(arg);
    try {
      const { data } = await getInstance().put(
        `${basePath}/mypages/address/${arg.id}`,
        arg
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getSearchThunk = createAsyncThunk(
  'GET_SEARCH',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(
        `${basePath}/posts/search?page=1&size=1000&${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getReSearchThunk = createAsyncThunk(
  'GET_RESEARCH',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(
        `${basePath}/posts/region/search?page=1&size=1000&${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getCateSearchThunk = createAsyncThunk(
  'GET_CATESEARCH',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(
        `${basePath}/posts/category/search?page=1&size=1000&${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getReCateSearchThunk = createAsyncThunk(
  'GET_RECATESEARCH',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(
        `${basePath}/posts/regionCategory/search?page=1&size=1000&${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getReEntireCateThunk = createAsyncThunk(
  'GET_REENTIRECATE',
  async (arg, thunkAPI) => {
    console.log(arg);
    try {
      const { data } = await getInstance().get(
        `${basePath}/posts/regionEntireCategory/search?page=1&size=1000&${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __getEntireCateThunk = createAsyncThunk(
  'GET_ENTIRECATE',
  async (arg, thunkAPI) => {
    try {
      const { data } = await getInstance().get(
        `${basePath}/posts/entireCategory/search?page=1&size=1000&${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __postRecentWord = createAsyncThunk(
  'POST_RECENTWORD',
  async (arg) => {
    let payload = JSON.stringify({ keyword: arg });
    await getInstance().post(`${basePath}/posts/keyword/create`, payload);
  }
);

export const __getRecentWord = createAsyncThunk('GET_RECENTWORD', async () => {
  const { data } = await getInstance().get(`${basePath}/posts/keyword/my`);
  console.log('data찍어줘', data);
});

const initialState = {
  post: { data: {}, isLoading: false, error: null },
  posts: { data: [], isLoading: false, error: null },
};

export const postsSlice = createSlice({
  name: 'post', //모듈의 이름
  initialState,
  reducers: {
    CLEAR_POSTS: (state) => {
      state.posts = {
        data: [],
        isLoading: false,
        error: null,
      };
    },
    UPDATE_POST: (state, action) => {
      state.post.data = action.payload;
    },
  },
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

    //Modify Post
    [__modifyPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchMovies = action.payload;
    },
    [__modifyPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete Post
    [__deletePost.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      console.log('Delete.action.payload', action.payload);
      console.log('state.posts.data', current(state));
      const target = state.posts.data.findIndex(
        (post) => post.postId === parseInt(action.payload)
      );
      console.log('target', target);
      state.posts.data.splice(target, 1);
    },
    [__deletePost.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },

    //increase Participant
    [__increaseParticipantThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__increaseParticipantThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data.push(action.payload);
      // console.log('state.posts.data', current(state.posts.data));
    },
    [__increaseParticipantThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
    },

    //decrease Participant
    [__decreaseParticipantThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__decreaseParticipantThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchMovies = action.payload;
    },
    [__decreaseParticipantThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //change AddressThunk
    [__changeAddressThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__changeAddressThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchMovies = action.payload;
    },
    [__changeAddressThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
      state.posts.data = action.payload.data;
    },

    //get Region Search
    [__getReSearchThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getReSearchThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getReSearchThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload.data;
    },

    //get Category Search
    [__getCateSearchThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getCateSearchThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getCateSearchThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload.data;
    },

    //get Region Category Search
    [__getReCateSearchThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getReCateSearchThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getReCateSearchThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload.data;
    },

    //get Region Entire Category Search
    [__getReEntireCateThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getReEntireCateThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getReEntireCateThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload.data;
    },

    //get Entire Category Search
    [__getEntireCateThunk.pending]: (state) => {
      state.posts.isLoading = true;
    },
    [__getEntireCateThunk.rejected]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [__getEntireCateThunk.fulfilled]: (state, action) => {
      state.posts.isLoading = false;
      state.posts.data = action.payload.data;
    },
  },
});

export const { CLEAR_POSTS, UPDATE_POST } = postsSlice.actions;
export default postsSlice.reducer;
