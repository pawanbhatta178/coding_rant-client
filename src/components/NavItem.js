import React, { useContext } from "react";
import Button from "./Button";
import ModalContext from "../ModalContext";

const NavItem = ({ type }) => {
  const { isModalOn, setIsModalOn } = useContext(ModalContext);
  return (
    <div className="px-2">
      <Button size="xs" type="basic" onClick={() => setIsModalOn(!isModalOn)}>
        {type}
      </Button>
    </div>
  );
};

export default NavItem;
