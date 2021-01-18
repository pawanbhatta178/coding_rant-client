import "./Question.css";
import React, { useState, useContext } from "react";
import QuestionContext from "../QuestionContext";
import { getQuestion } from "../api/question";
import Question from "./Question";
const QuestionContainer = (props) => {
  const { activeQuestionId } = useContext(QuestionContext);
  const [question, setQuestion] = useState(null);

  React.useEffect(() => {
    (async () => {
      const questionDetails = await getQuestion(activeQuestionId);
      console.log(questionDetails);
      setQuestion(questionDetails);
    })();
  }, [activeQuestionId]);

  return (
    <div {...props}>{question && <Question questionDetails={question} />}</div>
  );
};

export default QuestionContainer;
