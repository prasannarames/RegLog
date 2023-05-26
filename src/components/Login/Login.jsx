import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = useSelector((state) => state.user.userData);

  const handleLogin = () => {
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      // dispatch(loginUser(email, password));
      navigate("/");
      alert("sucessfully Logged in");
    } else {
      alert("Invalid credentials");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h3>Login</h3>
      <form className="login">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>LOGIN</button>
      </form>
    </div>
  );
}