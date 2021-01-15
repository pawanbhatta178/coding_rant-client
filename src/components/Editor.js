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
  const [isEditorReady, setIsEditorReady] = useState(false);
  const { chosenLang, startingCodes } = useContext(EditorContext);

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  return (
    <div className="code-editor-height border  ">
      <MonacoEditor
        height="100%"
        language={availableLanguage[chosenLang] || "javascript"}
        value={startingCodes[chosenLang]}
        editorDidMount={handleEditorDidMount}
      />
    </div>
  );
};
export default Editor;
