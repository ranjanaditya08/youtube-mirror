import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className=" max-w-[360px] mt-2 mr-4 mb-4 px-2 py-1 rounded-md">
      <div className="rounded-lg w-[340px] h-[198px] bg-slate-200"></div>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full mr-2 bg-slate-200"></div>
        <div>
          <div className="bg-slate-200 w-[290px] py-2 mt-2 rounded-sm"></div>
          <div className="bg-slate-200 w-[250px] py-2 mt-2 rounded-sm mb-2"></div>
        </div>
      </div>
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
