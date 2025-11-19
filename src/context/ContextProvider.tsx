"use client";

import { ContextProviderType, WeatherCoords, WeatherType } from "@/types/types";
import { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherType | null>(
    null
  );
  const [coords, setCoords] = useState<WeatherCoords | null>(null);
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
          `https://python-weather-backend.onrender.com/weather/forecast?q=${coords.lat},${coords.lon}&days=4`
        );
        if (!res.ok) {
          throw new Error(`Weather fetch failed: ${res.status}`);
        }
        const data: WeatherType = await res.json();

        const formatIconUrl = (icon?: string | null): string | null => {
          if (!icon) return null;
          return icon.startsWith("//") ? "https:" + icon : icon;
        };

        const weather: WeatherType = {
          city: data.city,
          country: data.country,
          lat: data.lat,
          lon: data.lon,
          forecast: data.forecast.map((f) => ({
            date: f.date,
            avg_humidity: f.avg_humidity,
            avg_temp_C: f.avg_temp_C,
            max_temp_C: f.max_temp_C,
            min_temp_C: f.min_temp_C,
            max_wind_kph: f.max_wind_kph,
            condition: {
              text: f.condition.text,
              icon: formatIconUrl(f.condition.icon),
            },
          })),
        };

        setCurrentWeather(weather);
      } catch {
        setError("Error fetching weather data");
        setCurrentWeather(null);
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
