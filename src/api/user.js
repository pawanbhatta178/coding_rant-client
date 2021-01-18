const user = require("../data/user.json");

const getUserDetails = async () => {
  return user;
};

module.exports = { getUserDetails };
