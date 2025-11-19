"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ForecastDate from "./ForecastDate";
import ForecastWidget from "./ForecastWidget";
import ForecastSearchForm from "./ForecastSearchForm";
import { useWeatherContext } from "@/context/useContext";
import { WeatherCoords, WeatherType } from "@/types/types";
import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";

const Forecast = () => {
  const { currentWeather } = useWeatherContext();
  const [selectedLocation, setSelectedLocation] = useState<WeatherType | null>(
    null
  );
  const [selectedCoords, setSelectedCoords] = useState<WeatherCoords | null>(
    null
  );
  const [selectedTemp, setSelectedTemp] = useState("C");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedLocation(currentWeather);
  }, [currentWeather]);

  useEffect(() => {
    if (!selectedCoords) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://python-weather-backend.onrender.com/weather/forecast?q=${selectedCoords.lat},${selectedCoords.lon}&days=4`
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

        setSelectedLocation(weather);
      } catch {
        setError("Error fetching weather data");
        setSelectedLocation(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [selectedCoords]);

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
          <ForecastSearchForm setSelectedCoords={setSelectedCoords} />
        </div>
        <ForecastWidget selectedLocation={selectedLocation} />
        <div className="pt-10">
          <div className="flex w-full justify-between">
            <div className="flex">
              <div className="mr-3 text-[var(--black-600)] text-2xl cursor-pointer">
                Forecast for next two days
              </div>
              {/* <div className="text-[var(--black-300)] text-2xl cursor-pointer">
                Week
              </div> */}
            </div>
            <div className="flex">
              <div
                onClick={() => setSelectedTemp("C")}
                className={`${
                  selectedTemp === "C"
                    ? "bg-[var(--purple-500)]  text-[var(--red-500)]"
                    : "bg-[var(--black-50)] text-[var(--black-400)]"
                } mr-3 rounded-full flex justify-center items-center w-8 leading-8 cursor-pointer text-sm font-semibold`}
              >
                <span>&deg;C</span>
              </div>
              <div
                onClick={() => setSelectedTemp("F")}
                className={`${
                  selectedTemp === "F"
                    ? "bg-[var(--purple-500)]  text-[var(--red-500)]"
                    : "bg-[var(--black-50)] text-[var(--black-400)]"
                } mr-3 rounded-full flex justify-center items-center w-8 leading-8 cursor-pointer text-sm font-semibold`}
              >
                <span>&deg;F</span>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {selectedLocation?.forecast.slice(1).map((item) => {
                const icon = item?.condition?.icon;

                return (
                  <li
                    key={item.date}
                    className="border-2 border-[var(--black-200)] rounded-2xl p-3.5"
                  >
                    <div className="text-xs font-semibold text-[var(--black-600)] mb-3">
                      {isLoading ? <LoadingSpinner /> : item.date}
                    </div>
                    <div className="flex justify-between">
                      <div className="">
                        <div className="text-xs font-semibold text-[var(--black-200)] mb-3">
                          {item.condition.text}
                        </div>
                        <div className="flex mb-1">
                          <i className="fas fa-temperature-high block text-[var(--purple-400)] text-xl -ml-1"></i>
                          <div className="text-[var(--black-600)] font-semibold">
                            {selectedTemp === "C"
                              ? item.avg_temp_C
                              : (item.avg_temp_C * 1.8 + 32).toFixed(1)}
                            &deg;
                          </div>
                        </div>
                        <div className="flex ">
                          <i className="fa-solid fa-droplet block text-[var(--purple-400)] text-xl -ml-1.5 mr-0.5"></i>
                          <div className="text-[var(--black-600)] font-semibold">
                            {item.avg_humidity}%
                          </div>
                        </div>
                      </div>
                      <div>
                        {icon && (
                          <Image
                            src={icon}
                            alt="Weather Image Cloud"
                            width={75}
                            height={75}
                            className=""
                          />
                        )}
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
