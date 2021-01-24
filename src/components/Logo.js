import React from "react";

const Logo = () => {
  return (
    <button
      className="font-mono font-lighter tracking-tight cursor-pointer focus:outline-none"
      onClick={() => console.log("clicked")}
    >
      <span>Coding</span>
      <span>rant.</span>
    </button>
  );
};

export default Logo;
