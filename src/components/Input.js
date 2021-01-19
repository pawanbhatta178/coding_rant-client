import React from "react";

const Input = ({ ...props }) => {
  return (
    <div className="mt-4">
      <input
        className="w-full h-10 border focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-opacity-50 rounded-sm px-2"
        {...props}
      />
    </div>
  );
};

export default Input;
