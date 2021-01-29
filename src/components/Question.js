import React from "react";
import LeaderBoard from "./LeaderBoard";
import QuestionDescription from "./QuestionDescription";
import QuestionNavBar from "./QuestionNavBar";
import QuestionResult from "./QuestionResult";
import ChallengeContext from "../ChallengeContext";
import QuestionContext from "../QuestionContext";
import SubmissionContext from "../SubmissionContext";

const renderQuestionComponent = (componentName, data, result) => {
  switch (componentName) {
    case "Description":
      return <QuestionDescription questionDetails={data} />;
    case "Result":
      return <QuestionResult result={result} />;
    case "Leaderboard":
      return <LeaderBoard />;
    default:
      return <QuestionDescription />;
  }
};

const Question = ({ questionDetails }) => {
  const { challenge, challengeDispatch } = React.useContext(ChallengeContext);

  const { submission } = React.useContext(SubmissionContext);
  const { activeQuestionId } = React.useContext(QuestionContext);
  const [result, setResult] = React.useState();

  React.useEffect(() => {
    let data = submission[activeQuestionId];
    console.log(data);
    if (!data) {
      setResult(null);
    } else {
      setResult(data);
    }
  }, [submission, activeQuestionId]);
  return (
    <>
      <QuestionNavBar
        className="bg-gray-200 h-12 min-h-12 flex justify-start"
        challengeState={challenge}
        challengeDispatch={challengeDispatch}
      />
      {renderQuestionComponent(challenge, questionDetails, result)}
    </>
  );
};

export default Question;
