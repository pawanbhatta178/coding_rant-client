import React from "react";
import QuestionNavItem from "./QuestionNavItem";

const QuestionNavBar = ({ challengeState, challengeDispatch, ...props }) => {
  return (
    <div {...props}>
      <QuestionNavItem
        active={challengeState === "Description"}
        name={"Description"}
        onClick={() => challengeDispatch({ type: "SHOW_DESCRIPTION" })}
      />
      <QuestionNavItem
        active={challengeState === "Result"}
        name={"Result"}
        onClick={() => challengeDispatch({ type: "SHOW_RESULT" })}
      />
      <QuestionNavItem
        active={challengeState === "Leaderboard"}
        name={"Leaderboard"}
        onClick={() => challengeDispatch({ type: "SHOW_LEADERBOARD" })}
      />
    </div>
  );
};

export default QuestionNavBar;
