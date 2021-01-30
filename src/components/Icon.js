import React from "react";
import { ReactComponent as UpVote } from "../icons/thumb-up.svg";
import { ReactComponent as DownVote } from "../icons/thumb-down.svg";
import { ReactComponent as Error } from "../icons/error.svg";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut, BiUser } from "react-icons/bi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { CgMathEqual } from "react-icons/cg";
import { FcCheckmark } from "react-icons/fc";
import { RiCloseFill } from "react-icons/ri";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";

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
    case "Increment":
      return (
        <IconContext.Provider value={{ className: "text-green-600 h-2.5" }}>
          <GoTriangleUp />
        </IconContext.Provider>
      );
    case "Decrement":
      return (
        <IconContext.Provider value={{ className: "text-red-600 h-2.5" }}>
          <GoTriangleDown />
        </IconContext.Provider>
      );
    case "Equal":
      return (
        <IconContext.Provider value={{ className: "text-gray-600 h-2.5" }}>
          <CgMathEqual />
        </IconContext.Provider>
      );
    case "Correct":
      return (
        <IconContext.Provider value={{ className: "text-green-600" }}>
          <FcCheckmark />
        </IconContext.Provider>
      );
    case "Wrong":
      return (
        <IconContext.Provider value={{ className: "text-red-600 " }}>
          <RiCloseFill />
        </IconContext.Provider>
      );
    case "More":
      return (
        <IconContext.Provider value={{ className: "text-gray-800 " }}>
          <BsFillCaretDownFill />
        </IconContext.Provider>
      );
    case "Next":
      return (
        <IconContext.Provider value={{ className: "text-gray-800 " }}>
          <GrNext />
        </IconContext.Provider>
      );
    case "Previous":
      return (
        <IconContext.Provider value={{ className: "text-gray-800 " }}>
          <GrPrevious />
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
