import React from "react";
import Button from "./Button";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";
import ChallengeContext from "../ChallengeContext";

const EditorAction = ({ ...props }) => {
  const { user } = React.useContext(UserContext);
  const { modalDispatch } = React.useContext(ModalContext);
  const { challenge, challengeDispatch } = React.useContext(ChallengeContext);
  const [submitting, setSubmitting] = React.useState(false);

  return (
    <div {...props}>
      <Button
        size="sm"
        type={"neutral"}
        disabled={submitting}
        onClick={() => {
          if (!user) {
            return modalDispatch({ type: "SHOW_LOGIN" });
          }
          setSubmitting(true);
          setTimeout(() => {
            challengeDispatch({ type: "SHOW_RESULT" });
            setSubmitting(false);
          }, 2000);
        }}
      >
        <div>Submit</div>
      </Button>
    </div>
  );
};

export default EditorAction;
