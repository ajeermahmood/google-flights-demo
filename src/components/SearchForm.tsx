"use client";
import { Airport } from "@/models/airport";
import { searchAirport } from "@/utils/api";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
// import DatePicker from "@mui/lab/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import CustomSelect from "./CustomSelect";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const locations = ["Dubai", "Abu Dhabi", "Ras Al Khaimah", "Al Ain"];

export default function SearchForm() {
  useEffect(() => {
    // searchAirport("dubai")
    //   .then((res: Airport[]) => {
    //     console.log(res[0].navigation.localizedName);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);

  const [ticketType, setTicketType] = useState<string>("one-way");
  const [passengersCount, setPassengersCount] = useState<number>(1);
  const [seatingClass, setSeatingClass] = useState<string>("economy");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  return (
    <Paper
      elevation={6}
      className="p-6 sm:p-4 w-full"
      sx={{
        borderRadius: "8px",
        backgroundColor: "#36373a !important",
        backgroundImage: "none !important",
        "@media (max-width: 440px)": {
          padding: "0px",
          backgroundColor: "#202124 !important",
          boxShadow: "none",
        },
      }}
    >
      <div className="flex flex-col gap-3">
        {/* Trip Type & Passengers/Class Row */}
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{
              "@media (max-width: 768px)": {
                maxWidth: "135px",
              },
            }}
          >
            <CustomSelect
              startAdornment={
                ticketType === "one-way" ? (
                  <ArrowRightAltIcon />
                ) : (
                  <SyncAltIcon />
                )
              }
              value={ticketType}
              className="w-full"
              onChange={(e) => setTicketType(e.target.value)}
              options={[
                { label: "One Way", value: "one-way" },
                { label: "Round Trip", value: "round-trip" },
              ]}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm="auto"
            sx={{
              "@media (max-width: 768px)": {
                maxWidth: "100px",
              },
            }}
          >
            <CustomSelect
              value={passengersCount}
              startAdornment={<PersonOutlineIcon />}
              onChange={(e) => setPassengersCount(Number(e.target.value))}
              options={[
                { label: 1, value: 1 },
                { label: 2, value: 2 },
                { label: 3, value: 3 },
                { label: 4, value: 4 },
                { label: 5, value: 5 },
                { label: 6, value: 6 },
                { label: 7, value: 7 },
                { label: 8, value: 8 },
                { label: 9, value: 9 },
              ]}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm="auto"
            sx={{
              "@media (max-width: 768px)": {
                maxWidth: "105px",
              },
            }}
          >
            <CustomSelect
              value={seatingClass}
              className="w-full"
              onChange={(e) => setSeatingClass(e.target.value)}
              options={[
                { label: "Economy", value: "economy" },
                { label: "Business", value: "business" },
                { label: "First", value: "first" },
              ]}
            />
          </Grid>
        </Grid>

        {/* Search Fields Row */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="From"
              defaultValue="Dubai"
              placeholder="Where from?"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="To"
              placeholder="Where to?"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure"
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <div className="flex w-full justify-center">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className="h-full max-w-[10rem]"
            sx={{
              marginBottom: "-34px",
              marginTop: "15px",
              borderRadius: "24px",
              textTransform: "capitalize",
            }}
            startIcon={<SearchIcon />}
          >
            Explore
          </Button>
        </div>
      </div>
    </Paper>
  );
}
