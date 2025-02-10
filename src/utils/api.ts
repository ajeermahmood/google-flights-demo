import { Airport } from "@/models/airport";
import { FlightsData } from "@/models/flightsData";
import axios from "axios";

export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  cabinClass: string;
  adults: string;
  sortBy: string;
  currency: string;
  market: string;
  countryCode: string;
}

const apiClient = axios.create({
  baseURL: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/",
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
  // timeout: 10000, // 10 seconds timeout
});

export const searchAirport = async (location: string): Promise<Airport[]> => {
  try {
    const response = await apiClient.get("/searchAirport", {
      params: { query: location, locale: "en-US" },
    });
    return response.data?.data ?? [];
  } catch (error) {
    console.error("Error fetching airports:", error);
    throw error;
  }
};

export const fetchFlights = async (
  params: FlightSearchParams
): Promise<FlightsData> => {
  try {
    const response = await apiClient.get("/searchFlights", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};
