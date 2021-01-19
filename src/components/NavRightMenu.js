import React, { useContext } from "react";
import NavItem from "./NavItem";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";

const NavRightMenu = () => {
  const { user, userDispatch } = useContext(UserContext);
  const { setModal } = useContext(ModalContext);

  return (
    <div className="flex justify-end w-1/2">
      {user ? (
        <NavItem
          type="Logout"
          onClick={() => userDispatch({ type: "LOGOUT" })}
        />
      ) : (
        <>
          <NavItem type="Login" onClick={() => setModal("Login")} />
          <NavItem type="Register" onClick={() => setModal("Register")} />
        </>
      )}
    </div>
  );
};

export default NavRightMenu;
