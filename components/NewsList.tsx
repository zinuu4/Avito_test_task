"use client";

import { useEffect } from "react";

import ErrorMessage from "./errorMessage/ErrorMessage";
import Spinner from "./spinner/Spinner";
import { CustomButton, NewsListItem } from ".";

import useHttp from "@/hooks/http.hook";
import { useAppSelector } from "@/hooks/UseAppState";
import { NewsData } from "@/types/types";

const NewsList = () => {
  const { news } = useAppSelector((state) => state.news);

  const { fetch100News, loading, error } = useHttp();

  useEffect(() => {
    if (news.length <= 0) {
      fetch100News();
    }

    const intervalId = setInterval(() => {
      fetch100News();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <View news={news} loading={loading} error={error} />
      <CustomButton
        title="Update News"
        containerStyles="bg-blue-500 text-white rounded-full mt-10 hover:bg-blue-600"
        handleClick={fetch100News}
      />
    </>
  );
};

interface ViewProps {
  news: NewsData[];
  loading: boolean;
  error: boolean;
}

const View = ({ news, loading, error }: ViewProps) => {
  const loadingMessage = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(error || loading) ? (
    <ul>
      {news.map(({ id, title, by, score, time }) => (
        <NewsListItem
          key={id}
          id={id}
          title={title}
          rating={score}
          author={by}
          date={time}
        />
      ))}
    </ul>
  ) : null;

  return (
    <>
      {loadingMessage}
      {errorMessage}
      {content}
    </>
  );
};

export default NewsList;
