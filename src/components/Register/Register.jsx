import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    dispatch(registerUser({ email, userName, password, confirmPassword }));

    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login");
  };
  return (
    <div>
      <h3>Register</h3>
      <form className="register">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="ReEnter password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button onClick={handleRegister}>REGISTER</button>
      </form>
    </div>
  );
}
