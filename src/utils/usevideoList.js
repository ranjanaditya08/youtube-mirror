import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "./constants";

const useVideoList = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVideos = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(YOUTUBE_VIDEO_API);
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
  }, []);

  return { videos, isLoading };
};

export default useVideoList;
