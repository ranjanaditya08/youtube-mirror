import React from "react";
import Button from "./Button";
import { listOfButtons } from "../utils/constants";

const ButtonList = ({ setCategoryId }) => {
  return (
    <div className="bg-white flex flex-wrap">
      {listOfButtons.map((button) => (
        <Button key={button.id} info={button} setCategoryId={setCategoryId} />
      ))}
    </div>
  );
};

export default ButtonList;
