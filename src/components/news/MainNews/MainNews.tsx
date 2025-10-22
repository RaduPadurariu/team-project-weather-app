import { newsArticles } from "@/data/data";
import Image from "next/image";
import React from "react";

const MainNews = () => {
  return (
    <section>
      <div className="weather-container">
        <div className="flex flex-col md:flex-row justify-between py-24 gap-5">
          <div className="w-full md:w-3/4">
            <h1 className="text-[var(--black-600)] text-xl md:text-4xl pb-8">
              Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
              elementum. Faucibus faucibus tempor habitasse amet auctor. Sit
              lorem a cursus a. Donec
            </h1>
            <Image
              width={792}
              height={710}
              src="/images/umbrella.png"
              alt="App Image"
              className="rounded-sm w-full"
              priority
            />
          </div>
          <div className="w-full md:w-1/4">
            <ul>
              {newsArticles.map((news) => {
                return (
                  <li key={news.id} className="pb-8 px-0 md:px-[15px]">
                    <h4 className="text-black text-base pb-2">{news.title}</h4>
                    <p className="text-[var(--black-600)] text-sm pb-2">
                      {news.description}
                    </p>
                    <button className="text-[var(--purple-500)] text-xs cursor-pointer hover:text-[var(--black-600)] transition-all duration-300 ease-in-out">
                      Access article
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-10 items-center">
          <div className="flex items-center">
            <Image
              width={48}
              height={48}
              src="/images/author1.png"
              alt="App Image"
              className="mr-3"
            />
            <div className="flex flex-col">
              <h4 className="text-[var(--black-600)] font-semibold text-base">
                Becky Ferreira
              </h4>
              <p className="text-[var(--black-200)] text-xs">Author</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[var(--black-600)] font-semibold text-base">
              BBC News
            </h4>
            <p className="text-[var(--black-200)] text-xs">26/06/2024</p>
          </div>
          <button className="h-8 cursor-pointer text-xs text-white bg-[var(--purple-500)] rounded-full px-20 border-2 border-[var(--purple-500)] font-semibold hover:text-[var(--purple-500)] hover:bg-white transition-all duration-300 ease-in-out">
            Access article
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
