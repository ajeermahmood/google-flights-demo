"use client";
import { Airport } from "@/models/airport";
import { fetchFlights, FlightSearchParams, searchAirport } from "@/utils/api";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
// import DatePicker from "@mui/lab/DatePicker";
import {
  setFlightsData,
  setFlightsDataLoading,
} from "@/store/slices/flightsDataSlice";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import CustomSelect from "./CustomSelect";

const searchCache = new Map<string, Airport[]>();
const flightSearchCache = new Map<string, any>();

export default function SearchForm({ searchPage }: { searchPage: boolean }) {
  const [ticketType, setTicketType] = useState<string>("one-way");
  const [passengersCount, setPassengersCount] = useState<number>(1);
  const [seatingClass, setSeatingClass] = useState<string>("economy");
  const [fromAirport, setFromAirport] = useState<Airport | null>(null);
  const [toAirport, setToAirport] = useState<Airport | null>(null);
  const [fromOptions, setFromOptions] = useState<Airport[]>([]);
  const [toOptions, setToOptions] = useState<Airport[]>([]);

  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [loadingFrom, setLoadingFrom] = useState<boolean>(false);
  const [loadingTo, setLoadingTo] = useState<boolean>(false);

  const [departureDate, setDepartureDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(dayjs());

  const router = useRouter();

  const routerr = useRouter();

  const fetchAirports = useCallback(
    debounce(async (query: string, type: "from" | "to") => {
      if (!query) {
        if (type === "from") {
          return setFromOptions([]);
        } else {
          return setToOptions([]);
        }
      }

      if (searchCache.has(query)) {
        if (type === "from") {
          return setFromOptions(searchCache.get(query)!);
        } else {
          return setToOptions(searchCache.get(query)!);
        }
      }

      if (type === "from") {
        setLoadingFrom(true);
      } else {
        setLoadingTo(true);
      }

      try {
        const results = await searchAirport(query);
        searchCache.set(query, results);

        if (type === "from") {
          setFromOptions(results);
        } else {
          setToOptions(results);
        }
      } catch (err) {
        console.error(`Error fetching ${type} airports:`, err);
      }

      if (type === "from") {
        setLoadingFrom(false);
      } else {
        setLoadingTo(false);
      }
    }, 500),
    []
  );

  const handleExploreClick = () => {
    if (!fromAirport || !toAirport) {
      alert("Please select valid airports.");
      return;
    }

    const searchParams = {
      from: fromAirport,
      to: toAirport,
      departureDate: departureDate.format("YYYY-MM-DD"),
      returnDate: returnDate.format("YYYY-MM-DD"),
      ticketType,
      passengersCount,
      seatingClass,
    };

    const base64Params = btoa(JSON.stringify(searchParams));
    const newUrl = `/search?tfs=${encodeURIComponent(base64Params)}`;

    router[searchPage ? "replace" : "push"](newUrl);
  };

  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const fetchSearchFlights = useCallback(
    debounce(async (params: FlightSearchParams) => {
      const key = JSON.stringify(params);

      try {
        // Always check cache first
        if (flightSearchCache.has(key)) {
          dispatch(setFlightsData(flightSearchCache.get(key)));
          dispatch(setFlightsDataLoading(false));
          return;
        }

        const result = await fetchFlights(params);
        flightSearchCache.set(key, result);
        dispatch(setFlightsData(result));
        dispatch(setFlightsDataLoading(false));
      } catch (error) {
        console.error("Flight search failed:", error);
      }
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    if (searchPage) {
      const tfs = searchParams.get("tfs");

      const loadResults = async () => {
        if (!tfs) {
          router.push("/");
          return;
        }

        try {
          dispatch(setFlightsDataLoading(true));
          const decodedParams = JSON.parse(atob(decodeURIComponent(tfs)));

          // Batch all state updates together
          setFromAirport(decodedParams.from);
          setToAirport(decodedParams.to);
          setDepartureDate(dayjs(decodedParams.departureDate));
          setReturnDate(dayjs(decodedParams.returnDate));
          setTicketType(decodedParams.ticketType);
          setPassengersCount(decodedParams.passengersCount);
          setSeatingClass(decodedParams.seatingClass);
          setFromOptions([decodedParams.from]);
          setToOptions([decodedParams.to]);

          await fetchSearchFlights({
            originSkyId: decodedParams.from.skyId,
            destinationSkyId: decodedParams.to.skyId,
            originEntityId: decodedParams.from.entityId,
            destinationEntityId: decodedParams.to.entityId,
            adults: decodedParams.passengersCount,
            cabinClass: decodedParams.seatingClass,
            date: decodedParams.departureDate,
            countryCode: "AE",
            currency: "AED",
            market: "en-AE",
            sortBy: "best",
          });
        } catch (error) {
          console.error("Error loading results:", error);
          router.push("/");
        } finally {
        }
      };

      loadResults();
    }
  }, [searchPage, searchParams, dispatch, router, fetchSearchFlights]);

  return (
    <Paper
      elevation={6}
      className="p-0 sm:p-6 w-full"
      sx={
        searchPage
          ? {
              backgroundColor: "transparent !important",
              backgroundImage: "none !important",
              boxShadow: "none",
              padding: "25px 0px 25px 0px !important",
            }
          : {
              borderRadius: "8px",
              backgroundColor: "#36373a !important",
              backgroundImage: "none !important",
              "@media (max-width: 644px)": {
                padding: "0px",
                backgroundColor: "#202124 !important",
                boxShadow: "none",
              },
            }
      }
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
          {/* FROM AIRPORT SEARCH */}
          <Grid item xs={12} md={4}>
            <Autocomplete
              freeSolo
              options={fromOptions}
              value={fromAirport}
              getOptionLabel={(option) =>
                (option as Airport).navigation.localizedName || ""
              }
              onInputChange={(e, value) => {
                fetchAirports(value, "from");
                setFromAirport(
                  fromOptions.find(
                    (a) => a.navigation.localizedName === value
                  ) ?? null
                );
              }}
              loading={loadingFrom}
              renderOption={(props, option: Airport) => (
                <li
                  {...props}
                  key={option.skyId || option.navigation.localizedName}
                >
                  {option.navigation.localizedName}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Where from?"
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingFrom ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* TO AIRPORT SEARCH */}
          <Grid item xs={12} md={4}>
            <Autocomplete
              freeSolo
              options={toOptions}
              value={toAirport}
              getOptionLabel={(option) =>
                (option as Airport).navigation.localizedName || ""
              }
              onInputChange={(e, value) => {
                fetchAirports(value, "to");
                setToAirport(
                  toOptions.find((a) => a.navigation.localizedName === value) ??
                    null
                );
              }}
              loading={loadingTo}
              renderOption={(props, option: Airport) => (
                <li
                  {...props}
                  key={option.skyId || option.navigation.localizedName}
                >
                  {option.navigation.localizedName}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Where to?"
                  variant="outlined"
                  size={isSmallScreen ? "small" : "medium"}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loadingTo ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* DEPARTURE DATE */}
          <Grid item xs={12} md={4}>
            <Box display={ticketType === "round-trip" ? "flex" : "block"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Departure"
                  value={departureDate}
                  onChange={(date) => setDepartureDate(date || dayjs())}
                  slotProps={{
                    textField: {
                      size: isSmallScreen ? "small" : "medium",
                      fullWidth: true,
                    },
                  }}
                  sx={
                    ticketType === "round-trip"
                      ? {
                          "& .MuiInputBase-root": {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRight: "none",
                            },
                          },
                        }
                      : null
                  }
                />
              </LocalizationProvider>

              {ticketType === "round-trip" && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Return"
                    value={returnDate}
                    onChange={(date) => setReturnDate(date || dayjs())}
                    slotProps={{
                      textField: {
                        size: isSmallScreen ? "small" : "medium",
                        fullWidth: true,
                      },
                    }}
                    sx={
                      ticketType === "round-trip"
                        ? {
                            "& .MuiInputBase-root": {
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                            },
                          }
                        : null
                    }
                  />
                </LocalizationProvider>
              )}
            </Box>
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
            onClick={handleExploreClick}
          >
            Explore
          </Button>
        </div>
      </div>
    </Paper>
  );
}
