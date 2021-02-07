import React from "react";
import { getAccessToken } from "../api/user";

const useAuthToken = () => {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getAccessToken();
      if (data?.token) {
        setToken(data.token);
      }
    })();
  }, []);

  return { token };
};

export default useAuthToken;
