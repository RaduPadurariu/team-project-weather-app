import Image from "next/image";
import React from "react";
import HeroApp from "./HeroApp";

const Hero = () => {
  return (
    <section className="w-full pt-[100px]">
      <div className="relative bg-[url('/images/banner.png')] w-full min-h-[450px] bg-cover bg-center bg-no-repeat flex justify-between items-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="weather-container flex flex-col md:flex-row">
          <div className="flex flex-col h-full justify-center z-10">
            <h1 className="text-4xl lg:text-[68px]  font-semibold text-white py-10">
              WeatherTrip
            </h1>
            <p className="text-lg md:text-xl text-white max-w-[400px] px-1 lg:px-2">
              Your Weather, Your Journey. Always a Step Ahead with Our
              <span className="font-semibold"> Weather Forecasting App!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--red-500)] py-16">
        <div className="weather-container flex justify-center">
          <div className="max-w-[900px] mx-auto w-full">
            <div className="flex flex-col md:flex-row mb-16 relative">
              <div className="w-full md:w-1/2 mb-12 md:mb-0 mr-0 md:mr-3">
                <p className="text-lg md:text-2xl text-[var(--black-600)] mb-10">
                  Stay prepared for upcoming weather with
                  <span className="font-semibold"> daily weather news.</span>
                </p>
                <button className="cursor-pointer text-[var(--purple-500)] rounded-full px-20 border-2 border-[var(--purple-500)] font-semibold py-1.5 hover:text-white hover:bg-[var(--purple-500)] transition-all duration-300 ease-in-out">
                  Explore
                </button>
              </div>

              <HeroApp />
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <Image
                  width={464}
                  height={423}
                  alt="Weather Trip Image"
                  src="/images/weatherTrip-banner 1.png"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-[var(--black-600)] text-[32px] mb-4 md:text-right">
                  Don&apos;t guess the Weather.
                </h3>
                <p className="text-[var(--black-600)] md:text-right mb-4">
                  Clime for year-round weather forecasts for your location and
                  across the world
                </p>
                <div className="md:text-right">
                  <button className="cursor-pointer mb-4 text-white bg-[var(--purple-500)] rounded-full px-20 border-2 border-[var(--purple-500)] font-semibold py-1.5 hover:text-[var(--purple-500)] hover:bg-white transition-all duration-300 ease-in-out">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
