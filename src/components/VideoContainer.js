import VideoCard from "./VideoCard";
import useVideoList from "../utils/usevideoList";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videos = useVideoList();

  return (
    <div className="mt-6 flex flex-wrap">
      {videos.map((video) => (
        <Link
          to={
            "/watch?v=" + video.id + "&ab_channel=" + video.snippet.channelTitle
          }
        >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
