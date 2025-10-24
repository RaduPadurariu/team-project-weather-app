export interface LinkType {
  id: number;
  title: string;
  link: string;
}

export interface WeatherData {
  id: number;
  location: string;
  temperature: number;
}

export interface LocationDataType {
  city?: string;
  country?: string;
  lat: number;
  lng: number;
}

export interface WeatherContextType {
  currentLocation: LocationDataType | null;
  setCurrentLocation: (value: LocationDataType | null) => void;
}

export interface ContextProviderType {
  children: React.ReactNode;
}
