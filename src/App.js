
import { Resizable } from "re-resizable";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown"
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

function App() {
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
      <Button size="sm" type="primary">Enable</Button>
      <Button size="sm"  type="secondary">Enable</Button>
      <Button size="sm"  type="basic">Enable</Button>
      <Button size="sm"  type="delete">Enable</Button>
      <Button size="sm"  type="deleteOutline">Enable</Button>
       <Dropdown/>

    </div>
  );
}

export default App;
