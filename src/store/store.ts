import { configureStore, createSlice } from "@reduxjs/toolkit";
// import patientReducer from "./features/patientSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      flight: createSlice({ name: "flight", initialState: "", reducers: {} })
        .reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
