import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });

      const { data } = response;
      console.log(data); // Debugging the response

      if (data.user) {
        sessionStorage.setItem("authToken", "dummy-token");
        sessionStorage.setItem("userEmail", data.user.email); // Using the correct key
        sessionStorage.setItem("userName", data.user.name); // Assuming 'username' is not in the response

        console.log("Navigating to /home");
        navigate("/home");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
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
