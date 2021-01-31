const axios = require("axios").default;
const { SERVER_URL } = require("../constants");

const compile = async ({ source, lang, questionId }) => {
  const res = await axios.post(`${SERVER_URL}/compile`, {
    userId: "45545af7-0726-4184-9eca-a750a75ce7d9",
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
