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
      console.log("response", response); // Logging the entire response object

      const { data } = response; // Extracting the response data

      console.log("response data:", data); // Logging the response data for debugging

      if (data.user) {
        // Successful login logic
        sessionStorage.setItem("authToken", "dummy-token");
        sessionStorage.setItem("userEmail", data.user.email);
        sessionStorage.setItem("userName", data.user.name);

        console.log("Navigating to /home");
        navigate("/home");
      } else {
        // If there's no user, display the error message
        setError(data.message || "An unknown error occurred.");
      }
    } catch (err) {
      // Handling errors if the login request fails
      if (err.response) {
        // If there is a response error, display the API's error message
        setError(
          err.response.data.message || "An error occurred while logging in."
        );
      } else {
        // Handle network-related errors or unexpected errors
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
