import React from "react";
import Button from "./Button";

const EditorAction = ({ ...props }) => {
  return (
    <div {...props}>
      <Button size="sm" type="neutral">
        Submit
      </Button>
    </div>
  );
};

export default EditorAction;
