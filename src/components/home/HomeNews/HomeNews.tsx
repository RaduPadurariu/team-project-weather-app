import React from "react";
import HomeNewsTitle from "./HomeNewsTitle";
import Image from "next/image";
import HomeNewsArticle from "./HomeNewsArticle";

const HomeNews = () => {
  return (
    <section>
      <div className="relative bg-[url('/images/city.png')] w-full min-h-[450px] bg-cover bg-top bg-no-repeat flex justify-between items-center">
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
      </div>
      <div className="bg-[var(--red-500)] py-16">
        <div className="weather-container">
          <div className="max-w-[900px] mx-auto w-full">
            <div className="pb-10">
              <HomeNewsTitle title="latest news" />
              <div className="flex flex-col md:flex-row py-5">
                <div className="w-full md:w-[40%] pb-10 md:pb-0">
                  <Image
                    width={792}
                    height={710}
                    src="/images/umbrella.png"
                    alt="App Image"
                    className="rounded-md pb-4"
                  />
                  <HomeNewsArticle
                    title="Heavy rain in New Orleans"
                    description="Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem a cursus a. Donec vitae massa et lectus dolor in."
                    classStyle="w-full"
                  />
                </div>
                <div className="w-full md:w-[60%] ml-0 md:ml-15">
                  <div className="flex flex-col md:flex-row justify-between items-center pb-8 gap-4">
                    <HomeNewsArticle
                      title="Heavy rain in New Orleans"
                      description="Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem a cursus a. Donec vitae massa et lectus dolor in."
                      classStyle="w-full md: w-3/4"
                    />
                    <Image
                      width={156}
                      height={118}
                      src="/images/sun.png"
                      alt="App Image"
                      className=" w-full md:w-1/4 md:ml-3 block min-w-[150px]"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center pb-8 gap-4">
                    <HomeNewsArticle
                      title="Heavy rain in New Orleans"
                      description="Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem a cursus a. Donec vitae massa et lectus dolor in."
                      classStyle="w-full md: w-3/4"
                    />
                    <Image
                      width={156}
                      height={118}
                      src="/images/water.png"
                      alt="App Image"
                      className="w-full md:w-1/4 md:ml-3 block min-w-[150px]"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <HomeNewsArticle
                      title="Heavy rain in New Orleans"
                      description="Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem a cursus a. Donec vitae massa et lectus dolor in."
                      classStyle="w-full md: w-3/4 "
                    />
                    <Image
                      width={156}
                      height={118}
                      src="/images/hills.png"
                      alt="App Image"
                      className="w-full md:w-1/4 md:ml-3 block min-w-[150px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <HomeNewsTitle title="all around the world" />
              <div className="flex flex-col md:flex-row gap-5 py-5">
                <div className="w-full md:w-1/2 pb-5 md:pb-0">
                  <Image
                    width={491}
                    height={280}
                    src="/images/storm.png"
                    alt="App Image"
                    className="w-full block rounded-md pb-4"
                  />
                  <HomeNewsArticle
                    title="Heavy rain in New Orleans"
                    description="Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem a cursus a. Donec vitae massa et lectus dolor in."
                    classStyle="w-full"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Image
                    width={491}
                    height={280}
                    src="/images/palmier.png"
                    alt="App Image"
                    className="w-full block rounded-md pb-4"
                  />
                  <HomeNewsArticle
                    title="Heavy rain in New Orleans"
                    description="Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat elementum. Faucibus faucibus tempor habitasse amet auctor. Sit lorem a cursus a. Donec vitae massa et lectus dolor in."
                    classStyle="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
