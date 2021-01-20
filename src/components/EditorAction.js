import React from "react";
import Button from "./Button";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";

const EditorAction = ({ ...props }) => {
  const { user } = React.useContext(UserContext);
  const { modalDispatch } = React.useContext(ModalContext);
  return (
    <div {...props}>
      <Button
        size="sm"
        type="neutral"
        onClick={() => {
          if (!user) {
            modalDispatch({ type: "SHOW_LOGIN" });
          }
          // console.log("COMPILING");
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default EditorAction;
