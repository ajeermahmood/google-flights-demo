import AppBarComponent from "@/components/Appbar";
import CityCarousel from "@/components/CityCarousal";
import FAQ from "@/components/FAQ";
import FlightInsights from "@/components/FlightInsights";
import FlightsForYou from "@/components/FlightsForYou";
import Footer from "@/components/Footer";
import PopularRoutesLinks from "@/components/PopularRoutes";
import SearchForm from "@/components/SearchForm";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white">
      <AppBarComponent />
      <Box className="w-full flex flex-col items-center text-center mx-auto mb-5 sm:mb-10">
        <div
          className="relative w-full max-w-[1248px]"
          style={{ paddingTop: "24.04%" }}
        >
          <Image
            src="/images/main_banner_dark.svg"
            alt="Hero Image"
            fill
            priority
            className="select-none object-cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <Typography
          variant="h2"
          component="h1"
          className="font-bold relative z-[1]"
          sx={{
            fontSize: { xs: 34, sm: 36, md: 56 },
            marginTop: { xs: "-15px", sm: "-40px", md: "-70px" },
            lineHeight: 1,
            "&::before": {
              content: '""',
              display: "block",
              height: { xs: "15px", sm: "20px", md: "30px" },
            },
          }}
        >
          Flights
        </Typography>
      </Box>

      <Container
        sx={{
          maxWidth: "1024px !important",
          "@media (max-width: 1024px)": {
            maxWidth: "768px !important",
          },
          "@media (max-width: 768px)": {
            maxWidth: "100% !important",
          },
        }}
      >
        <SearchForm searchPage={false} />

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
    </div>
  );
}
