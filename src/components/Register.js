import React, { useState, useContext, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import ModalContext from "../ModalContext";
import RegisterErrorText from "./RegisterErrorText";
import validateEmail from "../util/validateEmail";
import validatePassword from "../util/validatePassword";

const Register = () => {
  const { modalDispatch } = useContext(ModalContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPwd, setConfirmPwd] = useState("");
  const [confirmPwdError, setConfirmPwdError] = useState(null);
  const [username, setUsername] = useState("");
  const [usernameError] = useState(null);

  useEffect(() => {
    if (confirmPwd.length === 0 || password.length === 0) {
      setConfirmPwdError(null);
      return;
    }
    if (confirmPwd !== password) {
      setConfirmPwdError("Password do not match the previously entered.");
      return;
    }
    if (confirmPwd === password) {
      setConfirmPwdError(null);
    }
  }, [confirmPwd, password]);

  useEffect(() => {
    if (password.length === 0) {
      setPasswordError(null);
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 character long and must contain at least one lowercase, uppercase, and a special character."
      );
    } else {
      setPasswordError(null);
    }
  }, [password]);

  useEffect(() => {
    if (email.length === 0) {
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter valid email address.");
    } else {
      setEmailError(null);
    }
  }, [email]);

  return (
    <div className="flex flex-col my-4">
      <div className="font-semibold text-gray-600 text-2xl mx-auto">
        Register
      </div>
      <Input
        placeholder="Username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <RegisterErrorText msg={usernameError} />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <RegisterErrorText msg={passwordError} />

      <Input
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
        value={confirmPwd}
        onChange={(e) => setConfirmPwd(e.target.value)}
      />
      <RegisterErrorText msg={confirmPwdError} />

      <Input
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <RegisterErrorText msg={emailError} />

      <Button size="lg" type="primary" className="mt-4">
        {" "}
        Sign Up
      </Button>
      <div className="flex mt-4 justify-center items-center text-gray-600 text-xs">
        <div className="text-gray-500">Already have an account? &nbsp;</div>{" "}
        <Button
          size="xs"
          type="basicPurple"
          onClick={() => modalDispatch({ type: "SHOW_LOGIN" })}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Register;
