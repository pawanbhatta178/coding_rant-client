const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LOGIN":
      return "Login";
    case "SHOW_REGISTER":
      return "Register";
    case "SHOW_PROFILE":
      return "Profile";
    case "CLOSE_MODAL":
      return null;
    default:
      return state;
  }
};

export default modalReducer;
