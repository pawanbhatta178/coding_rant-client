const errorReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL_ERROR":
      return { ...state, modalError: action.payload };
    case "DISMISS_MODAL_ERROR":
      return { ...state, modalError: null };
    case "SET_LOGIN_ERROR":
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
