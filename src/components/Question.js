import React, { useContext } from "react";
import CardInput from "./CardInput";
import Icon from "./Icon";
import UserContext from "../UserContext";

const Question = ({ questionDetails }) => {
  const { user, userDispatch } = useContext(UserContext);
  return (
    <>
      <div className="text-sm text-gray-500 flex justify-between justify-items-center">
        <div> {questionDetails.difficulty}</div>
        <div>
          Successful Submissions: {questionDetails.successful_submissions}
        </div>
        <div>
          {user?.upvoted_questions && (
            <Icon
              type="upVote"
              filled={user?.upvoted_questions.includes(questionDetails.id)}
              onClick={() => {
                userDispatch({ type: "UPVOTE", payload: questionDetails.id });
              }}
            />
          )}
          {questionDetails.up_votes}
        </div>
        <div>
          {user?.downvoted_questions && (
            <Icon
              type="downVote"
              filled={user?.downvoted_questions.includes(questionDetails.id)}
              onClick={() => {
                userDispatch({ type: "DOWNVOTE", payload: questionDetails.id });
              }}
            />
          )}
          {questionDetails.down_votes}
        </div>
      </div>
      <div className="font-semibold text-xl pt-2 pb-2">
        {questionDetails.id}. {questionDetails.title}
      </div>
      <div className="text-gray-700"> {questionDetails.question_prompt}</div>
      <CardInput title="Sample Input" className="mt-4">
        {questionDetails.sample_input}
      </CardInput>
      <CardInput title="Sample Output" className="mt-4">
        {questionDetails.sample_output}
      </CardInput>
    </>
  );
};

export default Question;
