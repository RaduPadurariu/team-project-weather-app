"use client";

import { useWeatherContext } from "@/context/useContext";
import { useCurrentDate } from "@/hooks/useCurrentDate";
import Image from "next/image";
import React from "react";

const HeroApp = () => {
  const { weekday, day, month, year, hour, minute } = useCurrentDate();
  const { currentLocation } = useWeatherContext();
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
              {currentLocation?.city || "City"}
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
              <div className="text-xs text-[var(--black-600)] pb-2">
                {day} {month}, {weekday}
              </div>
              <div className="ml-[-1px] pb-2 flex items-center">
                <i className="fa-regular mr-2 fa-moon text-xl"></i>
                <span className="text-xs text-[var(--black-600)]">Clean</span>
              </div>
              <div className="ml-[-1px] pb-2 flex items-center">
                <i className="fa-solid fa-wind mr-2 text-[var(--purple-500)] text-xl"></i>
                <span className="text-xs text-[var(--black-600)] ">
                  10.8 km/h
                </span>
              </div>
              <div className="ml-[-1px] pb-2 flex items-center">
                <i className="fa-solid fa-cloud-rain mr-2 text-[var(--purple-500)] text-xl"></i>
                <span className="text-xs text-[var(--black-600)] ">34%</span>
              </div>
            </div>
            <div className="flex flex-col justify-between text-right">
              <div className="text-[40px]">
                {hour}:{minute}
              </div>
              <div className="text-[32px]">24&deg;</div>
            </div>
          </div>
          <div>
            <ul className="flex w-full justify-between">
              <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                <div className="text-xs font-semibold mb-1">Now</div>
                <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                <div className="text-xs font-semibold mb-1">24&deg;</div>
              </li>
              <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                <div className="text-xs font-semibold mb-1">00:00</div>
                <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                <div className="text-xs font-semibold mb-1">12&deg;</div>
              </li>
              <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                <div className="text-xs font-semibold mb-1">05:00</div>
                <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                <div className="text-xs font-semibold mb-1">15&deg;</div>
              </li>
              <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                <div className="text-xs font-semibold mb-1">10:00</div>
                <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                <div className="text-xs font-semibold mb-1">20&deg;</div>
              </li>
              <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                <div className="text-xs font-semibold mb-1">15:00</div>
                <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                <div className="text-xs font-semibold mb-1">23&deg;</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroApp;
