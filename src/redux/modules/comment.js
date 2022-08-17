import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

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
        "http://warmwinter.co.kr/api/comments",
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
      //http://warmwinter.co.kr/api/comments
      //http://localhost:3001/comments?postId=${postId}
      const response = await axios.get(
        `http://warmwinter.co.kr/api/comments?postId=${postId}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __editComment = createAsyncThunk(
  "comments/__editComment",
  async (edit_comment, thunkAPI) => {
    try {
      const { comment_id, edit_body } = edit_comment;
      const response = await axios.patch(
        `http://warmwinter.co.kr/api/comments/${comment_id}`,
        edit_body
      );
      const edit_id = response.data;
      return thunkAPI.fulfillWithValue(edit_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __deleteComment = createAsyncThunk(
  "comments/__deleteComment",
  async (comment_id, thunkAPI) => {
    try {
      await axios.delete(`http://warmwinter.co.kr/api/comments/${comment_id}`)
      return thunkAPI.fulfillWithValue(comment_id);
    } catch (error) {

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
    },
    [__editComment.peding]: (state, action) => {
      state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload.id;
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(target, 1, action.payload);
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload
      );
      state.comments.splice(target, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

// export const { } = commentSlice.actions;
export default commentSlice.reducer;