import React from "react";

const VideoCard = ({ info }) => {
  if (info === undefined) return;
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  let viewCount = parseInt(statistics.viewCount);

  if (viewCount >= 1000000) {
    viewCount = (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    viewCount = (viewCount / 1000).toFixed(1) + "K";
  } else {
    viewCount = viewCount.toString();
  }

  return (
    <div className="p-2">
      <img
        className="rounded-lg w-full h-auto object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold text-base line-clamp-2">{title}</li>
        <li className="text-gray-500 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-sm">
          {viewCount}
          <span className="tracking-tight text-sm"> views</span>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
