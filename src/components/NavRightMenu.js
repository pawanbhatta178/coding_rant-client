import React, { useContext } from "react";
import NavItem from "./NavItem";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";

const NavRightMenu = () => {
  const { user } = useContext(UserContext);
  const { modalDispatch } = useContext(ModalContext);
  return (
    <div className="flex justify-end w-1/2">
      {user?.token ? (
        <>
          <NavItem
            type="profile"
            subItems={{
              items: ["Profile", "Logout"],
            }}
          />
        </>
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
