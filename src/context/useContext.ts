import { WeatherContext } from "./WeatherContext";
import { useContext } from "react";
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error("useContext must be use within Provider");
  }

  return context;
};
