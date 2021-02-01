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

const SmallCardStyles = {
  passed: "bg-green-100 border-green-400 text-green-700",
  error: "bg-red-100 border-red-600 text-red-700",
  failed: "bg-yellow-100 border-yellow-600 text-yellow-700",
  best: "bg-pink-500 text-white",
};

const SmallCard = ({ type }) => {
  return (
    <div
      className={`text-xs font-light p-1 w-12 flex items-center justify-center capitalize rounded-lg shadow-sm ${SmallCardStyles[type]}`}
    >
      {type}
    </div>
  );
};

const SubmissionPrevious = ({ submission }) => {
  const [toggleContent, setToggleContent] = React.useState(false);
  const [error] = React.useState(submission?.error);
  const [result] = React.useState(submission?.testResult);
  const [ranked] = React.useState(submission?.ranked);
  const [passed] = React.useState(
    submission?.testResult?.reduce(
      (acc, currentValue) => currentValue.passed && acc,
      true
    )
  );

  return (
    <>
      <div
        className={`flex justify-between items-center p-2 mb-4  cursor-pointer border border-l-4 hover:bg-gray-50 rounded-sm ${style(
          error,
          result,
          passed
        )}`}
        onClick={() => setToggleContent(!toggleContent)}
      >
        <div className="text-sm flex items-center gap-x-1">
          <div>
            <Icon type="Hash" />{" "}
          </div>
          {` `}
          <div className="text-gray-600 text-base font-semibold">
            {submission.submissionId}
          </div>
        </div>
        <div className="flex gap-x-2 ">
          {ranked && <SmallCard type="best" />}
          {passed && <SmallCard type="passed" />}
          {error && <SmallCard type="error" />}
          {!passed && !error && <SmallCard type="failed" />}
          <div>
            <Icon type="More" />
          </div>
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
