"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { useCurrentDate } from "@/hooks/useCurrentDate";
import { useWeatherContext } from "@/context/useContext";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { currentLocation } = useWeatherContext();

  const { weekday, day, month, year, hour, minute } = useCurrentDate();
  const formattedDate = `${weekday}, ${month} ${day} ${year}, ${hour}:${minute}`;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <header className="w-full fixed z-1000">
      <div
        className={`w-full py-1.5 bg-[var(--black-100)] flex items-center ${
          isSticky ? "hidden" : ""
        }`}
      >
        <div className="weather-container">
          <div className="text-[var(--black-600)] text-xs">
            {formattedDate} - {currentLocation?.city || "City"}
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
