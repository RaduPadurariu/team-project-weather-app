"use client";

import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";
import { useWeatherContext } from "@/context/useContext";
import { useCurrentDate } from "@/hooks/useCurrentDate";
import Image from "next/image";
import React from "react";

const HeroApp = () => {
  const { weekday, day, month, hour, minute } = useCurrentDate();
  const { currentWeather, isLoading } = useWeatherContext();

  const icon = currentWeather?.forecast?.[0]?.condition?.icon;

  return (
    <div className="w-full md:w-1/2 h-auto md:absolute left-[50%] md:top-[-200%] lg:top-[-250%]">
      <div className="w-full h-full relative">
        <div className="p-6 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] text-left max-w-[300px] lg:max-w-[360px] mx-auto md:mx-0 md:ml-auto bg-[var(--red-500)]">
          <div className="flex justify-between mb-4">
            <div className="w-8 h-6 cursor-pointer p-1">
              <div className="flex flex-col justify-between w-full h-full">
                <div className="h-1 bg-[var(--purple-500)] w-full rounded-md"></div>
                <div className="h-1 bg-[var(--purple-500)] w-[65%] rounded-md"></div>
                <div className="h-1 bg-[var(--purple-500)] w-[40%] rounded-md"></div>
              </div>
            </div>
            <div className="text-xs font-semibold text-[var(--purple-500)]">
              {isLoading ? <LoadingSpinner /> : currentWeather?.city || "City"}
            </div>
            <div className="cursor-pointer">
              <i className="fa fa-plus-circle text-[var(--purple-500)] text-lg"></i>
            </div>
          </div>
          <div className="mb-4">
            <Image
              width={792}
              height={710}
              src="/images/night-camp.png"
              alt="App Image"
              className="rounded-[10px]"
            />
          </div>
          <div className="flex justify-between mb-2">
            <div className="">
              <div className="text-xs font-semibold text-[var(--black-600)] pb-1">
                Today
              </div>
              <div className="text-xs text-[var(--black-600)] pb-2 flex flex-col lg:flex-row">
                <div>
                  {day} {month},
                </div>
                <div className="ml-0 lg:ml-1">{weekday}</div>
              </div>
              <div className="ml-[-1px] pb-2 flex items-center">
                {/* <i className="fa-regular mr-2 fa-moon text-xl"></i> */}
                {icon && (
                  <Image
                    width={30}
                    height={30}
                    src={icon}
                    alt="Weather Icon"
                    className="-ml-0.5"
                  />
                )}

                <span className="text-xs text-[var(--black-600)] ml-1">
                  {" "}
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    currentWeather?.forecast[0].condition.text
                  )}
                </span>
              </div>
              <div className="ml-[-1px] pb-2 flex items-center">
                <i className="fa-solid fa-wind mr-2 text-[var(--purple-500)] text-xl"></i>
                <span className="text-xs text-[var(--black-600)] flex ">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    currentWeather?.forecast[0].max_wind_kph
                  )}{" "}
                  km/h
                </span>
              </div>
              <div className="ml-[-1px] pb-2 flex items-center">
                <i className="fa-solid fa-droplet  mr-2 text-[var(--purple-500)] text-xl"></i>
                <span className="text-xs text-[var(--black-600)] flex">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    currentWeather?.forecast[0].avg_humidity
                  )}
                  %
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between text-right">
              <div className="text-[40px]">
                {hour}:{minute}
              </div>
              <div className="text-[32px] flex justify-end">
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  currentWeather?.forecast[0].avg_temp_C
                )}
                &deg;
              </div>
            </div>
          </div>
          <div>
            <ul className="flex w-full">
              {currentWeather?.forecast.slice(1).map((item) => {
                const icon = item.condition?.icon;
                return (
                  <li
                    key={item.date}
                    className="mr-2 text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center"
                  >
                    <div className="text-xs font-semibold mb-1">
                      {item.date}
                    </div>
                    {icon && (
                      <Image
                        width={30}
                        height={30}
                        src={icon}
                        alt="Weather Icon"
                        className="-ml-0.5"
                      />
                    )}
                    <div className="text-xs font-semibold mb-1">
                      {item.avg_temp_C}&deg;
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroApp;
