import React from "react";
import Icon from "./Icon";
import SubmissionLatest from "./SubmissionLatest";
import { CSSTransition } from "react-transition-group";
import "./SubmissionPrevious.css";

const style = (error, result, passed) => {
  if (error) {
    return "border-red-600";
  }
  if (passed) {
    return "border-green-600";
  }
  if (result) {
    return "border-yellow-600";
  }
};

const SubmissionPrevious = ({ submission }) => {
  const [toggleContent, setToggleContent] = React.useState(false);
  const [error] = React.useState(submission?.error);
  const [result] = React.useState(submission?.testResult);
  const [passed] = React.useState(
    submission?.testResult?.reduce(
      (acc, currentValue) => currentValue.passed && acc,
      true
    )
  );

  return (
    <>
      <div
        className={`flex justify-between items-center p-2 mb-4  cursor-pointer border border-l-4 ${style(
          error,
          result,
          passed
        )}`}
        onClick={() => setToggleContent(!toggleContent)}
      >
        <div className="text-xs">PrevSubmission</div>
        <div>
          <Icon type="More" />
        </div>
      </div>
      <CSSTransition
        in={toggleContent}
        unmountOnExit
        classNames="result-dropdown"
        timeout={300}
      >
        <div className="p-2">
          <SubmissionLatest submission={submission} />
        </div>
      </CSSTransition>
    </>
  );
};

export default SubmissionPrevious;
