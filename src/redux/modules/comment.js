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
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      const response = await axios.post(
        "http://warmwinter.co.kr/api/comments",new_comment,{headers: headers}
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
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      const response = await axios.get(
        `http://warmwinter.co.kr/api/comments?postId=${postId}`,{},{headers: headers});
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
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      const { comment_id, edit_body } = edit_comment;
      const response = await axios.put(
        `http://warmwinter.co.kr/api/comments/${comment_id}`,edit_body,{headers: headers});
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
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      await axios.delete(`http://warmwinter.co.kr/api/comments/${comment_id}`,{headers: headers})
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