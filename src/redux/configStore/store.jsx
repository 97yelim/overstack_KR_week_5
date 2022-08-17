import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post"
import comment from "../modules/comment"
import user from "../modules/user"

const store = configureStore({
  reducer: { post, comment, user }
});

export default store;