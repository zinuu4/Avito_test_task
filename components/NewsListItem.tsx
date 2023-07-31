import { NewsListItemProps } from "@/types/types";
import Link from "next/link";

const NewsListItem = ({
  title,
  rating,
  author,
  date,
  id,
}: NewsListItemProps) => {
  return (
    <Link href={`/${id}`}>
      <div className="flex justify-center flex-col items-center p-5 mb-5 rounded-md border border-1 cursor-pointer">
        <h6 className="font-bold text-blue-500 mb-3">Title: {title}</h6>
        <div className="mb-2">Rating: {rating}</div>
        <div className="mb-1">By: {author}</div>
        <div>Date: {new Date(date * 1000).toLocaleString()}</div>
      </div>
    </Link>
  );
};

export default NewsListItem;
