import React from "react";
import Logo from "./Logo";
import NavRightMenu from "./NavRightMenu";
const NavBar = (props) => {
  return (
    <div {...props}>
      <div className="px-8 flex justify-between items-center border h-full">
        <Logo />
        <NavRightMenu />
      </div>
    </div>
  );
};

export default NavBar;
