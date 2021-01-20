import React, { useState, useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import ModalContext from "../ModalContext";
import UserContext from "../UserContext";
import ErrorContext from "../ErrorContext";

const Login = () => {
  const { userDispatch } = useContext(UserContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { modalDispatch } = useContext(ModalContext);
  const { error } = useContext(ErrorContext);
  const [loginError, setLoginError] = useState();

  React.useEffect(() => {
    setLoginError(error?.loginError);
  }, [error]);

  return (
    <div className="flex flex-col my-4">
      <div className="font-semibold text-gray-600 text-2xl mx-auto">Login</div>
      {loginError && (
        <div className="mt-3 text-center text-red-600 text-xs">
          {loginError.error}
        </div>
      )}
      <Input
        placeholder="Username or Email"
        name="login"
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        size="lg"
        type="primary"
        className="mt-4"
        onClick={() =>
          userDispatch({
            type: "LOGIN",
            payload: { login: login, password: password },
          })
        }
      >
        {" "}
        Sign In
      </Button>
      <div className="flex mt-4 justify-between text-gray-600">
        <Button size="xs" type="basicPurple">
          Forgot Password?{" "}
        </Button>
        <Button
          size="xs"
          type="basicPurple"
          onClick={() => modalDispatch({ type: "SHOW_REGISTER" })}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
