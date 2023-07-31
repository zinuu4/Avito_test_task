"use client";

import { useEffect, useState } from "react";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Spinner from "./spinner/Spinner";
import ErrorMessage from "./errorMessage/ErrorMessage";

import { useAppSelector } from "@/hooks/UseAppState";
import useHttp from "@/hooks/http.hook";
import { cleanHtmlFromText } from "@/utils/cleanHtmlFromText";
import { Comments } from "@/types/types";

const CommentsTree = () => {
  const { comments } = useAppSelector((state) => state.news.singleNews);

  const [nestedCommentsMap, setNestedCommentsMap] = useState<any>({});

  const { fetchComments, loading, error } = useHttp();

  const fetchNestedComments = async (rootCommentId: number, kids: number[]) => {
    try {
      const res = await fetchComments(kids ? kids : []);
      if (res && res?.length > 0) {
        setNestedCommentsMap((prevMap: any) => ({
          ...prevMap,
          [rootCommentId]: res,
        }));
      }
    } catch (error) {
      console.error("Error fetching nested comments:", error);
    }
  };

  useEffect(() => {
    comments?.forEach(({ id, kids }) => {
      fetchNestedComments(id, kids);
    });
  }, [comments]);

  const loadingMessage = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(loading || error) ? (
    <View comments={comments} nestedCommentsMap={nestedCommentsMap} />
  ) : null;

  return (
    <>
      {loadingMessage}
      {errorMessage}
      {content}
    </>
  );
};

interface ViewProps {
  comments: Comments[];
  nestedCommentsMap: any;
}

const View = ({ comments, nestedCommentsMap }: ViewProps) => {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        maxHeight: 400,
        flexGrow: 1,
        width: 400,
        overflowY: "auto",
        margin: "0 auto",
      }}
    >
      {comments?.map(({ id, text, by }) => (
        <div className="py-4 border-b w-auto border-gray-300" key={id}>
          <TreeItem
            nodeId={id.toString()}
            label={`${by}: ${cleanHtmlFromText(text)}`}
          >
            {nestedCommentsMap[id]?.map(
              ({ id, text, by }: { id: number; text: string; by: string }) => (
                <div key={id} className="mt-5">
                  <TreeItem
                    nodeId={id.toString()}
                    label={`${by}: ${cleanHtmlFromText(text)}`}
                  />
                </div>
              )
            )}
          </TreeItem>
        </div>
      ))}
    </TreeView>
  );
};

export default CommentsTree;
