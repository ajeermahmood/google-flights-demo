"use client";
import { FlightsData } from "@/models/flightsData";
import { RootState } from "@/store/store";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { useSelector } from "react-redux";

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const calculateArrivalTime = (durationInMinutes: number) => {
  const now = new Date();
  const arrivalTime = new Date(now.getTime() + durationInMinutes * 60000);
  return arrivalTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function FlightsTable() {
  const loading = useSelector((state: RootState) => state.flightsData.loading);
  const flightsData: FlightsData | null = useSelector(
    (state: RootState) => state.flightsData.flights
  );

  return (
    <Box>
      <Typography variant="h6" gutterBottom mb={0}>
        Top Flights
      </Typography>
      <Typography variant="caption" gutterBottom color="#9aa0a6">
        Ranked based on price and convenience. Prices include required taxes +
        fees for 1 adult.
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          border: "1px solid #5f6368",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  {[...Array(6)].map((_, i) => (
                    <TableCell key={i}>
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : flightsData?.data?.itineraries?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <Box
                    display="flex"
                    width="100%"
                    height="15rem"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h6">No Results Found :/</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              flightsData?.data?.itineraries?.map((itinerary, index) => {
                const firstLeg = itinerary.legs[0];
                const airline = firstLeg?.carriers?.marketing[0];
                const now = new Date();
                const currentTime = now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });
                const arrivalTime = calculateArrivalTime(
                  firstLeg?.durationInMinutes
                );

                return (
                  <TableRow key={index}>
                    {/* Airline Info */}
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {airline?.logoUrl && (
                          <Image
                            src={airline.logoUrl}
                            alt={airline.name}
                            width={30}
                            height={30}
                          />
                        )}
                        <Typography variant="subtitle1">
                          {airline?.name}
                        </Typography>
                      </Stack>
                    </TableCell>

                    {/* Departure & Arrival Time */}
                    <TableCell>
                      <Typography fontWeight="bold">
                        {currentTime} – {arrivalTime}
                      </Typography>
                    </TableCell>

                    {/* Duration */}
                    <TableCell>
                      {formatDuration(firstLeg?.durationInMinutes)}
                    </TableCell>

                    {/* Stops */}
                    <TableCell>
                      {firstLeg?.stopCount === 0
                        ? "Nonstop"
                        : `${firstLeg?.stopCount} stop${
                            firstLeg?.stopCount > 1 ? "s" : ""
                          }`}
                    </TableCell>

                    {/* Price */}
                    <TableCell>
                      <Typography variant="h6" color="#81c995">
                        {itinerary.price?.formatted}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
