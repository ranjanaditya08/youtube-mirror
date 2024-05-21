import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useState } from "react";

const MainContainer = () => {
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div className="ml-5">
      <ButtonList setCategoryId={setCategoryId} />
      <VideoContainer categoryId={categoryId} />
    </div>
  );
};

export default MainContainer;
