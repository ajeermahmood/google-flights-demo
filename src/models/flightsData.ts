export interface FlightsData {
  status: boolean;
  timestamp: number;
  sessionId: string;
  data: Data;
}

export interface Data {
  context: Context;
  itineraries: Itinerary[];
  messages: any[];
  filterStats: FilterStats;
  flightsSessionId: string;
  destinationImageUrl: string;
}

export interface Context {
  status: string;
  totalResults: number;
}

export interface FilterStats {
  duration: Duration;
  airports: FilterStatsAirport[];
  carriers: Carrier[];
  stopPrices: StopPrices;
}

export interface FilterStatsAirport {
  city: string;
  airports: AirportAirport[];
}

export interface AirportAirport {
  id: string;
  entityId: string;
  name: string;
}

export interface Carrier {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

export interface Duration {
  min: number;
  max: number;
  multiCityMin: number;
  multiCityMax: number;
}

export interface StopPrices {
  direct: Direct;
  one: One;
  twoOrMore: One;
}

export interface Direct {
  isPresent: boolean;
}

export interface One {
  isPresent: boolean;
  formattedPrice: string;
}

export interface Itinerary {
  id: string;
  price: Price;
  legs: Leg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FarePolicy;
  fareAttributes: FareAttributes;
  tags?: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

export interface FareAttributes {}

export interface FarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

export interface Leg {
  id: string;
  origin: LegDestination;
  destination: LegDestination;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: Date;
  arrival: Date;
  timeDeltaInDays: number;
  carriers: Carriers;
  segments: Segment[];
}

export interface Carriers {
  marketing: Carrier[];
  operationType: string;
  operating?: Carrier[];
}

export interface LegDestination {
  id: string;
  entityId: string;
  name: string;
  displayCode: string;
  city: string;
  country: string;
  isHighlighted: boolean;
}

export interface Segment {
  id: string;
  origin: SegmentDestination;
  destination: SegmentDestination;
  departure: Date;
  arrival: Date;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: TingCarrier;
  operatingCarrier: TingCarrier;
}

export interface SegmentDestination {
  flightPlaceId: string;
  displayCode: string;
  parent: Parent;
  name: string;
  type: DestinationType;
  country: string;
}

export interface Parent {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: ParentType;
}

export enum ParentType {
  City = "City",
}

export enum DestinationType {
  Airport = "Airport",
}

export interface TingCarrier {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
  displayCode: string;
}

export interface Price {
  raw: number;
  formatted: string;
  pricingOptionId: string;
}
