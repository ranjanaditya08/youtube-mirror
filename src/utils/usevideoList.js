import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "./constants";

const useVideoList = (categoryId) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVideos = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(YOUTUBE_VIDEO_API + categoryId);

      const json = await data.json();

      setVideos(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getVideos();
  }, [categoryId]);

  return { videos, isLoading };
};

export default useVideoList;
