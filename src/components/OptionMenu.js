import React from "react";
import MenuItem from "./MenuItem";
import "./OptionMenu.css";

const OptionMenu = ({ options, onSelect, toggleOptionMenu }) => {
  return (
    <div className="bg-white option-menu absolute top-8 border h-24 w-26 overflow-x-hidden overflow-y-scroll flex flex-col z-40 ">
      {options?.map((option, i) => (
        <MenuItem
          key={i}
          optionData={option}
          onSelect={onSelect}
          toggleOptionMenu={toggleOptionMenu}
        />
      ))}
    </div>
  );
};

export default OptionMenu;
