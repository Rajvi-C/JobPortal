import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });

      const { data } = response; // Extracting the response data

      console.log("response data:", data); // Logging the response data for debugging

      if (data.user) {
        const { email, name, type } = data.user;

        dispatch(login({ email, name, type }));

        if (type === "admin") {
          navigate("/admin");
        } else if (type === "employee") {
          navigate("/home");
        }
      } else {
        setError(data.message || "An unknown error occurred.");
      }
    } catch (err) {
      if (err.response) {
        setError(
          err.response.data.message || "An error occurred while logging in."
        );
      } else {
        setError("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to JobHunt</h2>
        <p className="login-subtitle">Please log in to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
