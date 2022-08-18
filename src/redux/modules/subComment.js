import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlSubComments = {
    comments: process.env.REACT_APP_SUBCOMMENTS
  }
  
  const urlGetSubComments = {
    comments: process.env.REACT_APP_GETSUBCOMMENTS
  }

// REACT_APP_SUBCOMMENTS = "http://warmwinter.co.kr/api/subcomments"
// REACT_APP_GETSUBCOMMENTS = "http://warmwinter.co.kr/api/subcomments?commentId="

// initialState
const initialState = {
    subComments: [],
    isLoading: false,
    success: null,
    error: null,
    subcomment: {},
};

export const __createSubComment = createAsyncThunk(
    "reply/__createSubComment",
    async (new_SubComment, thunkAPI) => {
        try {
            const Refreshtoken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
              'Content-Type': 'application/json',
              Authorization: `${Authorization}`,
              Refreshtoken: `${Refreshtoken}`
            }
            const response = await axios.post(
                urlSubComments.comments,new_SubComment,{headers: headers}
            );
            return thunkAPI.fulfillWithValue(response.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const __getSubComments = createAsyncThunk(
    "reply/__getSubComments",
    async (commentId, thunkAPI) => {
        try {
            const Refreshtoken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
              'Content-Type': 'application/json',
              Authorization: `${Authorization}`,
              Refreshtoken: `${Refreshtoken}`
            }
            const response = await axios.get(
                `${urlGetSubComments.comments}${commentId}`,{},{headers: {headers}}
            );
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __editSubComment = createAsyncThunk(
    "reply/__editSubComment",
    async (edit_subComment, thunkAPI) => {
        try {
            const Refreshtoken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
              'Content-Type': 'application/json',
              Authorization: `${Authorization}`,
              Refreshtoken: `${Refreshtoken}`
            }
            const { subComment_id, edit_body } = edit_subComment;
            const response = await axios.put(
                `${urlSubComments.comments}/${subComment_id}`,edit_body,{headers: headers}
            );
            const edit_id = response.data;
            return thunkAPI.fulfillWithValue(edit_id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __deleteSubComment = createAsyncThunk(
    "reply/__deleteSubComment",
    async (subComment_id, thunkAPI) => {
        try {
            const Refreshtoken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
              'Content-Type': 'application/json',
              Authorization: `${Authorization}`,
              Refreshtoken: `${Refreshtoken}`
            }
            await axios.delete(`${urlSubComments.comments}/${subComment_id}`, {headers: headers}, {})
            console.log(headers)
            return thunkAPI.fulfillWithValue(subComment_id);
        } catch (error) {

        }
    }
)





// createSlice
const subCommentSlice = createSlice({
    name: "subComments",
    initialState,
    reducer: {},
    extraReducers: {
        [__createSubComment.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__createSubComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.success = action.payload;
        },
        [__createSubComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__getSubComments.pending]: (state) => {
            state.isLoading = true;
        },
        [__getSubComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.subComments = action.payload;
        },
        [__getSubComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__editSubComment.peding]: (state, action) => {
            state.isLoading = true;
        },
        [__editSubComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.success = action.payload.id;
            const target = state.subComments.findIndex(
                (subComment) => subComment.id === action.payload.id
            );
            state.subComments.splice(target, 1, action.payload);
        },
        [__editSubComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__deleteSubComment.pending]: (state) => {
            state.isLoading = true;
        },
        [__deleteSubComment.fulfilled]: (state, action) => {
            state.isLoading = false;
            const target = state.subComments.findIndex(
                (subComment) => subComment.id === action.payload
            );
            state.subComments.splice(target, 1);
        },
        [__deleteSubComment.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})
// export const { } = postSlice.actions;
export default subCommentSlice.reducer;
