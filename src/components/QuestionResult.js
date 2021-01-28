import React, { useContext } from "react";
import SubmissionContext from "../SubmissionContext";
import QuestionContext from "../QuestionContext";
import Loading from "./Loading";
import QuestionSubmission from "./QuestionSubmission";

const QuestionResult = () => {
  const { submission, submitting } = React.useContext(SubmissionContext);
  const { activeQuestionId } = React.useContext(QuestionContext);
  const [result, setResult] = React.useState();

  React.useEffect(() => {
    let data = submission[activeQuestionId];
    if (!data) {
      setResult(null);
    } else {
      setResult(data);
    }
  }, [submission, activeQuestionId]);

  return (
    <div className="m-2">
      {submitting ? (
        <Loading text="Submitting" />
      ) : (
        <QuestionSubmission submissions={result || []} />
      )}
    </div>
  );
};

export default QuestionResult;
