import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

interface NewsListItemProps {
  title: string;
  rating: number;
  author: string;
  date: number;
  id: number;
}

interface Comments {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

interface NewsData {
  by: string;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
  descendants?: number;
  comments: Comments[];
}
