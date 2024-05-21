import { useState, useEffect } from "react";
import { COMMENTS_API } from "./constants";

const useCommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, [videoId]);
  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId);
    const json = await data.json();

    setComments(json?.items);
  };

  return comments;
};

export default useCommentsList;
