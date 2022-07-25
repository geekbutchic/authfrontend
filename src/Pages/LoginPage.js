import React from "react";
import { useState } from "react";
import { loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1>LoginPage</h1>
      <label>USER NAME: </label>
      <input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          console.log(setUserName);
        }}
      ></input>
      <label>PASSWORD: </label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(setPassword);
        }}
      ></input>
      <button
        onClick={async () => {
          props.setIsAuthLoading(true);
          const isUserLoggedIn = await loginUser(
            props.userName,
            props.password
          );
          props.setIsAuthLoading(false);
          if (isUserLoggedIn) {
            navigate("/");
          }
          alert(
            "Your username and/or password is incorrect. Please Try again!!!"
          );
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
