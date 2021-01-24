import React from "react";
import "./Loading.css";
const Loading = ({ text }) => {
  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className="border p-1 border-purple-300 rounded-full h-16 w-16 flex flex-col gap-y-2 justify-center items-center shadow-lg ">
        <div className="loader "></div>
        <div className="text-xs font-thin">{text}</div>
      </div>
    </div>
  );
};

export default Loading;
