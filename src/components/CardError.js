import "./CardError.css";
import React from "react";
import ErrorContext from "../ErrorContext";

import { CSSTransition } from "react-transition-group";

const themeType = {
  error: " border-red-600 bg-red-100 text-red-600 ",
  warning: " border-yellow-600 bg-yellow-100 text-yellow-600 ",
  neutral: " border-gray-600 bg-gray-100 text-gray-600 ",
};

const CardError = ({ type, msg }) => {
  const { errorDispatch } = React.useContext(ErrorContext);

  return (
    <CSSTransition in={true} unmountOnExit classNames="error" timeout={2000}>
      <div
        className={`flex justify-between relative items-center text-xs rounded-sm px-4 py-2 shadow-sm ${themeType[type]}`}
      >
        <div>{msg}</div>
        <button
          className="absolute top-1 right-2 font-semibold  focus:outline-none hover"
          onClick={() => errorDispatch({ type: "DISMISS_MODAL_ERROR" })}
        >
          &times;
        </button>
      </div>
    </CSSTransition>
  );
};

export default CardError;
