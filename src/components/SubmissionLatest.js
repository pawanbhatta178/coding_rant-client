import React from "react";
import Icon from "./Icon";
import Button from "./Button";
import ModalContext from "../ModalContext";

const SubmissionLatest = ({ submission }) => {
  const { modalDispatch } = React.useContext(ModalContext);
  const [error] = React.useState(submission?.error);
  const [result] = React.useState(submission?.testResult);

  return (
    <div className="pb-6 mb-6 ">
      {error ? (
        <div className="text-red-600 flex flex-col ">
          <div className="text-xl pb-4">{error.name || "Error"}</div>
          <div className="border bg-red-100 overflow-y-scroll h-24 p-2 rounded-sm">
            {error.stack || error.message || error}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-1">
          <div className="text-xs flex gap-x-4 h-10 bg-gradient-to-r from-purple-400 to-purple-500 text-white items-center mb-2 px-2 rounded-sm">
            <div className="flex gap-x-2">
              <div className="text-purple-200">Time Taken:</div>
              <div>
                {Math.round(submission?.timeTaken * 1000) / 1000 || "NA"}
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="text-purple-200">Word Count:</div>
              <div>{submission?.wordCount || "NA"}</div>
            </div>
            <div className="flex gap-x-2">
              <div className="text-purple-200">Rank:</div>
              <div>{submission?.ranked ? "Yes" : "No"}</div>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <div className="text-xs text-gray-600 p-2 border bg-purple-100">
              {" "}
              Test Id
            </div>
            <div className="text-xs text-gray-600 p-2 border bg-purple-100">
              {" "}
              Argument
            </div>
            <div className="text-xs text-gray-600 p-2 border bg-purple-100">
              Expected
            </div>
            <div className="text-xs text-gray-600 p-2 border bg-purple-100">
              Passed
            </div>
            {result.map((testCase, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="col-span-1 border text-gray-600 p-2">
                    {testCase.id}
                  </div>
                  <div className="col-span-1 border p-2">
                    {testCase.arguments}
                  </div>
                  <div className="col-span-1 border p-2">
                    {testCase.expectedOutput}
                  </div>
                  <div className="col-span-1 border p-2">
                    {testCase.passed ? (
                      <Icon type="Correct" />
                    ) : (
                      <Icon type="Wrong" />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          {submission?.code && (
            <Button
              className="flex justify-end"
              type="basic"
              size="xs"
              onClick={() =>
                modalDispatch({ type: "SHOW_CODE", payload: submission.code })
              }
            >
              <div className="flex gap-x-1 items-center ">
                See Code <Icon type="Eye" />
              </div>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmissionLatest;
