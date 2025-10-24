"use client";

import { ContextProviderType, LocationDataType } from "@/types/types";
import { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";

export const ContextProvider = ({ children }: ContextProviderType) => {
  // const [data, setData] = useState<WeatherData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] =
    useState<LocationDataType | null>(null);

  useEffect(() => {
    // const fetchWeather = async () => {
    //   try {
    //     const res = await fetch(
    //       "https://api.-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
    //     );

    //     if (!res.ok) {
    //       throw new Error(`Weather fetch failed: status ${res.status}`);
    //     }
    //     const json = await res.json();

    //     console.log("Vremea: ", json);
    //   } catch (error) {
    //     console.error("Failed to fetch weather", error);
    //     setError((error as Error).message);
    //   }
    // };

    // fetchWeather();

    const fetchLocation = async (
      lat: number,
      lng: number
    ): Promise<LocationDataType | undefined> => {
      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${process.env.NEXT_PUBLIC_OPENCAGE_KEY}`
        );
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          console.error("No results found");
          return;
        }

        const result = data.results[0];
        const city =
          result.components.city ||
          result.components.town ||
          result.components.village ||
          result.components.county;
        const country = result.components.country;

        const location: LocationDataType = {
          city,
          country,
          lat,
          lng,
        };

        console.log("Fetched location:", location);
        setCurrentLocation(location);
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    };

    // Coordinates
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchLocation(latitude, longitude);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError("Location access denied");
      }
    );
  }, []);

  return (
    <WeatherContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};
