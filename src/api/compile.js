const axios = require("axios").default;
const { SERVER_URL } = require("../constants");

const compile = async ({ source, lang, questionId }) => {
  const res = await axios.post(`${SERVER_URL}/compile`, {
    source,
    lang,
    questionId,
  });
  if (res.status !== 200) {
    return { error: "Something went wrong while connecting to server" };
  }
  return res.data;
};

module.exports = compile;
