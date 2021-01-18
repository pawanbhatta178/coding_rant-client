import React, { useState } from "react";
import { ReactComponent as UpVote } from "../icons/thumb-up.svg";
import { ReactComponent as DownVote } from "../icons/thumb-down.svg";

const getIconComponent = ({ type, filled }) => {
  switch (type) {
    case "upVote":
      return <UpVote fill={filled ? "current" : "none"} />;
    case "downVote":
      return <DownVote fill={filled ? "current" : "none"} />;
    default:
      return null;
  }
};

const Icon = ({ type, filled, ...props }) => {
  return <div {...props}>{getIconComponent({ type, filled })}</div>;
};

export default Icon;
