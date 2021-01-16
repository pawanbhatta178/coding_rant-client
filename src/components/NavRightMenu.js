import React, { useContext } from "react";
import NavItem from "./NavItem";
import UserContext from "../UserContext";

const NavRightMenu = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-end w-1/2">
      {user ? <NavItem type="Logout" /> : <NavItem type="Login" />}
    </div>
  );
};

export default NavRightMenu;
