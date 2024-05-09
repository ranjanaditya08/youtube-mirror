import VideoCard from "./VideoCard";
import useVideoList from "../utils/usevideoList";

const VideoContainer = () => {
  const videos = useVideoList();

  return (
    <div className="mt-6 flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
