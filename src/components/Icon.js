import React from "react";
import { ReactComponent as UpVote } from "../icons/thumb-up.svg";
import { ReactComponent as DownVote } from "../icons/thumb-down.svg";
import { ReactComponent as Error } from "../icons/error.svg";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut, BiUser } from "react-icons/bi";

const getIconComponent = ({ type, filled }) => {
  switch (type) {
    case "upVote":
      return <UpVote fill={filled ? "current" : "none"} />;
    case "downVote":
      return <DownVote fill={filled ? "current" : "none"} />;
    case "error":
      return <Error fill={filled ? "red" : "none"} />;
    case "navProfile":
      return (
        <IconContext.Provider value={{ color: "current" }}>
          <FaUserCircle />
        </IconContext.Provider>
      );
    case "Profile":
      return (
        <IconContext.Provider value={{ color: "current" }}>
          <BiUser />
        </IconContext.Provider>
      );
    case "Logout":
      return (
        <IconContext.Provider value={{ color: "current" }}>
          <BiLogOut />
        </IconContext.Provider>
      );
    default:
      return null;
  }
};

const Icon = ({ type, filled, ...props }) => {
  return <div {...props}>{getIconComponent({ type, filled })}</div>;
};

export default Icon;