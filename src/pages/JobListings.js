// src/pages/JobListings.js
import React from "react";
import jobPosts from "../mockData/jobPosts"; // Importing the mock data
import Navbar from "../components/Navbar"; // Import Navbar component
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material"; // Material-UI components
import "../styles/jobListings.css";

const JobListings = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Job Listings
        </Typography>
        <Grid container spacing={3}>
          {jobPosts.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between", // Distribute space evenly, keeping Apply button at the bottom
                }}
              >
                <Typography variant="h6" component="h3" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {job.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>{job.lastUpdated}</strong>
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                  <strong>Salary:</strong> {job.salary}
                </Typography>

                {/* Display skills horizontally */}
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>Skills Required:</strong>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  {job.skillsRequired.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ margin: "2px" }}
                    />
                  ))}
                </Box>

                {/* Apply Now button fixed at the bottom */}
                <Button
                  variant="contained"
                  color="primary"
                  href={job.applyLink}
                  target="_blank"
                  fullWidth
                  sx={{ marginTop: "auto" }} // Ensures the button stays at the bottom
                >
                  Apply Now
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default JobListings;
