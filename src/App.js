// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import PrivateRoute from "./components/PrivateRoutes"; // Ensure this is correct
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobListing"
          element={
            <PrivateRoute>
              <JobListings />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
