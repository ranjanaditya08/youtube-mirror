import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuDrawerSlice";
import { useSearchParams } from "react-router-dom";
import useVideoList from "../utils/usevideoList";
import Description from "./Description";
import CommentsContainer from "./CommentsContainer";



const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const { videos } = useVideoList();

  const videoData = videos.find((video) => video.id === searchParam.get("v"));

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
        <CommentsContainer videoId={searchParam.get('v')}/>
      </div>
    </div>
  );
};

export default WatchPage;
