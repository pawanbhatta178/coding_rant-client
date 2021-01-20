import React from "react";

const styles = {
  Easy: "text-green-600",
  Medium: "text-yellow-500",
  Hard: "text-red-400",
  Legendary: "text-pink-700",
};

const QuestionTypeCard = ({ difficulty }) => {
  return (
    <div className={`${styles[difficulty] || "text-gray-800"}`}>
      {" "}
      {difficulty}
    </div>
  );
};

export default QuestionTypeCard;
