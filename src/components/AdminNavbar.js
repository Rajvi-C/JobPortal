import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "../styles/navbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login"); // Redirect to login page
  };

  const handleAddJobsClick = () => {
    navigate("/admin/addJob");
  };

  const handleHomeClick = () => {
    navigate("/admin");
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Portal
        </Typography>

        <Button color="inherit" onClick={handleHomeClick}>
          Home
        </Button>
        <Button color="inherit" onClick={handleAddJobsClick}>
          Add Job
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
