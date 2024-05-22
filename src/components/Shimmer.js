import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="max-w-[360px] mt-2 mr-4 mb-4 px-2 py-1 rounded-md bg-slate-100">
      <div className="rounded-lg w-[340px] h-[198px] bg-slate-100"></div>
      <div className="bg-slate-200 w-[340px] py-4 mt-2 rounded-md"></div>
      <div className="bg-slate-200 w-[340px] py-4 mt-2 rounded-md"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
    </div>
  );
};

export default Shimmer;
