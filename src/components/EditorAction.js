import React from "react";
import Button from "./Button";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";
import ChallengeContext from "../ChallengeContext";
import EditorContext from "../EditorContext";
import SubmissionContext from "../SubmissionContext";

import compile from "../api/compile";

const EditorAction = ({ ...props }) => {
  const { user } = React.useContext(UserContext);
  const { modalDispatch } = React.useContext(ModalContext);
  const { challenge, challengeDispatch } = React.useContext(ChallengeContext);
  const [submitting, setSubmitting] = React.useState(false);
  const { editor, editorDispatch } = React.useContext(EditorContext);
  const { submission, setSubmission } = React.useContext(SubmissionContext);

  return (
    <div {...props}>
      {console.log(submission)}
      <Button
        size="sm"
        type={"neutral"}
        disabled={submitting}
        onClick={() => {
          if (!user) {
            return modalDispatch({ type: "SHOW_LOGIN" });
          }
          setSubmitting(true);
          challengeDispatch({ type: "SHOW_RESULT" });
          compile({
            source: editor.code,
            lang: editor.chosenLang,
            questionId: "1",
          }).then((res) => {
            setSubmission((current) => {
              return [...current, res];
            });
            setSubmitting(false);
          });
        }}
      >
        <div>Submit</div>
      </Button>
    </div>
  );
};

export default EditorAction;
