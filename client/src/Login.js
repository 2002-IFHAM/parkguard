import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const login = () => {
    const data = { phoneNumber: phoneNumber, password: password };
    axios.post("http://localhost:8083/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);

        navigate("/dashboard");
      }
    });
  };
  return (
    <div className="loginContainer">
      <label>phoneNumber:</label>
      <input
        type="text"
        onChange={(event) => {
          setphoneNumber(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login </button>
    </div>
  );
}

export default Login;
