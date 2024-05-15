import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menuDrawer.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="w-52 h-full px-3 transition duration-150 bg-white">
        <ul className="border-b mb-1">
          <Link to={"/"}>
            <li className="list-style">Home</li>
          </Link>
          <li className="list-style">Shorts</li>
          <li className="list-style mb-2">Subscriptions</li>
        </ul>
        <h2 className=" hover:bg-gray-300 px-6 py-2 cursor-pointer rounded-lg text-[16px] font-bold">
          You <span className="ml-2">{">"}</span>
        </h2>
        <ul className="border-b mb-1">
          <li className="list-style">Your channel</li>
          <li className="list-style">History</li>
          <li className="list-style">Playlists</li>
          <li className="list-style">Your videos</li>
          <li className="list-style">Watch later</li>
          <li className="list-style mb-2">Liked videos</li>
        </ul>
        <h2 className=" hover:bg-gray-300 px-6 py-2 cursor-pointer rounded-lg text-[16px] font-bold">
          Explore
        </h2>
        <ul>
          <li className="list-style">Trending</li>
          <li className="list-style">Music</li>
          <li className="list-style">Movies</li>
          <li className="list-style">Live</li>
          <li className="list-style">Gaming</li>
          <li className="list-style">News</li>
          <li className="list-style mb-2">Sports</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
