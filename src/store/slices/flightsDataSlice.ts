import { FlightsData } from "@/models/flightsData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlightDataState {
  flights: FlightsData | null;
  loading: boolean;
}

const initialState: FlightDataState = {
  flights: null,
  loading: true,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlightsData(state, action: PayloadAction<FlightsData>) {
      state.flights = action.payload;
    },
    setFlightsDataLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    clearFlightsData(state) {
      state.flights = null;
    },
  },
});

export const { setFlightsData, setFlightsDataLoading, clearFlightsData } =
  flightsSlice.actions;

export default flightsSlice.reducer;
