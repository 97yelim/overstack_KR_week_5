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


// createSlice
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducer: {},
})

// export const { } = commentSlice.actions;
export default commentSlice.reducer;