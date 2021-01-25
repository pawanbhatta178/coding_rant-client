const challengeReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DESCRIPTION":
      return "Description";
    case "SHOW_LEADERBOARD":
      return "Leaderboard";
    case "SHOW_RESULT":
      return "Result";
    default:
      return state;
  }
};

export default challengeReducer;
