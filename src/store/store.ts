import { configureStore, createSlice } from "@reduxjs/toolkit";
import flightsDataReducer from "./slices/flightsDataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      flightsData: flightsDataReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
