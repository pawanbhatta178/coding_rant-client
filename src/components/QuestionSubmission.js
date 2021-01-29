import React from "react";
import SubmissionLatest from "./SubmissionLatest";
import SubmissionPrevious from "./SubmissionPrevious";

const QuestionSubmission = ({ submissions }) => {
  return submissions.length === 0 ? (
    <div className="flex justify-center items-center">No Submissions Yet</div>
  ) : (
    submissions.map((submission, i) => {
      return i === 0 ? (
        <SubmissionLatest key={i} submission={submission} />
      ) : (
        <SubmissionPrevious key={i} submission={submission} />
      );
    })
  );
};

export default QuestionSubmission;
