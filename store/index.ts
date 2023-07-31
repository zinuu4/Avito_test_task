"use client";

import { configureStore } from "@reduxjs/toolkit";
import news from "./slices/newsSlice";

const store = configureStore({
  reducer: {
    news,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
