"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { useCurrentDate } from "@/hooks/useCurrentDate";
import { useWeatherContext } from "@/context/useContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { currentWeather, isLoading, error } = useWeatherContext();

  const { weekday, day, month, year, hour, minute } = useCurrentDate();
  const formattedDate = `${weekday}, ${month} ${day} ${year}, ${hour}:${minute}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed z-1000">
      <div
        className={`w-full py-1.5 bg-[var(--black-100)] flex items-center ${
          isSticky ? "hidden" : ""
        }`}
      >
        <div className="weather-container">
          <div className="text-[var(--black-600)] text-xs flex items-center">
            {formattedDate} –{" "}
            {isLoading ? (
              <div className="ml-2">
                <LoadingSpinner />
              </div>
            ) : error ? (
              <span className="text-red-600 ml-1">{error}</span>
            ) : (
              <span className="text-black ml-1">
                {currentWeather?.city || "City"}
              </span>
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
