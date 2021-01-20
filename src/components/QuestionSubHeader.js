import React, { useContext } from "react";
import Icon from "./Icon";
import UserContext from "../UserContext";
import ModalContext from "../ModalContext";
import ErrorContext from "../ErrorContext";
import QuestionTypeCard from "./QuestionTypeCard";

const QuestionSubHeader = ({ questionDetails }) => {
  const { user, userDispatch } = useContext(UserContext);
  const { errorDispatch } = useContext(ErrorContext);
  const { modalDispatch } = useContext(ModalContext);
  return (
    <div className="text-xs bg-gray-100 rounded-md text-gray-800 flex justify-between items-center px-2 py-2 ">
      <QuestionTypeCard difficulty={questionDetails?.difficulty} />
      <div className="flex">
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
        <span className="light-text">{questionDetails.up_votes}</span>
      </div>
      <div className="flex">
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
        <span className="light-text">{questionDetails.down_votes}</span>
      </div>
      <div>
        Submissions:{" "}
        <span className="light-text">
          {questionDetails.successful_submissions}+
        </span>
      </div>
    </div>
  );
};

export default QuestionSubHeader;
