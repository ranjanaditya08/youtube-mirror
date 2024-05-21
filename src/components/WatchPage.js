import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuDrawerSlice";
import { useSearchParams } from "react-router-dom";
import Description from "./Description";
import CommentsContainer from "./CommentsContainer";
import { GET_YOUTUBE_VIDEO_BY_ID } from "../utils/constants";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const [videoData, setVideoData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    getVideoData();
  }, []);
  const getVideoData = async () => {
    const data = await fetch(GET_YOUTUBE_VIDEO_BY_ID + searchParam.get("v"));
    const json = await data.json();
    setVideoData(json.items[0]);
  };

  return (
    <div>
      <div className="ml-5 mt-2 p-2">
        <iframe
          className="rounded-xl"
          width="950"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {videoData && <Description snippet={videoData.snippet} />}
        <CommentsContainer videoId={searchParam.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
