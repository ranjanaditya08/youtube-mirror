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
    <div className="">
      <div className="flex ml-5 mt-2 p-2">
        <div className="max-w-[950px] h-[550px] mr-3">
          <iframe
            className="rounded-xl"
            width="950"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div>
            {videoData && (
              <VideoContainer categoryId={videoData.snippet.categoryId} />
            )}
          </div>
        </div>

        <div>
          {videoData && <Description snippet={videoData.snippet} />}
          <CommentsContainer videoId={searchParam.get("v")} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
