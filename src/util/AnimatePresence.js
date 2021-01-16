import React from "react";
import "./AnimatePresence.css";
const AnimatePresence = ({ children, initial, animate, exit }) => {
  console.log(initial, animate, exit);
  return (
    <div className="">
      {console.log(children)} {children}
    </div>
  );
};

export default AnimatePresence;
