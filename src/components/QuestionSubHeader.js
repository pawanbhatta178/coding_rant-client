import React, { useContext } from "react";
import Icon from "./Icon";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";
import ErrorContext from "../ErrorContext";

const QuestionSubHeader = ({ questionDetails }) => {
  const { user, userDispatch } = useContext(UserContext);
  const { errorDispatch } = useContext(ErrorContext);
  const { modal, modalDispatch } = useContext(ModalContext);
  return (
    <div className="text-sm text-gray-500 flex justify-between justify-items-center">
      <div> {questionDetails.difficulty}</div>
      <div>
        Successful Submissions: {questionDetails.successful_submissions}
      </div>
      <div>
        {user?.upvoted_questions ? (
          <Icon
            type="upVote"
            filled={user?.upvoted_questions.includes(questionDetails.id)}
            onClick={() => {
              userDispatch({ type: "UPVOTE", payload: questionDetails.id });
            }}
          />
        ) : (
          <Icon
            type="upVote"
            onClick={() => {
              errorDispatch({
                type: "SET_MODAL_ERROR",
                payload: {
                  msg: "Please login before you can upvote the challenge.",
                  type: "error",
                },
              });
              modalDispatch({ type: "SHOW_LOGIN" });
            }}
          />
        )}
        {questionDetails.up_votes}
      </div>
      <div>
        {user?.downvoted_questions ? (
          <Icon
            type="downVote"
            filled={user?.downvoted_questions.includes(questionDetails.id)}
            onClick={() => {
              userDispatch({ type: "DOWNVOTE", payload: questionDetails.id });
            }}
          />
        ) : (
          <Icon
            type="downVote"
            onClick={() => {
              errorDispatch({
                type: "SET_MODAL_ERROR",
                payload: {
                  msg: "Please login before you can downvote the challenge.",
                  type: "error",
                },
              });
              modalDispatch({ type: "SHOW_LOGIN" });
            }}
          />
        )}
        {questionDetails.down_votes}
      </div>
    </div>
  );
};

export default QuestionSubHeader;
