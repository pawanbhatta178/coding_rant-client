import React from "react";
import { CSSTransition } from "react-transition-group";

import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import SplitPane from "./components/SplitPane";
import EditorContainer from "./components/EditorContainer";
import QuestionContainer from "./components/QuestionContainer";

import UserContext from "./UserContext";
import ModalContext from "./ModalContext";
import QuestionContext from "./QuestionContext";

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const setModal = (modelName) => {
    switch (modelName) {
      case "Login":
        setShowModal("Login");
        break;
      case "Register":
        setShowModal("Register");
        break;
      default:
        setShowModal(false);
    }
  };

  return (
    <div className="relative h-screen overflow-y-hidden">
      <ModalContext.Provider value={{ showModal, setModal }}>
        <UserContext.Provider value={{ user: null }}>
          <QuestionContext.Provider value={{ activeQuestionId: "1" }}>
            <NavBar className="navbar-height" />
            <div className="w-screen body-height">
              <SplitPane
                className="flex border h-full"
                minLeftWidth="120px"
                minRightWidth="120px"
              >
                <EditorContainer className="h-full flex flex-col border " />
                <QuestionContainer className="h-full flex flex-col overflow-auto mx-2 my-2 text-sm" />
              </SplitPane>
            </div>

            <CSSTransition
              in={typeof showModal === "string"}
              classNames="overlay"
              timeout={500}
              unmountOnExit
            >
              <Modal
                className="absolute top-0 bg-gray-800 bg-opacity-50 h-screen w-full py-24"
                onClick={() => setModal(false)}
              />
            </CSSTransition>
          </QuestionContext.Provider>
        </UserContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
