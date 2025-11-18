"use client";
import { todayForecast } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import ForecastDate from "./ForecastDate";
import ForecastWidget from "./ForecastWidget";
import ForecastSearchForm from "./ForecastSearchForm";
import { useWeatherContext } from "@/context/useContext";
import { WeatherType } from "@/types/types";

const Forecast = () => {
  const { currentWeather } = useWeatherContext();
  const [selectedLocation, setSelectedLocation] = useState<WeatherType | null>(
    null
  );

  return (
    <section>
      <div className="weather-container">
        <div className="flex flex-col md:flex-row pt-20 justify-between items-center gap-8 pb-10">
          <div className="">
            <h1 className="font-semibold text-[32px] text-[var(--black-600)] pb-5">
              Weather Forecast
            </h1>
            <div className="text-[var(--black-300)] text-base">
              <ForecastDate />
            </div>
          </div>
          <ForecastSearchForm setSelectedLocation={setSelectedLocation} />
        </div>
        <ForecastWidget
          currentWeather={currentWeather}
          selectedLocation={selectedLocation}
        />
        <div className="pt-10">
          <div className="flex w-full justify-between">
            <div className="flex">
              <div className="mr-3 text-[var(--black-600)] text-2xl cursor-pointer">
                Today
              </div>
              <div className="text-[var(--black-300)] text-2xl cursor-pointer">
                Week
              </div>
            </div>
            <div className="flex">
              <div className="bg-[var(--purple-500)] text-[var(--red-500)] mr-3 rounded-full flex justify-center items-center w-8 leading-8 cursor-pointer text-sm font-semibold">
                <span>&deg;C</span>
              </div>
              <div className="bg-[var(--black-50)] text-[var(--black-400)] rounded-full flex justify-center items-center w-8 leading-8 cursor-pointer text-sm font-semibold">
                <span>&deg;F</span>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {todayForecast.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="border-2 border-[var(--black-200)] rounded-2xl p-3.5"
                  >
                    <div className="text-xs font-semibold text-[var(--black-600)] mb-3">
                      {item.date}
                    </div>
                    <div className="flex justify-between">
                      <div className="">
                        <div className="text-xs font-semibold text-[var(--black-200)] mb-3">
                          {item.wetherType}
                        </div>
                        <div className="flex mb-1">
                          <i className="fas fa-temperature-high block text-[var(--purple-400)] text-xl -ml-1"></i>
                          <div className="text-[var(--black-600)] font-semibold">
                            {item.temp}&deg;
                          </div>
                        </div>
                        <div className="flex ">
                          <i className="fa-solid fa-droplet block text-[var(--purple-400)] text-xl -ml-1.5 mr-0.5"></i>
                          <div className="text-[var(--black-600)] font-semibold">
                            {item.hum}%
                          </div>
                        </div>
                      </div>
                      <div>
                        <Image
                          src={item.clouds}
                          alt="Weather Image Cloud"
                          width={36}
                          height={36}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
