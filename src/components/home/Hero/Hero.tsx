import Image from "next/image";
import React from "react";

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
                        Charleston
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
                    <div className="flex justify-between">
                      <div className="">
                        <div className="text-xs font-semibold text-[var(--black-600)] pb-1">
                          Today
                        </div>
                        <div className="text-xs text-[var(--black-600)] pb-2">
                          24 Jun, Friday
                        </div>
                        <div className="ml-[-1px] pb-2 flex items-center">
                          <i className="fa-regular mr-2 fa-moon text-xl"></i>
                          <span className="text-xs text-[var(--black-600)]">
                            Clean
                          </span>
                        </div>
                        <div className="ml-[-1px] pb-2 flex items-center">
                          <i className="fa-solid fa-wind mr-2 text-[var(--purple-500)] text-xl"></i>
                          <span className="text-xs text-[var(--black-600)] ">
                            10.8 km/h
                          </span>
                        </div>
                        <div className="ml-[-1px] pb-2 flex items-center">
                          <i className="fa-solid fa-cloud-rain mr-2 text-[var(--purple-500)] text-xl"></i>
                          <span className="text-xs text-[var(--black-600)] ">
                            34%
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between text-right">
                        <div className="text-[40px]">20:00</div>
                        <div className="text-[32px]">24&deg;</div>
                      </div>
                    </div>
                    <div>
                      <ul className="flex w-full justify-between">
                        <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                          <div className="text-xs font-semibold mb-1">Now</div>
                          <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                          <div className="text-xs font-semibold mb-1">
                            24&deg;
                          </div>
                        </li>
                        <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                          <div className="text-xs font-semibold mb-1">
                            00:00
                          </div>
                          <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                          <div className="text-xs font-semibold mb-1">
                            12&deg;
                          </div>
                        </li>
                        <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                          <div className="text-xs font-semibold mb-1">
                            05:00
                          </div>
                          <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                          <div className="text-xs font-semibold mb-1">
                            15&deg;
                          </div>
                        </li>
                        <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                          <div className="text-xs font-semibold mb-1">
                            10:00
                          </div>
                          <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                          <div className="text-xs font-semibold mb-1">
                            20&deg;
                          </div>
                        </li>
                        <li className="text-white bg-[var(--purple-300)] rounded-[10px] py-2 px-1.5 lg:px-3 flex flex-col items-center">
                          <div className="text-xs font-semibold mb-1">
                            15:00
                          </div>
                          <i className="fa-regular fa-moon text-white text-2xl mb-1"></i>
                          <div className="text-xs font-semibold mb-1">
                            23&deg;
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
