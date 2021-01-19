import React from "react";
import Button from "./Button";
import Input from "./Input";
import ModalContext from "../ModalContext";

const Register = () => {
  const { setModal } = React.useContext(ModalContext);
  return (
    <div className="flex flex-col my-4">
      <div className="font-semibold text-gray-600 text-2xl mx-auto">
        Register
      </div>
      <Input placeholder="Username" name="username" type="text" />
      <Input placeholder="Password" name="password" type="password" />
      <Input
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
      />
      <Input placeholder="Email" name="email" type="email" />
      <Button size="lg" type="primary" className="mt-4">
        {" "}
        Sign Up
      </Button>
      <div className="flex mt-4 justify-center items-center text-gray-600 text-xs">
        <div className="text-gray-500">Already have an account? &nbsp;</div>{" "}
        <Button size="xs" type="basicPurple" onClick={() => setModal("Login")}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
