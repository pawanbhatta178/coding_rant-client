import React from "react";
import Button from "./Button";

const NavItem = ({ type, onClick }) => {
  return (
    <div className="px-2">
      <Button size="xs" type="basic" onClick={onClick}>
        {type}
      </Button>
    </div>
  );
};

export default NavItem;
