import React from "react";
import Question from "./components/Question";
import SplitPane from "./components/SplitPane";
import EditorContainer from "./components/EditorContainer";

function App() {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="navbar-height">navbar</div>
      <div className="w-screen body-height">
        <SplitPane
          className="flex border h-full"
          minLeftWidth="120px"
          minRightWidth="120px"
        >
          <EditorContainer className="h-full flex flex-col border " />
          <Question />
        </SplitPane>
      </div>
    </div>
  );
}

export default App;
