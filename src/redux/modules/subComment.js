import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
            const response = await axios.post(
                "http://localhost:3001/reply",
                new_SubComment
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
            const response = await axios.get(
                `http://localhost:3001/reply?commentId=${commentId}`
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
            const { subComment_id, edit_body } = edit_subComment;
            const response = await axios.patch(
                `http://localhost:3001/reply/${subComment_id}`,
                edit_body
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
            await axios.delete(`http://localhost:3001/reply/${subComment_id}`)
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
            state.subComments.push(action.payload);
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
