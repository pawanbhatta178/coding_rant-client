const challengeReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DESCRIPTION":
      return "Description";
    case "SHOW_LEADERBOARD":
      return "Leaderboard";
    default:
      return state;
  }
};

export default challengeReducer;
