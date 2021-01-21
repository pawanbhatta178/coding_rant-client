import React from "react";
import challengeReducer from "../reducers/challengeReducer";
import CardInput from "./CardInput";
import LeaderBoard from "./LeaderBoard";
import QuestionNavBar from "./QuestionNavBar";
import QuestionSubHeader from "./QuestionSubHeader";

const Question = ({ questionDetails }) => {
  const [challengeState, challengeDispatch] = React.useReducer(
    challengeReducer,
    "Description"
  );

  return (
    <>
      <QuestionNavBar
        className="bg-gray-200 h-12 flex justify-start"
        challengeState={challengeState}
        challengeDispatch={challengeDispatch}
      />
      {challengeState === "Description" ? (
        <div className="mx-4 py-4">
          <QuestionSubHeader questionDetails={questionDetails} />
          <div className="sticky top-0 font-semibold medium-text text-xl pt-2 pb-2 bg-white shadow-sm">
            {questionDetails.id}. {questionDetails.title}
          </div>
          <div className="text-gray-700 pt-4">
            {" "}
            {questionDetails.question_prompt}
          </div>
          <CardInput title="Sample Input" className="mt-4">
            {questionDetails.sample_input}
          </CardInput>
          <CardInput title="Sample Output" className="mt-4">
            {questionDetails.sample_output}
          </CardInput>
        </div>
      ) : (
        <LeaderBoard />
      )}
    </>
  );
};

export default Question;
