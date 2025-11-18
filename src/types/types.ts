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

export interface WeatherType {
  city?: string;
  country?: string;
  lat: number;
  lon: number;
  temp?: number;
  humidity?: number;
  windSpeed?: number;
  condition: string;
}

export interface WeatherContextType {
  currentWeather: WeatherType | null;
  setCurrentWeather: (value: WeatherType | null) => void;
  selectedWeather: WeatherType | null;
  setSelectedWeather: (value: WeatherType | null) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  error: string | null;
}

export interface ContextProviderType {
  children: React.ReactNode;
}

export interface WeatherApiType {
  country: string;
  city: string;
  lat: number;
  lon: number;
  temperature_C: number;
  windspeed_kph: number;
  humidity: number;
  condition: string;
}

export interface WeatherDataType {
  country: string;
  name: string;
  lat: number;
  lon: number;
}
