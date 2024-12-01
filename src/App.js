// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import PrivateRoute from "./components/PrivateRoutes"; // Ensure this is correct
import "./styles/global.css";
import CompanyShowcase from "./pages/ComapnyShowcase";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import AdminPage from "./pages/Admin";
import AddJobPage from "./pages/AddJob";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute allowedType="employee">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobListing"
          element={
            <PrivateRoute allowedType="employee">
              <JobListings />
            </PrivateRoute>
          }
        />
        <Route
          path="/company"
          element={
            <PrivateRoute allowedType="employee">
              <CompanyShowcase />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute allowedType="employee">
              <ContactUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute allowedType="employee">
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute allowedType="admin">
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/addJob"
          element={
            <PrivateRoute allowedType="admin">
              <AddJobPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
