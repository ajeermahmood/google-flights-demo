import { Box, Grid, Link, Typography } from "@mui/material";

const flightRoutes = [
  "Flights from New York to London",
  "Flights from New York to Rome",
  "Flights from Toronto to London",
  "Flights from London to Tokyo",
  "Flights from New York to Los Angeles",
  "Flights from London to Istanbul",
  "Flights from London to Berlin",
  "Flights from New York to Paris",
  "Flights from Montreal to Paris",
  "Flights from New York to Milan",
  "Flights from Madrid to Rome",
  "Flights from Paris to Marrakech",
  "Flights from Paris to Bangkok",
  "Flights from Chicago to Paris",
  "Flights from London to Paris",
  "Flights from London to Milan",
  "Flights from London to Dubai",
  "Flights from London to Delhi",
  "Flights from Sao Paulo to London",
  "Flights from New York to Orlando",
  "Flights from Melbourne to London",
];

const PopularRoutesLinks = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Find cheap flights on popular routes
      </Typography>
      <Grid mt={1.5} container spacing={3}>
        {[0, 1, 2].map((col) => (
          <Grid item xs={12} sm={4} key={col} sx={{ paddingTop: "0 !important" }}>
            {flightRoutes
              .filter((_, index) => index % 3 === col)
              .map((route, index) => (
                <Link
                  key={index}
                  href="#"
                  color="primary"
                  underline="none"
                  display="block"
                  sx={{
                    color: "#8ab4f8",
                    "&:hover": {
                      color: "#aecbfa",
                    },
                  }}
                >
                  <Typography
                    fontSize="14px"
                    lineHeight="2.1"
                    letterSpacing={"0.2px"}
                    variant="body2"
                  >
                    {route}
                  </Typography>
                </Link>
              ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularRoutesLinks;
