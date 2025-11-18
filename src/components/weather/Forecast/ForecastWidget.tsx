"use client";
import { WeatherType } from "@/types/types";
import React from "react";

const ForecastWidget = ({
  currentWeather,
  selectedLocation,
}: {
  currentWeather: WeatherType | null;
  selectedLocation: WeatherType | null;
}) => {
  return (
    <section className="relative bg-[url('/images/forecast.png')] w-full min-h-[335px] bg-cover bg-center bg-no-repeat rounded-lg">
      <div className="weather-container">
        <div className="max-w-[900px] w-full mx-auto ">
          <div className="flex justify-between h-full">
            {/* partea stângă */}
            <div className="flex flex-col justify-between ">
              <div className="1">
                <h1 className="text-2xl lg:text-[40px] font-semibold text-white pt-11 pb-3">
                  {selectedLocation?.city || currentWeather?.city || "City"}
                </h1>
                <p className="text-base text-[var(--black-100)]">
                  {selectedLocation?.country || currentWeather?.country}
                </p>
              </div>
              <div className="2 font-semibold text-[68px] text-white pt-15">
                28&deg;
              </div>
            </div>

            {/* partea dreaptă */}
            <div>
              <div className="pt-11">
                <i className="fa-regular fa-moon text-[var(--red-500)] text-7xl font-semibold block mb-2"></i>
                <div className="text-[var(--red-500)] font-semibold">
                  Clear sky
                </div>
                <div className="flex flex-col pt-4">
                  <div className="flex mb-3">
                    <i className="fas fa-arrow-up text-[var(--red-500)] text-2xl block mr-3"></i>
                    <div className="text-[var(--red-500)]  block">32&deg;</div>
                  </div>
                  <div className="flex mb-3">
                    <i className="fas fa-arrow-down text-[var(--red-500)] text-2xl block mr-3"></i>
                    <div className="text-[var(--red-500)]  block">21&deg;</div>
                  </div>
                  <div className="flex mb-3">
                    <i className="fa-solid fa-wind text-[var(--red-500)] text-2xl block mr-3"></i>
                    <div className="text-[var(--red-500)] block">17 km/h</div>
                  </div>
                  <div className="flex mb-3">
                    <i className="fa-solid fa-droplet text-[var(--red-500)] text-2xl block mr-3"></i>
                    <div className="text-[var(--red-500)]  block">67&deg;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastWidget;
