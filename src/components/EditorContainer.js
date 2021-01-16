import React, { useState } from "react";
import EditorContext from "../EditorContext.js";
import EditorNavBar from "./EditorNavBar";
import Editor from "./Editor";
import EditorAction from "./EditorAction";

const EditorContainer = ({ ...props }) => {
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
    <div {...props}>
      <EditorContext.Provider
        value={{ languages, startingCodes, chosenLang, changeLang }}
      >
        <EditorNavBar className="flex justify-end py-1 bg-gray-200" />
        <Editor />
        <EditorAction className="flex-1 flex editor-actions-height justify-center py-1 bg-gray-200" />
      </EditorContext.Provider>
    </div>
  );
};

export default EditorContainer;
