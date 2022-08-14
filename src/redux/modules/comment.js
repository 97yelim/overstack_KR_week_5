import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  comments: [],
  isLoading: false,
  success: null,
  error: null,
  comment: {},
};

export const __createComment = createAsyncThunk(
  "comments/__createComment",
  async (new_comment, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/comments",
        new_comment
      );
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "posts/__getComments",
  async (postId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/comments?postId=${postId}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


// createSlice
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducer: {},
  extraReducers: {
    [__createComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

// export const { } = commentSlice.actions;
export default commentSlice.reducer;