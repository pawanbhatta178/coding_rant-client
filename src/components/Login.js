import React from "react";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
  return (
    <div className="flex flex-col">
      <div className="font-semibold  text-purple-800 text-2xl mx-auto">
        Login
      </div>
      <Input placeholder="username or email" name="login" type="text" />
      <Input placeholder="password" name="password" type="password" />
      <Button size="lg" type="primary" className="mt-4">
        {" "}
        Sign In
      </Button>
      <div className="flex mt-4 justify-between text-gray-600">
        <Button size="xs">Forgot Password? </Button>
        <Button size="xs">Sign Up</Button>
      </div>
    </div>
  );
};

export default Login;
