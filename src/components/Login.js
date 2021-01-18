import React from "react";
import Button from "./Button";
import Input from "./Input";
import ModalContext from "../ModalContext";

const Login = () => {
  const { setModal } = React.useContext(ModalContext);
  return (
    <div className="flex flex-col">
      <div className="font-semibold text-gray-600 text-2xl mx-auto">Login</div>
      <Input placeholder="Username or Email" name="login" type="text" />
      <Input placeholder="Password" name="password" type="password" />
      <Button size="lg" type="primary" className="mt-4">
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
          onClick={() => setModal("Register")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
