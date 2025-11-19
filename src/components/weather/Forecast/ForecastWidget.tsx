"use client";
import { WeatherType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ForecastWidget = ({
  currentWeather,
  selectedLocation,
}: {
  currentWeather: WeatherType | null;
  selectedLocation: WeatherType | null;
}) => {
  const icon = currentWeather?.forecast?.[0]?.condition?.icon;
  const finalIcon = icon
    ? icon.startsWith("//")
      ? "https:" + icon
      : icon
    : null;
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
                {currentWeather?.forecast[0].avg_temp_C}&deg;
              </div>
            </div>

            {/* partea dreaptă */}
            <div>
              <div className="pt-11">
                {/* <i className="fa-regular fa-moon text-[var(--red-500)] text-7xl font-semibold block mb-2"></i> */}
                {finalIcon && (
                  <Image
                    width={100}
                    height={100}
                    src={finalIcon}
                    alt="App Image"
                    className="-ml-4"
                  />
                )}
                <div className="text-[var(--red-500)] font-semibold">
                  {currentWeather?.forecast[0].condition.text}
                </div>
                <div className="flex flex-col pt-4">
                  <div className="flex mb-3">
                    <i className="fas fa-arrow-up text-[var(--red-500)] text-xl block mr-3"></i>
                    <div className="text-[var(--red-500)]  block">
                      {currentWeather?.forecast[0].max_temp_C}&deg;
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <i className="fas fa-arrow-down text-[var(--red-500)] text-xl block mr-3"></i>
                    <div className="text-[var(--red-500)]  block">
                      {currentWeather?.forecast[0].min_temp_C}&deg;
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <i className="fa-solid fa-wind text-[var(--red-500)] text-xl block mr-3"></i>
                    <div className="text-[var(--red-500)] block">
                      {" "}
                      {currentWeather?.forecast[0].max_wind_kph} km/h
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <i className="fa-solid fa-droplet text-[var(--red-500)] text-xl block mr-3"></i>
                    <div className="text-[var(--red-500)]  block">
                      {currentWeather?.forecast[0].avg_humidity} %;
                    </div>
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
