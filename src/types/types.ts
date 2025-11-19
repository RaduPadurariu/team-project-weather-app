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

export interface WeatherAppForecastType {
  date: string;
  avg_humidity: number;
  avg_temp_C: number;
  max_temp_C: number;
  min_temp_C: number;
  max_wind_kph: number;
  condition: {
    text: string;
    icon: string | null;
  };
}

export interface WeatherType {
  city?: string;
  country?: string;
  lat: number;
  lon: number;
  forecast: WeatherAppForecastType[];
}

export interface WeatherDataType {
  country: string;
  name: string;
  lat: number;
  lon: number;
}
