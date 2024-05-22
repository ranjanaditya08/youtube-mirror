import React from "react";

const Comments = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay } =
    comment?.snippet?.topLevelComment?.snippet;

  return (
    <div className="flex mb-5">
      <img
        className="rounded-full h-1/2"
        alt="profile"
        src={authorProfileImageUrl}
      />
      <div className="ml-3">
        <p className="text-sm font-semibold">{authorDisplayName}</p>
        <p className="mt-1">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comments;
