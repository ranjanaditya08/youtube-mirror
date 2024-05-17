import React from "react";
import Button from "./Button";

const listOfButtons = [
  "All",
  "Trending",
  "Sports",
  "Movies",
  "Podcasts",
  "Music",
  "News",
  "Thrillers",
  "Mixes",
  "Recently uploaded",
  "Live",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="bg-white flex flex-wrap">
      {listOfButtons.map((name,index) => (
        <Button key={index} name={name}/>
      ))}
    </div>
  );
};

export default ButtonList;
