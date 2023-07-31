import { Comments, NewsData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsState {
  news: NewsData[];
  singleNews: NewsData;
}

const initialState: NewsState = {
  news: [],
  singleNews: {
    by: "",
    id: 0,
    score: 0,
    time: 0,
    title: "",
    kids: [],
    comments: [],
    url: "",
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<NewsData[]>) {
      state.news = action.payload;
    },
    setSingleNews(state, action: PayloadAction<NewsData>) {
      state.singleNews = action.payload;
    },
    setNewsComments(state, action: PayloadAction<Comments[]>) {
      state.singleNews.comments = action.payload;
    },
  },
});

export const { setNews, setSingleNews, setNewsComments } = newsSlice.actions;

export default newsSlice.reducer;
