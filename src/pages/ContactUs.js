import React from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import "../styles/contactUs.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-header">
        <Typography variant="h3" className="contact-title">
          Contact Us
        </Typography>
        <Typography variant="h6" className="contact-subtitle">
          Let’s connect and help you find the best solutions for your needs!
        </Typography>
      </div>
      <Container maxWidth="lg" className="contact-container">
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="section-title">
              Reach Out
            </Typography>
            <form className="contact-form">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                className="submit-button"
              >
                Send Message
              </Button>
            </form>
          </Grid>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="section-title">
              Our Details
            </Typography>
            <Box className="contact-info">
              <Typography>
                <strong>Address:</strong> 123 Tech Street, Innovation City, XY
                56789
              </Typography>
              <Typography>
                <strong>Phone:</strong> +1 (234) 567-8900
              </Typography>
              <Typography>
                <strong>Email:</strong> support@company.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
