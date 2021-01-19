import React from "react";
import { CSSTransition } from "react-transition-group";

import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import SplitPane from "./components/SplitPane";
import EditorContainer from "./components/EditorContainer";
import QuestionContainer from "./components/QuestionContainer";
import { getUserDetails, logUserIn } from "./api/user";

import UserContext from "./UserContext";
import ModalContext from "./ModalContext";
import QuestionContext from "./QuestionContext";
import ErrorContext from "./ErrorContext";

const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOADED":
      return action.payload;
    case "LOGIN":
      return logUserIn(action.payload.login, action.payload.password);
    case "LOGOUT":
      return null;
    case "UPVOTE":
      if (state.upvoted_questions.includes(action.payload)) {
        return {
          ...state,
          upvoted_questions: state.upvoted_questions.filter(
            (questionId) => questionId !== action.payload
          ),
        };
      }
      return {
        ...state,
        downvoted_questions: state.downvoted_questions.filter(
          (questionId) => questionId !== action.payload
        ),
        upvoted_questions: [action.payload, ...state.upvoted_questions],
      };
    case "DOWNVOTE":
      if (state.downvoted_questions.includes(action.payload)) {
        return {
          ...state,
          downvoted_questions: state.downvoted_questions.filter(
            (questionId) => questionId !== action.payload
          ),
        };
      }
      return {
        ...state,
        upvoted_questions: state.upvoted_questions.filter(
          (questionId) => questionId !== action.payload
        ),
        downvoted_questions: [action.payload, ...state.downvoted_questions],
      };
    default:
      return state;
  }
};

const errorReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL_ERROR":
      return { ...state, modalError: action.payload };
    case "DISMISS_MODAL_ERROR":
      return { ...state, modalError: null };
    default:
      return state;
  }
};

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [userState, userDispatch] = React.useReducer(userReducer, null);
  const [errorState, errorDispatch] = React.useReducer(errorReducer, null);

  React.useEffect(() => {
    (async () => {
      const user = await getUserDetails();
      userDispatch({ type: "USER_LOADED", payload: user });
    })();
  }, []);

  React.useEffect(() => {
    setModal(false);
  }, [userState]);

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
            </ErrorContext.Provider>
          </QuestionContext.Provider>
        </UserContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
