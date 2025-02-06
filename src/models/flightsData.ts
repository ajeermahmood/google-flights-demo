export interface FlightsData {
  status: boolean;
  timestamp: number;
  data: Data;
}

export interface Data {
  itinerary: Itinerary;
  pollingCompleted: boolean;
}

export interface Itinerary {
  legs: Leg[];
  pricingOptions: PricingOption[];
  isTransferRequired: boolean;
  destinationImage: string;
  operatingCarrierSafetyAttributes: OperatingCarrierSafetyAttribute[];
  flexibleTicketPolicies: any[];
}

export interface Leg {
  id: string;
  origin: Destination;
  destination: Destination;
  segments: Segment[];
  duration: number;
  stopCount: number;
  departure: Date;
  arrival: Date;
  dayChange: number;
}

export interface Destination {
  id: string;
  name: string;
  displayCode: string;
  city: string;
}

export interface Segment {
  id: string;
  origin: Destination;
  destination: Destination;
  duration: number;
  dayChange: number;
  flightNumber: string;
  departure: Date;
  arrival: Date;
  marketingCarrier: TingCarrier;
  operatingCarrier: TingCarrier;
}

export interface TingCarrier {
  id: string;
  name: string;
  displayCode: string;
  displayCodeType: string;
  logo: string;
  altId: string;
}

export interface OperatingCarrierSafetyAttribute {
  carrierID: string;
  carrierName: string;
  faceMasksCompulsory: null;
  aircraftDeepCleanedDaily: null;
  attendantsWearPPE: null;
  cleaningPacksProvided: null;
  foodServiceChanges: null;
  safetyUrl: null;
}

export interface PricingOption {
  agents: Agent[];
  totalPrice: number;
}

export interface Agent {
  id: string;
  name: string;
  isCarrier: boolean;
  bookingProposition: string;
  url: string;
  price: number;
  rating: Rating;
  updateStatus: string;
  segments: Segment[];
  isDirectDBookUrl: boolean;
  quoteAge: number;
}

export interface Rating {
  value: number;
  count: number;
}
