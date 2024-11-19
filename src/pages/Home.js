import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import homeImage from "../images/homeImage.png"; // Make sure the path is correct

const Home = () => {
  return (
    <div>
      <Navbar />

      <Container className="home-container">
        <div className="home-heading">
          <Typography variant="h3" align="center" className="home-title">
            Hi {sessionStorage.userName} ! Welcome to the Job Portal
          </Typography>
          <Typography variant="h6" align="center" className="home-subtitle">
            Your one-stop solution for finding your dream job and exploring top
            companies.
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="home-grid"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card className="home-card">
              <CardContent>
                <Typography variant="h5" className="home-card-title">
                  Find Your Dream Job
                </Typography>
                <Typography variant="body1" className="home-card-description">
                  Browse hundreds of job listings to find the role that fits you
                  best.
                </Typography>
                <Link to="/jobListing">
                  <Button
                    variant="contained"
                    color="primary"
                    className="home-card-button"
                  >
                    Browse Jobs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="home-card">
              <CardContent>
                <Typography variant="h5" className="home-card-title">
                  Explore Companies
                </Typography>
                <Typography variant="body1" className="home-card-description">
                  Discover top companies and learn about their work culture.
                </Typography>
                <Link to="/company">
                  <Button
                    variant="contained"
                    color="primary"
                    className="home-card-button"
                  >
                    View Companies
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Make sure the path is correct */}
        <img
          src={homeImage} /* Path is relative to public folder */
          alt="Job Portal Illustration"
          className="home-image"
        />
      </Container>
    </div>
  );
};

export default Home;
