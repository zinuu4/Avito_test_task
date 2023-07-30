"use client";

import { CustomButton } from ".";

const UpdateNews = () => {
  const updateNews = () => {};
  return (
    <CustomButton
      title="Update News"
      containerStyles="bg-blue-500 text-white rounded-full mt-10 hover:bg-blue-600"
      handleClick={updateNews}
    />
  );
};

export default UpdateNews;
