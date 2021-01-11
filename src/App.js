
import { Resizable } from "re-resizable";
import Button from "./components/Button";

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
      <Button size="lg" disabled={true} type="primary">Enable</Button>
      <Button size="lg" disabled={false} type="secondary">Enable</Button>
      <Button size="lg" disabled="false" type="basic">Enable</Button>
      <Button size="lg" disabled="false" type="delete">Enable</Button>
      <Button size="lg" disabled="false" type="deleteOutline">Enable</Button>


    </div>
  );
}

export default App;
