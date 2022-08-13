import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post"
import comment from "../modules/comment"

const store = configureStore({
  reducer: { post, comment }
});

export default store;