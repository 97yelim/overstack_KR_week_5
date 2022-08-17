import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post"
import comment from "../modules/comment"
import user from "../modules/user"
import like from "../modules/like";
import subComment from "../modules/subComment";

const store = configureStore({
  reducer: { post, comment, like, subComment, user }
});

export default store;