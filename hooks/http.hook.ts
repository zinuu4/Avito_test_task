import { useState } from "react";
import axios from "axios";

import { useAppDispatch } from "@/hooks/UseAppState";
import { setSingleNews, setNews } from "@/store/slices/newsSlice";

const useHttp = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetch100News() {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const topStoryIds = response.data.slice(0, 100);
      const newsPromises = topStoryIds.map((storyId: number) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      );
      const newsResponses = await Promise.all(newsPromises);
      const sortedNewsList = newsResponses
        .map((res) => res.data)
        .sort((a, b) => b.time - a.time);
      dispatch(setNews(sortedNewsList));
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  async function fetchSingleNews(id: number) {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );

      dispatch(setSingleNews(response.data));
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  async function fetchComments(ids: number[]) {
    try {
      setLoading(true);
      setError(false);
      const commentPromises = ids.map((commentId) =>
        axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
        )
      );
      const commentResponses = await Promise.all(commentPromises);
      const nestedComments = commentResponses.map((res) => res.data);
      setLoading(false);
      return nestedComments;
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  return { fetch100News, fetchSingleNews, fetchComments, loading, error };
};

export default useHttp;
