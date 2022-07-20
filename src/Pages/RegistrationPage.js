import { useState } from "react";
import React from "react";

const RegistrationPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>Registration Page</h2>
      <label>USER NAME: {" "}</label>
      <input
        value={userName}
        onChange={(e) => {
          const inputUserName = e.target.value;
          setUserName(inputUserName);
          console.log(inputUserName);
        }}
      ></input>
      <br></br>
      <label>Password: {" "}</label>
      <input
      value={password}
      onChange={(e) => {
        const inputUserPassword = e.target.value;
        setPassword(inputUserPassword);
        console.log(inputUserPassword);
      }}
      >
      </input>
    </div>
  );
};

export default RegistrationPage;
