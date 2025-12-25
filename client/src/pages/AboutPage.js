import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f1f8f4 0%, #ffffff 100%)",
        px: { xs: 2, md: 6 },
        py: 6,
      }}
    >
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "primary.main", mb: 2 }}
        >
          About EcoHabit
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          Building sustainable habits together, one small action at a time.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
            >
              Our Mission
            </Typography>
            <Typography color="text.secondary">
              EcoHabit aims to spread awareness about environmental
              sustainability by helping individuals track and improve their
              everyday habits. We believe that consistent, mindful actions can
              create long-lasting positive change for the planet.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
            >
              A Growing Community
            </Typography>
            <Typography color="text.secondary">
              EcoHabit brings together people who care about the environment.
              By joining the community, users motivate one another, share
              progress, and learn how small lifestyle changes can make a big
              difference.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}
            >
              Making an Impact
            </Typography>
            <Typography color="text.secondary">
              From recycling and energy use to food and transportation choices,
              EcoHabit helps users discover better alternatives and take
              meaningful steps toward a healthier, more sustainable future.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography
          variant="h6"
          sx={{ mb: 3, color: "text.secondary" }}
        >
          Ready to build better habits and protect the planet together?
        </Typography>

        <Button variant="contained" size="large">
          Join the EcoHabit Community
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;