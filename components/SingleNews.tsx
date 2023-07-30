"use client";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { CustomButton } from ".";

const SingleNews = () => {
  const updateComments = () => {};
  return (
    <div className="flex justify-center flex-col items-center h-screen mt-96">
      <h1 className="font-bold text-xl text-blue-500 mb-3">
        Title: My YC app: Dropbox - Throw away your USB drive
      </h1>
      <a
        className="mb-1 text-lg"
        rel="stylesheet"
        href="http://www.getdropbox.com/u/2/screencast.html"
      >
        <span>Read more</span>
      </a>
      <div className="mb-1 text-lg">Date: 3921319</div>
      <div className="mb-1 text-lg">Author: zinu4</div>
      <div className="mb-5 text-lg">Comments: 21</div>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 240,
          flexGrow: 1,
          maxWidth: 400,
          overflowY: "auto",
          margin: "0 auto",
        }}
      >
        <TreeItem nodeId="1" label="Comments">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Calendar" />
          <TreeItem nodeId="4" label="Calendar" />
        </TreeItem>
      </TreeView>
      <CustomButton
        title="Update comments"
        containerStyles="bg-blue-500 text-white rounded-full mt-10 hover:bg-blue-600"
        handleClick={updateComments}
      />
    </div>
  );
};

export default SingleNews;
