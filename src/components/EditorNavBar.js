import React from "react";
import Dropdown from "./Dropdown";

const EditorNavBar = ({ ...props }) => {
  return (
    <div {...props}>
      <Dropdown />
    </div>
  );
};

export default EditorNavBar;
