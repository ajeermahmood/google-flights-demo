"use client";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Google Flights Clone
        </Typography>
        <Button color="inherit">Flights</Button>
        <Button color="inherit">Hotels</Button>
        <Button color="inherit">Vacation Rentals</Button>
      </Toolbar>
    </AppBar>
  );
}