import React from "react";

const themeType = {
  error: " border-red-600 bg-red-100 text-red-600 ",
  warning: " border-yellow-600 bg-yellow-100 text-yellow-600 ",
  neutral: " border-gray-600 bg-gray-100 text-gray-600 ",
};

const CardError = ({ type, msg }) => {
  return (
    <div
      className={`border-l-2  text-xs rounded-sm px-4 py-2 shadow-lg ${themeType[type]}`}
    >
      {msg}
    </div>
  );
};

export default CardError;
