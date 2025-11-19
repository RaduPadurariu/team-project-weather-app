"use client";
import React, { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce"; // importă hookul tău
import { WeatherType } from "@/types/types";

const ForecastSearchForm = ({
  setSelectedLocation,
}: {
  setSelectedLocation: (value: WeatherType | null) => void;
}) => {
  const [suggestions, setSuggestions] = useState<WeatherType[]>([]);
  const [query, setQuery] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);

  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (isSelecting || debouncedQuery.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            debouncedQuery
          )}&key=${process.env.NEXT_PUBLIC_OPENCAGE_KEY}&limit=5`,
          { signal }
        );
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        setSuggestions(data.results || []);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (err instanceof Error) {
          console.error("Error fetching:", err.message);
        } else {
          console.error("Unknown error fetching:", err);
        }
      }
    };

    // fetchSuggestions();

    return () => controller.abort();
  }, [debouncedQuery, isSelecting]);

  // const handleClick = (item: WeatherApiType) => {
  //   setIsSelecting(true);
  //   const city = item.components.city || item.components.country;
  //   const country = item.components.country;
  //   const lat = item.components.lat;
  //   const lng = item.components.lng;
  //   const temp = item.components.temp;
  //   const humidity = item.components.humidity;
  //   const windSpeed = item.components.windSpeed;

  //   const location: WeatherType = {
  //     city,
  //     country,
  //     lat,
  //     lon,
  //     temp,
  //     humidity,
  //     windSpeed,
  //   };

  //   setSelectedLocation(location);
  //   setQuery("");
  //   setSuggestions([]);
  //   setTimeout(() => setIsSelecting(false), 300);
  // };

  return (
    <div className="relative">
      <form
        action=""
        className="rounded-full py-2 px-3 bg-[var(--black-50)] flex justify-between items-center"
      >
        <i className="fa fa-search text-[var(--black-400)] text-2xl mr-2"></i>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-sm min-w-[200px] md:min-w-[350px] focus:outline-none focus:ring-0 focus:border-transparent"
          placeholder="Search location..."
        />
      </form>

      {/* opțional, doar ca să vezi că funcționează */}
      {suggestions.length > 0 && (
        <ul className="absolute bg-white rounded-lg shadow mt-2 z-100 w-full">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="p-2 text-sm border-b last:border-none"
              // onClick={() => handleClick(s)}
            >
              {/* {s.components.city} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ForecastSearchForm;
