import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
import ModalContext from "../ModalContext";
import Login from "./Login";
import Register from "./Register";

const Modal = (props) => {
  const { showModal, setModal } = useContext(ModalContext);
  const renderComponent = (modelName) => {
    switch (modelName) {
      case "Login":
        return <Login />;
      case "Register":
        return <Register />;
      default:
        return false;
    }
  };

  const preventPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div {...props}>
      <CSSTransition
        in={typeof showModal === "string"}
        unmountOnExit
        classNames="modal"
        timeout={2000}
      >
        <div
          className="bg-gray-100 bg-opacity-100 max-w-xs mx-auto relative px-8 py-4 rounded-md border-l-2  border-purple-700 shadow-inner"
          onClick={(e) => preventPropagation(e)}
        >
          <button
            className="absolute top-1 right-2 font-semibold focus:outline-none hover"
            onClick={() => setModal(false)}
          >
            &times;
          </button>
          {renderComponent(showModal)}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
