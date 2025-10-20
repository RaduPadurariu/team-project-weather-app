"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
            Monday, June 24, 2024, 13:57 Time zone in Brasilia - Federal
            District (GMT-3)
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
