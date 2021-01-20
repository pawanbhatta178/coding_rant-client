import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

import CardError from "./CardError";
import ModalContext from "../ModalContext";
import ErrorContext from "../ErrorContext";

const renderComponent = (modelName) => {
  switch (modelName) {
    case "Login":
      return <Login />;
    case "Register":
      return <Register />;
    case "Profile":
      return <Profile />;
    default:
      return false;
  }
};

const Modal = (props) => {
  const { modal, modalDispatch } = useContext(ModalContext);
  const { error, errorDispatch } = useContext(ErrorContext);

  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    return () => {
      errorDispatch({ type: "DISMISS_MODAL_ERROR" });
    };
  }, [errorDispatch]);

  return (
    <div {...props}>
      <CSSTransition
        in={typeof modal === "string"}
        unmountOnExit
        classNames="modal"
        timeout={2000}
      >
        <div
          className="bg-gray-100 bg-opacity-100 max-w-xs mx-auto relative px-8 py-4 rounded-md border-t-4  border-purple-700 shadow-inner"
          onClick={(e) => preventPropagation(e)}
        >
          <button
            className="absolute top-1 right-2 font-semibold focus:outline-none hover"
            onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
          >
            &times;
          </button>

          {error?.modalError && (
            <CardError
              msg={error.modalError.msg}
              type={error.modalError.type}
            />
          )}
          {renderComponent(modal)}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
