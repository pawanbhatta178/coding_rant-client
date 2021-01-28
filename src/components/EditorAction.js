import React from "react";
import Button from "./Button";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";
import ChallengeContext from "../ChallengeContext";
import EditorContext from "../EditorContext";
import SubmissionContext from "../SubmissionContext";
import QuestionContext from "../QuestionContext";

import compile from "../api/compile";

const EditorAction = ({ ...props }) => {
  const { user } = React.useContext(UserContext);
  const { modalDispatch } = React.useContext(ModalContext);
  const { challenge, challengeDispatch } = React.useContext(ChallengeContext);
  const { editor, editorDispatch } = React.useContext(EditorContext);
  const {
    submission,
    submissionDispatch,
    submitting,
    setSubmitting,
  } = React.useContext(SubmissionContext);
  const { activeQuestionId, setActiveQuestionId } = React.useContext(
    QuestionContext
  );

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
          challengeDispatch({ type: "SHOW_RESULT" });
          compile({
            source: editor.code,
            lang: editor.chosenLang,
            questionId: activeQuestionId,
          }).then((res) => {
            console.log(submission);
            submissionDispatch({
              type: "ADD_SUBMISSION",
              payload: {
                id: activeQuestionId,
                submission: res,
              },
            });
            setSubmitting(false);
          });
        }}
      >
        <div>Submit</div>
      </Button>
      <button onClick={() => setActiveQuestionId("2")}>Next</button>
    </div>
  );
};

export default EditorAction;
