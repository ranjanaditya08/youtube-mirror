import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "./constants";

const useVideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return videos;
};

export default useVideoList;
