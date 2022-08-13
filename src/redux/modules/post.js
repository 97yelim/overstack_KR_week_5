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
            const response = await axios.get("http://localhost:3001/posts");
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
        const { data } = await axios.get(
          `http://localhost:3001/posts/${postId}`
        );
        return thunkAPI.fulfillWithValue(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


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
  }
})
// export const { } = postSlice.actions;
export default postSlice.reducer;
