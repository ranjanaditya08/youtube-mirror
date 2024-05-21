import React from "react";
import Comments from "./Comments";
import useCommentsList from "../utils/useCommentsList";

const CommentsContainer = ({ videoId }) => {
  const comments = useCommentsList({ videoId });

  return (
    <div className="max-W-[950px]">
      <h5 className="font-bold text-xl mt-3 mb-4">Comments:</h5>
      {comments.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
