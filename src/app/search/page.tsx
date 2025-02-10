"use client";
import AppBarComponent from "@/components/Appbar";
import FlightsTable from "@/components/FlightsTable";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import { Container } from "@mui/material";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white">
      <AppBarComponent />

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
        <SearchForm searchPage={true} />

        <FlightsTable />
        <Footer/>
      </Container>
    </div>
  );
}
