import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import { Container, Grid, Paper, Typography, Button } from "@mui/material"; // Material-UI components
import "../styles/jobListings.css";

const JobListings = () => {
  // State to store jobs fetched from the API
  const [jobs, setJobs] = useState([]);

  // Fetch job posts from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/job/getAll");
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array means this runs once when the component mounts

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
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
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
                  {job.jobTitle} at {job.companyName}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {job.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>
                    Posted Date :{new Date(job.postedAt).toLocaleDateString()}
                  </strong>
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                  <strong>Salary:</strong> {job.salary}
                </Typography>

                {/* Skills (if you have a skills field, you can display them here) */}
                {/* For now, assuming no skills data in the API response */}

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
