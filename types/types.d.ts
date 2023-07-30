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
}
