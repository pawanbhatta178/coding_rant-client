import React from "react";
import Button from "./Button";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";

const EditorAction = ({ ...props }) => {
  const { user } = React.useContext(UserContext);
  const { setModal } = React.useContext(ModalContext);
  return (
    <div {...props}>
      <Button
        size="sm"
        type="neutral"
        onClick={() => {
          if (!user) {
            setModal("Login");
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
