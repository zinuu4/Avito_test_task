// "use client";

import { CustomButtonProps } from "@/types/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
