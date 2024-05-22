import VideoCard from "./VideoCard";
import useVideoList from "../utils/usevideoList";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = ({ categoryId }) => {
  const { videos, isLoading } = useVideoList(categoryId);

  return (
    <div className="mt-6 flex flex-wrap">
      {isLoading ? (
        <Shimmer />
      ) : (
        videos.map((video) => (
          <Link
            key={video.id}
            to={
              "/watch?v=" +
              video.id +
              "&ab_channel=" +
              video.snippet.channelTitle
            }
          >
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
