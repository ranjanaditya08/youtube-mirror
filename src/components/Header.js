import React from "react";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import userIcon from "../assets/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuDrawerSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between mt-2 px-6 py-2">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 w-9 hover:bg-gray-200 rounded-full cursor-pointer mr-3"
          src={menu}
          alt="menu"
        />
        <a href="/">
          <img className="h-8 cursor-pointer" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex">
        <input
          className="w-[550px] h-9 rounded-l-full border border-gray-400 focus:outline-none focus:border-blue-700 px-4 py-1"
          type="text"
          placeholder="Search"
        />
        <span className="h-9 px-5 rounded-r-full border border-gray-400 p-2 bg-gray-100 cursor-pointer">
          <img className="h-5 w-5" src={search} alt="search" />
        </span>
      </div>
      <img className="h-9 w-9" src={userIcon} alt="user icon" />
    </div>
  );
};

export default Header;
