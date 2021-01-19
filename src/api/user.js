const user = require("../data/user.json");
const users = require("../data/users.json");

const logUserIn = (login, password) => {
  const user = users.find((user) => {
    return login === user.username || login === user.email;
  });
  if (!user) {
    return null;
  }
  if (user.password !== password) {
    return null;
  }
  return user;
};

const getUserDetails = async () => {
  return user;
};

const upvoteQuestion = async (id) => {
  return {
    ...user,
  };
};

module.exports = { getUserDetails, logUserIn };
