import axios from "axios";

const logUserIn = async ({ username, password }) => {
  const { data } = await axios.post(
    "http://localhost:3000/login",
    { username, password },
    { withCredentials: true }
  );
  return data;
};

const signUserUp = async ({
  username,
  email,
  password,
  country,
  displayName,
}) => {
  const { data } = await axios.post(
    "http://localhost:3000/register",
    { username, email, password, country, displayName },
    { withCredentials: true }
  );
  return data;
};

const getAccessToken = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/token",
      {},
      { withCredentials: true }
    );
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getUserDetails = async () => {
  const { data } = await axios.post(
    "http://localhost:3000/user",
    {},
    { withCredentials: true }
  );
  return data;
};

const logUserOut = async () => {
  const { data } = await axios.post(
    "http://localhost:3000/logout",
    {},
    { withCredentials: true }
  );
  return data;
};
export { logUserIn, getAccessToken, getUserDetails, logUserOut, signUserUp };
