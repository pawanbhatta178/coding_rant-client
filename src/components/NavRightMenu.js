import React, { useContext } from "react";
import NavItem from "./NavItem";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";

const NavRightMenu = () => {
  const { user, userDispatch } = useContext(UserContext);
  const { modal, modalDispatch } = useContext(ModalContext);

  return (
    <div className="flex justify-end w-1/2">
      {user ? (
        <NavItem
          type="Logout"
          onClick={() => userDispatch({ type: "LOGOUT" })}
        />
      ) : (
        <>
          <NavItem
            type="Login"
            onClick={() => modalDispatch({ type: "SHOW_LOGIN" })}
          />
          <NavItem
            type="Register"
            onClick={() => modalDispatch({ type: "SHOW_REGISTER" })}
          />
        </>
      )}
    </div>
  );
};

export default NavRightMenu;
