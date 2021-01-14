import React,{useState,useRef} from "react"; 
import MonacoEditor from '@monaco-editor/react';

const availableLanguage = {
    js: 'javascript',
    py: 'python',
    cpp: 'cpp',
    c: 'c',
    ts: 'typescript',
    go:'go',
}



const Editor = ({activeLanguage, codeSnippet}) =>{
    const editorRef = useRef();
    const [isEditorReady, setIsEditorReady] = useState(false);
    function handleEditorDidMount(_, editor) {
          setIsEditorReady(true);
        editorRef.current = editor;
      }
     

    return (
    <>
    <div className="h-9/10 border">
    <MonacoEditor height="100%" language={availableLanguage[activeLanguage] || 'javascript'} value={codeSnippet} editorDidMount={handleEditorDidMount} /> 
    </div>
    <div className="full border"></div>
    </>
);
}
export default Editor;