"use client";
import SearchForm from "@/components/SearchForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Paper, Button } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AppBarComponent from "@/components/Appbar";
import FlightTable from "@/components/FlightTable";
import PriceInsights from "@/components/FlightInsights";
import FlightsForYou from "@/components/FlightsForYou";
import FlightInsights from "@/components/FlightInsights";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const sampleFlights = [
  {
    airline: "Emirates",
    departure: "Dubai (DXB) - 10:30 AM",
    arrival: "London (LHR) - 2:45 PM",
    price: 2200,
  },
  {
    airline: "Qatar Airways",
    departure: "Dubai (DXB) - 1:15 PM",
    arrival: "Doha (DOH) - 2:00 PM",
    price: 800,
  },
  {
    airline: "Etihad Airways",
    departure: "Abu Dhabi (AUH) - 3:45 PM",
    arrival: "New York (JFK) - 11:20 PM",
    price: 3500,
  },
  {
    airline: "Turkish Airlines",
    departure: "Dubai (DXB) - 5:00 AM",
    arrival: "Istanbul (IST) - 9:30 AM",
    price: 1800,
  },
  {
    airline: "Lufthansa",
    departure: "Dubai (DXB) - 11:00 PM",
    arrival: "Frankfurt (FRA) - 4:30 AM",
    price: 2100,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white">
      <ThemeProvider theme={darkTheme}>
        <AppBarComponent />
        {/* Hero Section */}
        <Box className="w-full flex flex-col items-center text-center mx-auto mb-10">
          <Image
            src="/images/main_banner_dark.svg"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-full max-w-[1248px] select-none"
          />
          <Typography
            variant="h2"
            component="h1"
            className="font-bold"
            fontSize={56}
            fontWeight={400}
            sx={{
              marginTop: "-70px",
            }}
          >
            Flights
          </Typography>
        </Box>

        {/* Search Form Section */}
        <Container
          sx={{
            maxWidth: "1024px !important",
          }}
        >
          <Paper
            elevation={6}
            className="p-6 sm:p-4 w-full"
            sx={{
              borderRadius: "8px",
              backgroundColor: "#36373a !important",
              backgroundImage: "none !important",
            }}
          >
            <SearchForm />
          </Paper>

          <div className="w-full flex flex-col text-start mt-[3rem]">
            <FlightsForYou />
          </div>
          <div className="w-full flex flex-col text-start mt-[3rem]">
            <FlightInsights />
          </div>
        </Container>

        {/* Footer */}
        <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center"></footer>
      </ThemeProvider>
    </div>
  );
}
