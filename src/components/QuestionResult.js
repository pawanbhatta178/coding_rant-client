import React, { useContext } from "react";
import SubmissionContext from "../SubmissionContext";
import Loading from "./Loading";
import QuestionSubmission from "./QuestionSubmission";

const QuestionResult = ({ result }) => {
  const { submitting } = useContext(SubmissionContext);

  return (
    <div className="p-2">
      {submitting ? (
        <Loading text="Submitting" />
      ) : (
        <QuestionSubmission submissions={result || []} />
      )}
    </div>
  );
};

export default QuestionResult;
