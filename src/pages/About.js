import React from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import "../styles/about.css";
import aboutImage from "../images/about-image.png";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <Box className="about-hero">
        <Typography variant="h3" className="about-title">
          About Us
        </Typography>
        <Typography variant="h6" className="about-subtitle">
          Connecting Talent with Opportunity, Empowering Careers Globally.
        </Typography>
      </Box>

      <Container maxWidth="lg" className="about-container">
        {/* Mission, Vision, Values */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="about-card">
              <CardContent>
                <Typography variant="h5" className="about-card-title">
                  Our Mission
                </Typography>
                <Typography variant="body2">
                  To bridge the gap between talent and opportunity through
                  cutting-edge solutions and seamless connectivity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="about-card">
              <CardContent>
                <Typography variant="h5" className="about-card-title">
                  Our Vision
                </Typography>
                <Typography variant="body2">
                  To become the most trusted job portal for professionals and
                  businesses globally.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="about-card">
              <CardContent>
                <Typography variant="h5" className="about-card-title">
                  Our Values
                </Typography>
                <Typography variant="body2">
                  Innovation, Integrity, Inclusivity, and Customer Success.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Image Section */}
      <Container className="about-image-container">
        <img src={aboutImage} alt="About Us" className="about-image" />
      </Container>

      {/* Footer */}
      <Box className="about-footer">
        <Typography variant="body2">
          © {new Date().getFullYear()} JobPortal Inc. All Rights Reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
