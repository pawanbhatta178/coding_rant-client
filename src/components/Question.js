import React from "react";
import LeaderBoard from "./LeaderBoard";
import QuestionDescription from "./QuestionDescription";
import QuestionNavBar from "./QuestionNavBar";
import QuestionResult from "./QuestionResult";
import ChallengeContext from "../ChallengeContext";

const renderQuestionComponent = (componentName, data) => {
  switch (componentName) {
    case "Description":
      return <QuestionDescription questionDetails={data} />;
    case "Result":
      return <QuestionResult />;
    case "Leaderboard":
      return <LeaderBoard />;
    default:
      return <QuestionDescription />;
  }
};

const Question = ({ questionDetails }) => {
  const { challenge, challengeDispatch } = React.useContext(ChallengeContext);

  return (
    <>
      <QuestionNavBar
        className="bg-gray-200 h-12 min-h-12 flex justify-start"
        challengeState={challenge}
        challengeDispatch={challengeDispatch}
      />
      {renderQuestionComponent(challenge, questionDetails)}
    </>
  );
};

export default Question;
