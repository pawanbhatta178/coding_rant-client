import React from "react";

const CardInput = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <div className="font-semibold">{title}</div>
      <div className="border py-2 px-2 bg-gray-200 text-gray-800 rounded-md overflow-y-scroll max-h-20">
        {children}
      </div>
    </div>
  );
};

export default CardInput;
