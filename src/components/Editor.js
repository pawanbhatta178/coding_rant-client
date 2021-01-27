import React, { useState, useRef, useContext } from "react";
import MonacoEditor from "@monaco-editor/react";
import EditorContext from "../EditorContext.js";

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
  const { editor, chosenLang, startingCodes, editorDispatch } = useContext(
    EditorContext
  );
  const [isEditorReady, setIsEditorReady] = useState(false);

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
        value={"DEFAULT"}
        editorDidMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default Editor;
