import React from "react";
import Icon from "./Icon";
import SubmissionLatest from "./SubmissionLatest";

const SubmissionPrevious = ({ submission }) => {
  const [toggleContent, setToggleContent] = React.useState(false);

  return (
    <>
      <div
        className="flex justify-between p-2 border cursor-pointer"
        onClick={() => setToggleContent(!toggleContent)}
      >
        <div className="text-sm">PrevSubmission</div>
        <div>
          <Icon type="More" />
        </div>
      </div>
      {toggleContent && (
        <div className="p-2">
          <SubmissionLatest submission={submission} />
        </div>
      )}
    </>
  );
};

export default SubmissionPrevious;
