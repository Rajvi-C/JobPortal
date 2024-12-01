import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Snackbar,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import AdminNavbar from "../components/AdminNavbar"; // Adjust the path as needed
import "../styles/addJobPage.css";

const AddJobPage = () => {
  const [job, setJob] = useState({
    companyName: "",
    jobTitle: "",
    description: "",
    salary: "",
    applyLink: "", // Added the applyLink field
  });

  const [message, setMessage] = useState(""); // To hold the success or error message
  const [messageType, setMessageType] = useState(""); // To handle the type of message (success/error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/job/create",
        job
      );
      setMessage("Job added successfully!");
      setMessageType("success"); // Display success message
      setJob({
        companyName: "",
        jobTitle: "",
        description: "",
        salary: "",
        applyLink: "", // Reset applyLink field as well
      });
      console.log(response);
    } catch (error) {
      console.error("Error adding job:", error);
      const errorMessage =
        error.response?.data?.message ||
        "There was an error adding the job. Please try again.";
      setMessage(errorMessage);
      setMessageType("error");
    }
  };

  return (
    <div>
      {/* Admin Navbar */}
      <AdminNavbar />

      <Container maxWidth="sm" className="container">
        <Card className="card">
          <CardContent className="cardContent">
            <Typography variant="h4" className="title">
              Add New Job
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box className="formField">
                <TextField
                  label="Company Name"
                  name="companyName"
                  variant="outlined"
                  fullWidth
                  value={job.companyName}
                  onChange={handleChange}
                  required
                  className="textField"
                />
              </Box>

              <Box className="formField">
                <TextField
                  label="Job Title"
                  name="jobTitle"
                  variant="outlined"
                  fullWidth
                  value={job.jobTitle}
                  onChange={handleChange}
                  required
                  className="textField"
                />
              </Box>

              <Box className="formField">
                <TextField
                  label="Description"
                  name="description"
                  variant="outlined"
                  fullWidth
                  value={job.description}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  className="textField"
                />
              </Box>

              <Box className="formField">
                <TextField
                  label="Salary"
                  name="salary"
                  variant="outlined"
                  fullWidth
                  value={job.salary}
                  onChange={handleChange}
                  required
                  className="textField"
                />
              </Box>

              <Box className="formField">
                <TextField
                  label="Application Link"
                  name="applyLink"
                  variant="outlined"
                  fullWidth
                  value={job.applyLink}
                  onChange={handleChange}
                  required
                  className="textField"
                />
              </Box>

              <Box className="formField">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="button"
                >
                  Add Job
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>

        <Snackbar
          open={message !== ""}
          autoHideDuration={6000}
          onClose={() => setMessage("")}
          message={message}
          severity={messageType}
          className="snackbar"
        />
      </Container>
    </div>
  );
};

export default AddJobPage;
