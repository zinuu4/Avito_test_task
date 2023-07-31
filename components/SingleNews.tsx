"use client";

import Link from "next/link";
import { useEffect } from "react";

import { CustomButton } from ".";
import { CommentsTree } from ".";
import Spinner from "./spinner/Spinner";
import ErrorMessage from "./errorMessage/ErrorMessage";

import useHttp from "@/hooks/http.hook";
import { useAppDispatch, useAppSelector } from "@/hooks/UseAppState";
import { setNewsComments } from "@/store/slices/newsSlice";

const SingleNews = ({ id }: { id: number }) => {
  const { by, time, kids, title, url } = useAppSelector(
    (state) => state.news.singleNews
  );

  const dispatch = useAppDispatch();

  const { fetchSingleNews, loading, error } = useHttp();

  useEffect(() => {
    fetchSingleNews(id);
  }, [id]);

  useEffect(() => {
    updateComments();
  }, [kids]);

  const {
    fetchComments,
    loading: commentsLoading,
    error: commentsError,
  } = useHttp();

  const updateComments = async () => {
    if (kids && kids.length > 0) {
      const res = await fetchComments(kids);

      if (res && res.length > 0) {
        dispatch(setNewsComments(res));
      }
    }
  };

  const date = new Date(time * 1000).toLocaleString();

  const loadingMessage = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(error || loading) ? (
    <View
      title={title}
      url={url}
      date={date}
      by={by}
      kids={kids}
      commentsError={commentsError}
      commentsLoading={commentsLoading}
    />
  ) : null;

  return (
    <div className="flex justify-center flex-col items-center h-fit mt-14">
      {loadingMessage}
      {errorMessage}
      {content}
      <CustomButton
        title="Update comments"
        containerStyles="bg-blue-500 text-white rounded-full mt-10 hover:bg-blue-600"
        handleClick={updateComments}
      />
      <Link href="/">
        <CustomButton
          title="Back to all news"
          containerStyles="bg-blue-500 text-white rounded-full mt-10 hover:bg-blue-600"
        />
      </Link>
    </div>
  );
};

interface ViewProps {
  date: string;
  title: string;
  url: string;
  by: string;
  kids: number[];
  commentsLoading: boolean;
  commentsError: boolean;
}

const View = ({
  title,
  url,
  date,
  by,
  kids,
  commentsLoading,
  commentsError,
}: ViewProps) => {
  const commentsLoadingMessage = commentsLoading ? <Spinner /> : null;
  const commentsErrorMessage = commentsError ? <ErrorMessage /> : null;
  const commentsContent = !(commentsError || commentsLoading) ? (
    <CommentsTree />
  ) : null;

  return (
    <>
      <h1 className="font-bold text-xl text-blue-500 mb-3">Title: {title}</h1>
      <a className="mb-1 text-lg" rel="stylesheet" href={url}>
        <span>Read more</span>
      </a>
      <div className="mb-1 text-lg">Date: {date}</div>
      <div className="mb-1 text-lg">Author: {by}</div>
      <div className="mb-5 text-lg">
        Comments: {kids?.length ? kids?.length : "0"}
      </div>
      {commentsLoadingMessage}
      {commentsErrorMessage}
      {kids?.length > 0 ? (
        commentsContent
      ) : (
        <div>No comments for this News yet</div>
      )}
    </>
  );
};

export default SingleNews;
