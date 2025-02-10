"use client";
import AppBarComponent from "@/components/Appbar";
import CityCarousel from "@/components/CityCarousal";
import FAQ from "@/components/FAQ";
import FlightInsights from "@/components/FlightInsights";
import FlightsForYou from "@/components/FlightsForYou";
import Footer from "@/components/Footer";
import PopularRoutesLinks from "@/components/PopularRoutes";
import SearchForm from "@/components/SearchForm";
import { Box, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white">
      <ThemeProvider theme={darkTheme}>
        <AppBarComponent />
        {/* Hero Section */}
        <Box className="w-full flex flex-col items-center text-center mx-auto mb-5 sm:mb-10">
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
              "@media (max-width: 768px)": {
                marginTop: "-50px",
              },
              "@media (max-width: 720px)": {
                fontSize: "36px",
                marginTop: "-40px",
              },
              "@media (max-width: 425px)": {
                fontSize: "34px",
                marginTop: "-15px",
              },
            }}
          >
            Flights
          </Typography>
        </Box>

        {/* Search Form Section */}
        <Container
          sx={{
            maxWidth: "1024px !important",
            "@media (max-width: 1024px)": {
              maxWidth: "768px !important",
            },
            "@media (max-width: 768px)": {
              maxWidth: "100% !important", // Full width for small screens
            },
          }}
        >
          <SearchForm />

          <div className="w-full flex flex-col text-start mt-[3rem]">
            <FlightsForYou />
          </div>
          <div className="w-full flex flex-col text-start mt-[2rem]">
            <FlightInsights />
          </div>
          <div className="w-full flex flex-col text-start mt-[1rem]">
            <CityCarousel />
          </div>
          <div className="w-full flex flex-col text-start mt-[2rem]">
            <FAQ />
          </div>
          <div className="w-full flex flex-col text-start mt-[2rem]">
            <PopularRoutesLinks />
          </div>
          <footer className="">
            <Footer />
          </footer>
        </Container>

        {/* Footer */}
      </ThemeProvider>
    </div>
  );
}
