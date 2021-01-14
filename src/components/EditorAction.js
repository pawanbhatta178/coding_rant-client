import React from "react";
import Button from "./Button";

const EditorAction = ({ ...props }) => {
  return (
    <div {...props}>
      <Button size="sm" type="neutral">
        Compile
      </Button>
    </div>
  );
};

export default EditorAction;
