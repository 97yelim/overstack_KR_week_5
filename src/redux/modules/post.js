import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  posts: [],
  isLoading: false,
  success: null,
  error: null,
  post: {},
  bestposts: []
};

export const __getBestPosts = createAsyncThunk(
  "posts/__getBestPosts",
  async (args, thunkAPI) => {
    try {
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      const response = await axios.get("http://warmwinter.co.kr/api/bestpost",{},{headers: headers} 
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __getPosts = createAsyncThunk(
  "posts/__getPosts",
  async (args, thunkAPI) => {
    try {
      const response = await axios.get("http://warmwinter.co.kr/api/posts");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPost = createAsyncThunk(
  "posts/__getPost",
  async (postId, thunkAPI) => {
    try {
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      const response = await axios.get(
        `http://warmwinter.co.kr/api/posts/${postId}`,{},{headers: headers} 
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "posts/__deletePost",
  async (postId, thunkAPI) => {
    try {
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      await axios.delete(`http://warmwinter.co.kr/api/posts/${postId}`,{headers: headers});
      return thunkAPI.fulfillWithValue({ postId });
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)


// createSlice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
  extraReducers: {
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [__deletePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getBestPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getBestPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bestposts = action.payload;
    },
    [__getBestPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})
// export const { } = postSlice.actions;
export default postSlice.reducer;
