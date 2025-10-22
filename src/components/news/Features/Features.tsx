import { breakingNewsArticles } from "@/data/data";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section>
      <div className="weather-container">
        <div className="pb-24">
          <h3 className="text-xl pb-6">Featured</h3>
          <ul className="flex flex-col md:flex-row gap-5">
            {breakingNewsArticles.slice(3).map((news) => {
              return (
                <li key={news.id} className="w-full md:w-1/2 pb-10 md:pb-0">
                  <div>
                    <Image
                      width={363}
                      height={252}
                      src={news.src}
                      alt="App Image"
                      className="pb-4 w-full"
                    />
                  </div>
                  <div className="flex pb-4">
                    <div className="text-[var(--black-300)] text-xs mr-10">
                      {news.date}
                    </div>
                    <div className="text-[var(--black-600)] text-xs font-semibold">
                      {news.title}
                    </div>
                  </div>
                  <div className="pb-4">{news.description}</div>
                  <div className="flex justify-between w-full items-center">
                    <div className="text-[var(--black-300)] text-xs">
                      {news.author}
                    </div>
                    <div>
                      <button className="text-[var(--purple-500)] text-xs cursor-pointer hover:text-[var(--black-600)] transition-all duration-300 ease-in-out">
                        Access article
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
