import { useState } from "react";

const Description = ({ snippet }) => {
  const { channelTitle, description, title } = snippet;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExapnd = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="">
      <div>
        <p className="font-bold text-xl mb-1">{title}</p>
        <p className="font-medium mb-2">{channelTitle}</p>
        <p className="mb-2 border border-slate-200 rounded-lg bg-slate-100 text-sm p-2 whitespace-pre-line">
          {isExpanded ? description : `${description.substring(0, 200)}`}
          <button
            onClick={toggleExapnd}
            className="font-semibold text-blue-700"
          >
            {isExpanded ? "..Show less" : "..more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Description;
