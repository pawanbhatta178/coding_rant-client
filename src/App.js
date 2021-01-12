import React, { useState } from 'react';
import { Resizable } from "re-resizable";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import {ReactComponent as ReactLogo} from './icons/caret-down-fill.svg';


const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

function App() {

  const [data] = useState([
    { id: "js", name: "JavaScript", more: "Some more information" },
    { id: "py", name: "Python", more: "Some more information" },
    { id: "go", name: "Golang", more: "Some more information" },
    { id: "ts", name: "Typescript", more: "Some more information" },
    { id: "c", name: "C", more: "Some more information" },
    { id: "cpp", name:"C++", more: "Some more information" },

  ]);
  const [chosenLang, setChosenLang] = useState('js');


  const onSelect=(e) => {
    setChosenLang(e.target.id);
  }

  return (
    <div className="App text-black-500 resize-x">
      Hello
      <Resizable
    style={style}
    defaultSize={{
      width: 200,
      height: 200
    }}
  >

      </Resizable>
      <Button size="sm"  type="primary">Easjjsjasjasjjasjasj</Button>
      <Button size="sm" type="secondary">Enable <ReactLogo/></Button>
      <Button size="sm"  type="basic">Enable</Button>
      <Button size="sm"  type="delete">Enable</Button>
      <Button size="sm" type="deleteOutline">Enable
      </Button>
      <Dropdown options={data} defaultVal={chosenLang} onSelect={onSelect }> 
        <div className="pl-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="currentColor" className=" bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
          </div>
       </Dropdown>
    
    </div>
  );
}

export default App;
