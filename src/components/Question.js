import React from "react";
import CardInput from "./CardInput";
import QuestionSubHeader from "./QuestionSubHeader";

const Question = ({ questionDetails }) => {
  return (
    <>
      <QuestionSubHeader questionDetails={questionDetails} />
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
