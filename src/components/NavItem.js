import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import { CSSTransition } from "react-transition-group";
import "./NavItem.css";
import NavSubMenu from "./NavSubMenu";

const NavItem = ({ type, onClick, subItems }) => {
  const [subMenu, setSubMenu] = React.useState(false);

  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return !subItems ? (
    <div className="px-2">
      <Button size="xs" type="basic" onClick={onClick}>
        {type}
      </Button>
    </div>
  ) : (
    <div className="relative">
      <div className="text-gray-600 hover:text-gray-800">
        <Icon type="navProfile" onClick={() => toggleSubMenu()} />
      </div>
      <CSSTransition
        in={subMenu}
        classNames="sub-menu"
        unmountOnExit
        timeout={500}
      >
        <div className="absolute top-8 right-0 z-30 rounded-sm shadow-lg bg-white">
          <NavSubMenu items={subItems.items} toggleSubMenu={toggleSubMenu} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default NavItem;
