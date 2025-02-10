import { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Cities data
const cities = [
  { name: "Dubai", image: "/images/locations/dubai.jpg" },
  { name: "Doha", image: "/images/locations/doha.jpg" },
  { name: "Jeddah", image: "/images/locations/jeddah.jpg" },
  { name: "Goa", image: "/images/locations/goa.jpg" },
  { name: "Dammam", image: "/images/locations/dammam.jpg" },
  { name: "New Delhi", image: "/images/locations/new-delhi.jpg" },
  { name: "Riyadh", image: "/images/locations/riyadh.jpg" },
  { name: "Abu Dhabi", image: "/images/locations/abu-dhabi.jpg" },
  { name: "Mumbai", image: "/images/locations/mumbai.jpg" },
  { name: "Bengaluru", image: "/images/locations/bengaluru.jpg" },
  { name: "Kuwait City", image: "/images/locations/kuwait-city.jpg" },
  { name: "Kochi", image: "/images/locations/kochi.jpg" },
  { name: "Muscat", image: "/images/locations/muscat.jpg" },
  { name: "Istanbul", image: "/images/locations/istanbul.jpg" },
];

// Single city card component
const CityCard = ({ city }: { city: { name: string; image: string } }) => (
  <Box
    sx={{
      position: "relative",
      width: 130,
      height: 100,
      borderRadius: "8px",
      overflow: "hidden",
      flexShrink: 0,
    }}
  >
    {/* The image */}
    <Box
      component="img"
      src={city.image}
      alt={city.name}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
    {/* Black overlay for title */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
      }}
    />

    {/* City name at the bottom left */}
    <Box
      sx={{
        position: "absolute",
        bottom: 8,
        left: 8,
        zIndex: 1,
      }}
    >
      <Typography variant="subtitle1" sx={{ color: "white", lineHeight: 1.1 }}>
        {city.name}
      </Typography>
    </Box>
  </Box>
);

// Main carousel component
export default function CityCarousel() {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(cities.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentCities = cities.slice(startIndex, startIndex + itemsPerPage);
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        "&:hover .carousel-controller": { opacity: 1 },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Popular destinations from Dubai
      </Typography>

      {/* Scrollable Row on Small Screens */}
      <Box
        className="overflow-x-auto scrollbar-hide" // Tailwind scrollbar-hide
        sx={{
          display: "flex",
          gap: 1,
          mt: 2,
          justifyContent: isSmallScreen ? "flex-start" : "space-between",
          flexWrap: isSmallScreen ? "nowrap" : "wrap",
          paddingBottom: isSmallScreen ? "10px" : "0", // Ensure space for scroll
        }}
      >
        {(isSmallScreen ? cities : currentCities).map((city, index) => (
          <CityCard key={index} city={city} />
        ))}
      </Box>

      {/* Pagination Controllers (Hidden on Small Screens) */}
      {!isSmallScreen && currentPage > 0 && (
        <IconButton
          className="carousel-controller"
          onClick={() => setCurrentPage(currentPage - 1)}
          sx={{
            position: "absolute",
            left: -20,
            top: "70%",
            transform: "translateY(-70%)",
            backgroundColor: "#2a2b2e",
            opacity: 0,
            transition: "opacity 0.3s",
            boxShadow: (theme) => theme.shadows[3],
            "&:hover": { backgroundColor: "#36373a" },
          }}
        >
          <ArrowBackIosIcon sx={{ color: "#9aa0a6", fontSize: "15px", ml: "2px", mr: "-2px" }} />
        </IconButton>
      )}

      {!isSmallScreen && currentPage < totalPages - 1 && (
        <IconButton
          className="carousel-controller"
          onClick={() => setCurrentPage(currentPage + 1)}
          sx={{
            position: "absolute",
            right: -20,
            top: "70%",
            transform: "translateY(-70%)",
            backgroundColor: "#2a2b2e",
            opacity: 0,
            transition: "opacity 0.3s",
            boxShadow: (theme) => theme.shadows[3],
            "&:hover": { backgroundColor: "#36373a" },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "#9aa0a6", fontSize: "15px" }} />
        </IconButton>
      )}
    </Box>
  );
}
