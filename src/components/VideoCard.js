import React from "react";

const VideoCard = ({ info }) => {
  if (info === undefined) return;
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="max-w-[360px] mt-2 mr-4 hover:shadow-sm p-2 rounded-md">
      <img
        className="rounded-lg w-[358.2px] h-[201px]"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold text-wrap">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">
          {statistics.viewCount}
          <span className="tracking-tight text-sm"> views</span>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
