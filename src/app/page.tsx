"use client";
import SearchForm from "@/components/SearchForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Paper, Button } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AppBarComponent from "@/components/Appbar";
import Navbar from "@/components/Navbar";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

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
            className="w-full max-w-[1248px]"
          />
          <Typography
            variant="h2"
            component="h1"
            className="font-bold mt-[-70px]"
            fontSize={56}
            fontWeight={400}
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
            elevation={24}
            className="p-6 sm:p-4 mt-8 w-full"
            sx={{
              borderRadius: "8px",
            }}
          >
            <SearchForm />
          </Paper>
        </Container>

        {/* Footer */}
        <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center"></footer>
      </ThemeProvider>
    </div>
  );
}
