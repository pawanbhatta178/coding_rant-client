import React from "react";
import Icon from "./Icon";
const SubmissionLatest = ({ submission }) => {
  const [error, setError] = React.useState(submission?.error);
  const [result, setResult] = React.useState(submission?.testResult);
  return (
    <>
      {error ? (
        <div className="text-red-600 flex flex-col">
          <div className="text-xl">{error.name}</div>
          <div className="border bg-gray-100 overflow-y-scroll h-24 p-2 rounded-sm">
            {error.stack || error.message}
          </div>
        </div>
      ) : (
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
            console.log(result);
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
      )}
    </>
  );
};

export default SubmissionLatest;
