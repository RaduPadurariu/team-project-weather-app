import { todayForecast } from "@/data/data";
import Image from "next/image";
import React from "react";

const Forecast = () => {
  return (
    <section>
      <div className="weather-container">
        <div className="flex flex-col md:flex-row pt-20 justify-between items-center gap-8 pb-10">
          <div className="">
            <h1 className="font-semibold text-[32px] text-[var(--black-600)] pb-5">
              Weather Forecast
            </h1>
            <div className="text-[var(--black-300)] text-base">
              Saturday 27, September 2024
            </div>
          </div>
          <div>
            <form
              action=""
              className="rounded-full py-2 px-3 bg-[var(--black-50)] flex justify-between items-center"
            >
              <i className="fa fa-search text-[var(--black-400)] text-2xl mr-2"></i>
              <input
                type="text"
                className="text-sm min-w-[200px] md:min-w-[350px] focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="New York"
              />
            </form>
          </div>
        </div>
        <div className="relative bg-[url('/images/forecast.png')] w-full min-h-[335px] bg-cover bg-center bg-no-repeat rounded-lg">
          <div className="weather-container">
            <div className="max-w-[900px] w-full mx-auto ">
              <div className="flex justify-between h-full">
                {/* partea stângă */}
                <div className="flex flex-col justify-between ">
                  <div className="1">
                    <h1 className="text-2xl lg:text-[40px] font-semibold text-white pt-11 pb-3">
                      New York
                    </h1>
                    <p className="text-base text-[var(--black-100)]">
                      United States
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
                        <div className="text-[var(--red-500)]  block">
                          32&deg;
                        </div>
                      </div>
                      <div className="flex mb-3">
                        <i className="fas fa-arrow-down text-[var(--red-500)] text-2xl block mr-3"></i>
                        <div className="text-[var(--red-500)]  block">
                          21&deg;
                        </div>
                      </div>
                      <div className="flex mb-3">
                        <i className="fa-solid fa-wind text-[var(--red-500)] text-2xl block mr-3"></i>
                        <div className="text-[var(--red-500)] block">
                          17 km/h
                        </div>
                      </div>
                      <div className="flex mb-3">
                        <i className="fa-solid fa-droplet text-[var(--red-500)] text-2xl block mr-3"></i>
                        <div className="text-[var(--red-500)]  block">
                          67&deg;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
