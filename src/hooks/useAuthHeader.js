import React from "react";
import axios from "axios";

const useAuthHeader = (token) => {
  React.useEffect(() => {
    if (!token) {
      return;
    }
    console.log({ token });
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
  }, [token]);
};

export default useAuthHeader;
