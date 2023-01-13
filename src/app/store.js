import { configureStore } from "@reduxjs/toolkit";
import blogPostsReducer from "../features/blogPostsSlice";
import React from "react";

const store = configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
  },
});

export default store;
