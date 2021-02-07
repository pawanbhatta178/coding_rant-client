import React from "react";
import { getAccessToken } from "../api/user";

const useRefetchToken = (token, timeout) => {
  const [newToken, setNewToken] = React.useState(null);

  React.useEffect(() => {
    if (!token) {
      return;
    }
    const timer = setTimeout(() => {
      (async () => {
        const data = await getAccessToken();
        if (data?.token) {
          setNewToken(data.token);
        }
      })();
    }, timeout);
    return () => clearTimeout(timer);
  }, [token, timeout]);

  return { token: newToken };
};

export default useRefetchToken;
