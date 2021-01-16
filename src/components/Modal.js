import React, { useContext } from "react";
import "./Modal.css";
import ModalContext from "../ModalContext";

const Modal = (props) => {
  const { setModal } = useContext(ModalContext);

  return (
    <div {...props}>
      <div className="bg-white bg-opacity-100 max-w-xs mx-auto relative px-8 py-4 rounded-lg ">
        <button
          className="absolute top-1 right-2 font-semibold focus:outline-none hover"
          onClick={() => setModal(false)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
