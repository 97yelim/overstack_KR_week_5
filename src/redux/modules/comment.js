import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlComments = {
  comments: process.env.REACT_APP_COMMENTS
}

const urlGetComments = {
  comments: process.env.REACT_APP_GETCOMMENTS
}


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
        urlComments.comments,new_comment,{headers: headers}
      );
      console.log(response.data)
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
        `${urlGetComments.comments}${postId}`,{},{headers: headers});
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
        `${urlComments.comments}/${comment_id}`,edit_body,{headers: headers});
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
      await axios.delete(`${urlComments.comments}/${comment_id}`,{headers: headers})
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
      state.success = action.payload;
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