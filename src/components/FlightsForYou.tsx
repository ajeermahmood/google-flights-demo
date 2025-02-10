"use client";
import {
  Box,
  Typography,
  Button,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import CustomButton from "./CustomButton";

const destinations = [
  {
    city: "Tokyo",
    price: "AED 1,996",
    dates: "Mar 7 — Mar 13",
    stops: "1 stop · 17 hr 50 min",
    image: "/images/locations/tokyo.jpg",
  },
  {
    city: "Istanbul",
    price: "AED 520",
    dates: "May 24 — Jun 1",
    stops: "Nonstop · 5 hr 5 min",
    image: "/images/locations/istanbul.jpg",
  },
  {
    city: "London",
    price: "AED 998",
    dates: "Mar 6 — Mar 15",
    stops: "1 stop · 10 hr 40 min",
    image: "/images/locations/london.jpg",
  },
  {
    city: "Singapore",
    price: "AED 1,200",
    dates: "Mar 3 — Mar 12",
    stops: "1 stop · 9 hr 30 min",
    image: "/images/locations/singapore.jpg",
  },
];

export default function FlightsForYou() {
  const isMobileScreen = useMediaQuery("(max-width:435px)");
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Find cheap flights from Dubai to anywhere
      </Typography>

      <Box
        className="scrollbar-hide"
        sx={{
          "@media (max-width: 400px)": {
            minWidth: "100%",
            overflowX: "auto",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mb: 3,
            mt: 2,
            "@media (max-width: 400px)": {
              minWidth: "400px",
            },
          }}
        >
          {["Dubai", "Abu Dhabi", "Ras Al Khaimah", "Al Ain"].map((city) => (
            <CustomButton
              active={city === "Dubai"}
              text={city}
              key={city}
              fontSize={isMobileScreen ? 12 : 14}
            />
          ))}
        </Stack>
      </Box>

      <Paper
        sx={{
          width: "100%",
          height: 300,
          backgroundImage: "url('/images/staticmap.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          borderRadius: "16px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#333",
            color: "#8ab4f8",
            textTransform: "none",
            px: 2.5,
            py: 0.5,
            borderRadius: "16px",
          }}
        >
          Explore destinations
        </Button>
      </Paper>

      <Grid
        container
        justifyContent="space-between"
        sx={{
          mt: 3,
          flexWrap: "nowrap",
          pb: 2,
          "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {destinations.map((dest) => (
          <Grid
            item
            key={dest.city}
            sx={{
              minWidth: 225,
              maxHeight: 225,
              "@media (max-width: 1024px)": {
                minWidth: "165px",
              },
              "@media (max-width: 768px)": {
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0 0 15px",
              },
            }}
          >
            <Card
              sx={{
                bgcolor: "transparent",
                color: "white",
                borderRadius: 3,
                boxShadow: "none",
                backgroundImage: "none",
                width: "100%",
                "@media (max-width: 768px)": {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                },
                "& .MuiCardContent-root": {
                  padding: "15px 0 0 0",
                  "@media (max-width: 768px)": {
                    padding: "5px 0 0 8px",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                image={dest.image}
                alt={dest.city}
                sx={{
                  height: "120px !important",
                  borderRadius: "16px",
                  "@media (max-width: 768px)": {
                    width: "300px",
                    height: "100px",
                    marginRight: "10px",
                  },
                  "@media (max-width: 550px)": {
                    width: "200px",
                    height: "100px",
                    marginRight: "10px",
                  },
                  "@media (max-width: 435px)": {
                    width: "150px",
                    height: "100px",
                    marginRight: "10px",
                  },
                }}
              />

              <CardContent
                sx={{
                  flex: 1,
                  "@media (max-width: 768px)": {
                    padding: "0 10px",
                  },
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize={16}>{dest.city}</Typography>
                  <Typography fontSize={14} sx={{ fontWeight: "bold" }}>
                    {dest.price}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="gray" lineHeight={1.6}>
                  {dest.dates}
                </Typography>
                <Typography variant="body2" color="gray" lineHeight={1.6}>
                  {dest.stops}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
