"use client";

import {
  ContextProviderType,
  WeatherApiType,
  WeatherType,
} from "@/types/types";
import { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherType | null>(
    null
  );
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [selectedWeather, setSelectedWeather] = useState<WeatherType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // const locationApi = process.env.NEXT_PUBLIC_OPENCAGE_KEY;
  // const locationLink = `https://api.opencagedata.com/geocode/v1/json?q=${currentLocation?.lat}+${currentLocation?.lng}&key=${locationApi}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => console.error("Geolocation error:", err)
    );
  }, []);

  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://python-weather-backend.onrender.com/weather?q=${coords.lat},${coords.lon}`
        );
        if (!res.ok) {
          throw new Error(`Weather fetch failed: ${res.status}`);
        }
        const data: WeatherApiType = await res.json();
        console.log(data);

        const weather: WeatherType = {
          city: data.city,
          country: data.country,
          lat: data.lat,
          lon: data.lon,
          temp: data.temperature_C,
          humidity: data.humidity,
          windSpeed: data.windspeed_kph,
          condition: data.condition,
        };

        setCurrentWeather(weather);
      } catch (err) {
        setError("Error fetching weather data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [coords]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        selectedWeather,
        setSelectedWeather,
        isLoading,
        setIsLoading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
