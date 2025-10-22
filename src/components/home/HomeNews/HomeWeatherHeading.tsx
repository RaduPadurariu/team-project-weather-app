import React from "react";

const HomeWeatherHeading = () => {
  return (
    <section className="relative bg-[url('/images/city.png')] w-full min-h-[450px] bg-cover bg-top bg-no-repeat flex justify-between items-center">
      <div className="weather-container flex flex-col md:flex-row pr-10">
        <div className="flex flex-col md:items-end w-full">
          <h1 className="text-4xl lg:text-[68px]  font-semibold text-white py-10 md:text-right">
            WeatherTrip.<span className="text-lg">news</span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-[400px] md:text-right">
            Your Weather, Your Journey. Always a Step Ahead with Our
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeWeatherHeading;
