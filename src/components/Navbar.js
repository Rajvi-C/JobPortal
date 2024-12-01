import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          JobHunt Portal
        </Typography>
        <Container>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/jobListing">
            Job Listings
          </Button>
          <Button color="inherit" component={Link} to="/company">
            Companies
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
