import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
    likeNumber: 0,
    isLike: true,
    isLoading: false,
    success: null,
    error: null,
};

export const __toggleLike = createAsyncThunk(
    "like/__toggleLike",
    async (isLike, thunkAPI) => {
      try {
        const response = await axios.patch(
          "http://localhost:3001/like/",
          {isLike: isLike}
        );
        return thunkAPI.fulfillWithValue(isLike);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )




// createSlice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
  extraReducers: {
    [__toggleLike.pending]: (state, action) => {
        state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.isLike = action.payload;
    },
    [__toggleLike.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
  }
})
// export const { } = postSlice.actions;
export default postSlice.reducer;
