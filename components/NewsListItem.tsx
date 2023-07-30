import { NewsListItemProps } from "@/types/types";

const NewsListItem = ({ title, rating, author, date }: NewsListItemProps) => {
  return (
    <div className="flex justify-center flex-col items-center p-5 rounded-md border border-1">
      <h6 className="font-bold text-blue-500 mb-3">Title: {title}</h6>
      <div className="mb-2">Rating: {rating}</div>
      <div className="mb-1">By: {author}</div>
      <div>Date: {date}</div>
    </div>
  );
};

export default NewsListItem;
