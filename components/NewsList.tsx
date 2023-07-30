"use client";

import { NewsListItem } from ".";

const NewsList = () => {
  return (
    <ul>
      <NewsListItem
        title="My YC app: Dropbox - Throw away your USB drive"
        rating={104}
        author="dhouston"
        date={1175714200}
      />
    </ul>
  );
};

export default NewsList;
