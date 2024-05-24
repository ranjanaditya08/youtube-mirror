import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuDrawerSlice";
import { useSearchParams } from "react-router-dom";
import Description from "./Description";
import CommentsContainer from "./CommentsContainer";
import { GET_YOUTUBE_VIDEO_BY_ID } from "../utils/constants";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const [videoData, setVideoData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    getVideoData();
  }, [searchParam]);
  
  const getVideoData = async () => {
    const data = await fetch(GET_YOUTUBE_VIDEO_BY_ID + searchParam.get("v"));
    const json = await data.json();
    setVideoData(json.items[0]);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/5 p-2">
        <div>
          <iframe
            className="rounded-xl w-full h-[40vw]"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          {videoData && <Description snippet={videoData.snippet} />}
          {videoData && (
            <VideoContainer categoryId={videoData.snippet.categoryId} />
          )}
        </div>
      </div>
      <div className="w-full md:w-2/5 p-2">
        <CommentsContainer videoId={searchParam.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
