import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Container, Grid, Typography } from "@mui/material";
import "../styles/companyShowcase.css"; // Import the external CSS

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanyImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/company/getCompanyImages?t=${Date.now()}`
        );
        setCompanies(response.data.images);
      } catch (error) {
        console.error("Error fetching company images:", error);
      }
    };

    fetchCompanyImages();
  }, []);

  return (
    <div>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Company Showcase
        </Typography>
        <Grid container spacing={3}>
          {companies.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company._id}>
              <div className="card">
                {/* Image */}
                <img
                  src={`http://localhost:5000/${company.imagePath}`}
                  alt={company.companyName}
                  className="card-image"
                />
                {/* Overlay */}
                <div className="card-overlay">
                  <Typography variant="h6" className="card-title">
                    {company.companyName}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CompanyShowcase;
