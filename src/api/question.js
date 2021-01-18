const data = require("../data/questions.json");

const getQuestion = async (id) => {
  const returnVal = data.find((item) => item.id === id);
  if (!returnVal) {
    return {};
  }
  return returnVal;
};
module.exports = { getQuestion };
