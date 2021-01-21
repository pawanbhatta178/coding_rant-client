import React from "react";
import { CSSTransition } from "react-transition-group";

import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import SplitPane from "./components/SplitPane";
import EditorContainer from "./components/EditorContainer";
import QuestionContainer from "./components/QuestionContainer";
import { getUserDetails } from "./api/user";

import UserContext from "./UserContext";
import ModalContext from "./ModalContext";
import QuestionContext from "./QuestionContext";
import ErrorContext from "./ErrorContext";
import userReducer from "./reducers/userReducer";
import errorReducer from "./reducers/errorReducer";
import modalReducer from "./reducers/modalReducer";

function App() {
  const [userState, userDispatch] = React.useReducer(userReducer, null);
  const [errorState, errorDispatch] = React.useReducer(errorReducer, null);
  const [modalState, modalDispatch] = React.useReducer(modalReducer, null);

  React.useEffect(() => {
    (async () => {
      const user = await getUserDetails();
      userDispatch({ type: "USER_LOADED", payload: user });
    })();
  }, []);

  React.useEffect(() => {
    if (!userState) {
      return;
    }
    if (userState?.error) {
      errorDispatch({
        type: "SET_LOGIN_ERROR",
        payload: { error: userState.error },
      });
      userDispatch({ type: "CLEAR" });
    } else {
      modalDispatch({ type: "CLOSE_MODAL" });
    }
  }, [userState]);

  return (
    <div className="relative h-screen overflow-y-hidden">
      <ModalContext.Provider value={{ modal: modalState, modalDispatch }}>
        <UserContext.Provider value={{ user: userState, userDispatch }}>
          <QuestionContext.Provider value={{ activeQuestionId: "1" }}>
            <ErrorContext.Provider value={{ error: errorState, errorDispatch }}>
              <NavBar className="navbar-height" />
              <div className="w-screen body-height">
                <SplitPane
                  className="flex border h-full"
                  minLeftWidth="120px"
                  minRightWidth="120px"
                >
                  <EditorContainer className="h-full flex flex-col border " />
                  <QuestionContainer className="h-full flex flex-col overflow-auto  pb-12 text-sm" />
                </SplitPane>
              </div>

              <CSSTransition
                in={typeof modalState === "string"}
                classNames="overlay"
                timeout={500}
                unmountOnExit
              >
                <Modal
                  className="absolute top-0 bg-gray-800 bg-opacity-50 h-screen w-full py-24"
                  onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
                />
              </CSSTransition>
            </ErrorContext.Provider>
          </QuestionContext.Provider>
        </UserContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
