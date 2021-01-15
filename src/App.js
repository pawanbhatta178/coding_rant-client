import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Editor from "./components/Editor";
import Question from "./components/Question";
import SplitPane from "./components/SplitPane";
import EditorContext from "./components/EditorContext.js";
import EditorAction from "./components/EditorAction";
import EditorNavBar from "./components/EditorNavBar";
function App() {
  const [languages] = useState([
    {
      id: "js",
      name: "JavaScript",
      active: true,
      more: "Some more information",
    },
    { id: "py", name: "Python", active: true, more: "Coming soon" },
    { id: "go", name: "Golang", active: true, more: "Coming soon" },
    { id: "ts", name: "Typescript", active: true, more: "Coming soon" },
    { id: "c", name: "C", active: false, more: "Coming soon" },
    { id: "cpp", name: "C++", active: false, more: "Some more information" },
    { id: "java", name: "Java", active: true, more: "Some more information" },
  ]);
  const [chosenLang, setChosenLang] = useState("js");

  const [startingCodes] = useState({
    js: "//your js code goes here",
    py: "//your py code goes here",
    ts: "//your ts code goes here",
  });

  const changeLang = (id) => {
    if (languages.find((key) => key.id === id && key.active === true)) {
      setChosenLang(id);
    }
    return;
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <div className="navbar-height">navbar</div>
      <div className="w-screen body-height">
        <SplitPane>
          <div className="h-full flex flex-col border ">
            <EditorContext.Provider
              value={{ languages, startingCodes, chosenLang, changeLang }}
            >
              <EditorNavBar className="flex justify-between py-1 bg-gray-200" />
              <Editor />
              <EditorAction className="flex-1 flex justify-center py-1 bg-gray-200" />
            </EditorContext.Provider>
          </div>
          <Question />
        </SplitPane>
      </div>
    </div>
  );
}

export default App;
