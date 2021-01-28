import React, { useState, useRef, useContext } from "react";
import MonacoEditor from "@monaco-editor/react";
import EditorContext from "../EditorContext.js";
import QuestionContext from "../QuestionContext";
import { getQuestion } from "../api/question";

const availableLanguage = {
  js: "javascript",
  py: "python",
  cpp: "cpp",
  c: "c",
  ts: "typescript",
  go: "go",
  java: "java",
};

const Editor = () => {
  const editorRef = useRef();
  const { editor, editorDispatch } = useContext(EditorContext);
  const { chosenLang } = editor;
  const [setIsEditorReady] = useState(false);
  const { activeQuestionId } = useContext(QuestionContext);
  const [value, setValue] = useState("");

  React.useEffect(() => {
    (async () => {
      const questionDetails = await getQuestion(activeQuestionId);
      const starterCode = questionDetails[`${chosenLang}_starter_code`];
      if (!starterCode) {
        return;
      }
      setValue(starterCode);
    })();
  }, [activeQuestionId, chosenLang]);

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  function handleEditorChange(value, event) {
    editorDispatch({ type: "UPDATE_CODE", payload: value });
  }

  return (
    <div className="code-editor-height border  ">
      <MonacoEditor
        height="100%"
        language={availableLanguage[chosenLang] || "javascript"}
        value={value}
        editorDidMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default Editor;
