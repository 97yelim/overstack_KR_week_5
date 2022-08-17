import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  posts: [],
  isLoading: false,
  success: null,
  error: null,
  post: {},
};

export const __getPosts = createAsyncThunk(
    "posts/__getPosts",
    async (args, thunkAPI) => {
        try {
            //http://localhost:3001/posts
            //http://warmwinter.co.kr/api/posts
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
        const response = await axios.get(
          `http://warmwinter.co.kr/api/posts/${postId}`
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
        await axios.delete(`http://warmwinter.co.kr/api/posts/${ postId }`);
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
  }
})
// export const { } = postSlice.actions;
export default postSlice.reducer;
