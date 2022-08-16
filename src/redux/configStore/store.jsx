import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post"
import comment from "../modules/comment"
import like from "../modules/like";
import subComment from "../modules/subComment";

const store = configureStore({
  reducer: { post, comment, like, subComment }
});

export default store;