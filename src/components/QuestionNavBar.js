import React from "react";
import QuestionNavItem from "./QuestionNavItem";

const QuestionNavBar = ({ challengeState, challengeDispatch, ...props }) => {
  return (
    <div {...props}>
      {console.log(challengeState)}
      <QuestionNavItem
        active={challengeState === "Description"}
        name={"Description"}
        onClick={() => challengeDispatch({ type: "SHOW_DESCRIPTION" })}
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
