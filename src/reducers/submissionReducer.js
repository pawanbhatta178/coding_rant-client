const submissionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SUBMISSION":
      let newState = { ...state };
      let prevValue = newState[action.payload.id];
      if (!prevValue) {
        newState[action.payload.id] = [action.payload.submission];
      } else {
        newState[action.payload.id] = [action.payload.submission, ...prevValue];
      }
      return newState;
    default:
      return state;
  }
};

export default submissionReducer;
