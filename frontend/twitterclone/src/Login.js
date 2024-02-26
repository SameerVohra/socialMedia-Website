import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormData = (event) => {
    event.preventDefault();
    if (username === "bharat" && password === "bharat123") {
      navigate("/posts");
    } else {
      setLoginErr("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormData}>
        <label>Username: </label>
        <input type="text" value={username} onChange={handleUsername}></input>
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
      <h2>{loginErr}</h2>
    </div>
  );
}