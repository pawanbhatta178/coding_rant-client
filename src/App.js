import React from "react";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import SplitPane from "./components/SplitPane";
import EditorContainer from "./components/EditorContainer";
import Question from "./components/Question";
import UserContext from "./UserContext";
import ModalContext from "./ModalContext";
function App() {
  const [isModalOn, setIsModalOn] = React.useState(true);
  return (
    <div className="relative h-screen overflow-y-hidden">
      <ModalContext.Provider value={{ isModalOn, setIsModalOn }}>
        <UserContext.Provider value={{ user: null }}>
          <NavBar className="navbar-height" />
          <div className="w-screen body-height">
            <SplitPane
              className="flex border h-full"
              minLeftWidth="120px"
              minRightWidth="120px"
            >
              <EditorContainer className="h-full flex flex-col border " />
              <Question />
            </SplitPane>
          </div>
          {isModalOn && <Modal className="absolute top-0" />}
        </UserContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
