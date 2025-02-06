"use client";
import { Airport } from "@/models/airport";
import { searchAirport } from "@/utils/api";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
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
// import AdapterDayjs from "dayjs";

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

  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  return (
    <div className="flex flex-col gap-3">
      {/* Trip Type & Passengers/Class Row */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm="auto">
          <CustomSelect
            value="one-way"
            className="w-full"
            onChange={() => {}}
            options={[
              { label: "One Way", value: "one-way" },
              { label: "Round Trip", value: "round-trip" },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm="auto">
          <CustomSelect
            value={1}
            className="w-full"
            onChange={() => {}}
            options={[
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 },
            ]}
          />
        </Grid>

        <Grid item xs={12} sm="auto">
          <CustomSelect
            value="economy"
            className="w-full"
            onChange={() => {}}
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
          Search
        </Button>
      </div>
    </div>
  );
}
