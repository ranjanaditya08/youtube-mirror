import React from "react";

const Button = ({ info: { id, name }, setCategoryId }) => {
  return (
    <div
      onClick={() => setCategoryId(id)}
      className="px-2 py-1 bg-slate-100 rounded-md mr-2 mt-1 text-sm font-medium hover:bg-slate-200 cursor-pointer"
    >
      {name}
    </div>
  );
};

export default Button;
