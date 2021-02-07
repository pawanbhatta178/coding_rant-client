import React, { useContext } from "react";
import Icon from "./Icon";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";
import { logUserOut } from "../api/user";
const NavSubMenu = ({ items, toggleSubMenu }) => {
  const { userDispatch } = useContext(UserContext);
  const { modalDispatch } = useContext(ModalContext);

  const dispatchActions = async (clickedItem) => {
    switch (clickedItem) {
      case "Logout":
        const data = await logUserOut();
        if (data) {
          userDispatch({ type: "LOGOUT" });
          toggleSubMenu();
        }
        return;
      case "Profile":
        modalDispatch({ type: "SHOW_PROFILE" });
        toggleSubMenu();
        return;
      default:
        return;
    }
  };

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          onClick={async () => await dispatchActions(item)}
          className="px-2 py-2 text-xs text-gray-600 hover:bg-gray-200 hover:text-gray-800 overflow-hidden flex gap-x-3 "
        >
          <Icon type={item} />
          {item}
        </div>
      ))}
    </div>
  );
};

export default NavSubMenu;
