import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Pagination,
  CircularProgress, // Import CircularProgress component
} from "@mui/material"; // Material-UI components
import "../styles/jobListings.css";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/job/getAll");
        const data = await response.json();
        setJobs(data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job posts:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const indexOfLastJob = page * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Job Listings
        </Typography>

        {/* Show loading spinner while data is being fetched */}
        {loading ? (
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ paddingTop: "20px" }}
          >
            <CircularProgress /> {/* Spinner in the center */}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {currentJobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job._id}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
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
                      Posted Date :{" "}
                      {new Date(job.postedAt).toLocaleDateString()}
                    </strong>
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    <strong>Salary:</strong> {job.salary}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    href={job.applyLink}
                    target="_blank"
                    fullWidth
                    sx={{ marginTop: "auto" }}
                  >
                    Apply Now
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        <Pagination
          count={Math.ceil(jobs.length / jobsPerPage)} // Total number of pages
          page={page} // Current page
          onChange={handlePageChange} // Handle page change
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        />
      </Container>
    </div>
  );
};

export default JobListings;
