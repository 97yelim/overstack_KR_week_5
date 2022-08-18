import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  data: true,
  isLoading: false,
  success: null,
  error: null,
};

export const __toggleLike = createAsyncThunk(
  "like/__toggleLike",
  async (postId, thunkAPI) => {
    try {
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`
      }
      const response = await axios.post(
        `http://warmwinter.co.kr/api/posts/heart/${postId}`,{},{headers: headers} 
      );
      return thunkAPI.fulfillWithValue(response.data);
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
      state.data = action.payload;
    },
    [__toggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})
// export const { } = postSlice.actions;
export default postSlice.reducer;
