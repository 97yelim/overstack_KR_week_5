import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post"
import comment from "../modules/comment"
import like from "../modules/like";

const store = configureStore({
  reducer: { post, comment, like }
});

export default store;