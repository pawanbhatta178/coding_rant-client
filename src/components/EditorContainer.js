import React, { useState } from "react";
import EditorContext from "../EditorContext.js";
import EditorNavBar from "./EditorNavBar";
import Editor from "./Editor";
import EditorAction from "./EditorAction";

const EditorContainer = ({ ...props }) => {
  return (
    <div {...props}>
      <EditorNavBar className="flex justify-end py-1 bg-gray-200" />
      <Editor />
      <EditorAction className="flex-1 flex editor-actions-height justify-center py-1 bg-gray-200" />
    </div>
  );
};

export default EditorContainer;
