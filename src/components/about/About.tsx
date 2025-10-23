import { mariusSocialLinks, raduSocialLinks } from "@/data/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-[104px] bg-[#dee0e4] min-h-[500px]  w-full relative">
      <div className="weather-container">
        <div className="max-w-[900px] w-full mx-auto py-20">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-between py-10">
              <div></div>
              <h1 className="text-[var(--red-50)] text-5xl sm:text-7xl md:text-8xl text-center md:text-left pb-10 md:pb-0">
                Radu Padurariu
              </h1>
              <div className="flex flex-row gap-5 justify-center md:justify-start items-center">
                <a
                  href="https://radupadurariu.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer  text-white bg-[var(--black-500)] rounded-full px-10 md:px-20 border-2 border-[var(--black-500)] font-semibold py-1.5 hover:text-[var(--black-500)] hover:bg-white transition-all duration-300 ease-in-out"
                >
                  Portfolio
                </a>
                <ul className="flex">
                  {raduSocialLinks.map((icon) => {
                    return (
                      <li key={icon.id} className="">
                        <a
                          href={icon.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`${icon.icon} text-2xl text-[var(--black-500)]`}
                          ></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex justify-center md:justify-end ">
                <div className="w-[170px] bg-[#d9d9d9] h-[450px] rounded-full border border-black flex flex-col justify-between items-center pt-18 pb-3">
                  <div className="flex flex-col justify-between items-center px-5">
                    <h4 className="font-semibold text-base text-[var(--black-600)] mb-5">
                      <span className="text-[var(--purple-500)]">#</span>
                      Frontend
                    </h4>
                    <p className="text-base text-[var(--black-600)] text-center">
                      Next.js, Tailwind CSS, Typescript, Figma, Slack, Trello
                    </p>
                  </div>

                  <div className="cursor-pointer">
                    <Image
                      src="/images/Ellipse.png"
                      alt="Frontend Image"
                      width={140}
                      height={140}
                      className="rounded-full block"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[2px] bg-[var(--black-100)] my-15 md:my-20"></div>

          {/* Second part */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-between py-10 order-1 md:order-2">
              <div></div>
              <h1 className="text-[var(--red-50)] text-5xl sm:text-7xl md:text-8xl text-center md:text-right pb-10 md:pb-0">
                Maftei Marius
              </h1>
              <div className="flex flex-row gap-5 justify-center md:justify-end items-center">
                <a
                  href="https://github.com/MariusVasileMaftei"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="cursor-pointer  text-white bg-[var(--black-500)] rounded-full px-10 md:px-20 border-2 border-[var(--black-500)] font-semibold py-1.5 hover:text-[var(--black-500)] hover:bg-white transition-all duration-300 ease-in-out"
                >
                  Portfolio
                </a>
                <ul className="flex">
                  {mariusSocialLinks.map((icon) => {
                    return (
                      <li key={icon.id} className="">
                        <a
                          href={icon.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`${icon.icon} text-2xl text-[var(--black-500)]`}
                          ></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex justify-center md:justify-start ">
                <div className="w-[170px] bg-[#d9d9d9] h-[450px] rounded-full border border-black flex flex-col justify-between items-center pt-18 pb-3">
                  <div className="flex flex-col justify-between items-center px-5">
                    <h4 className="font-semibold text-base text-[var(--black-600)] mb-5">
                      <span className="text-[var(--purple-500)]">#</span>
                      Backend
                    </h4>
                    <p className="text-base text-[var(--black-600)] text-center">
                      Python, API Integration, Slack, Trello
                    </p>
                  </div>

                  <div className="cursor-pointer">
                    <Image
                      src="/images/Ellipse.png"
                      alt="Frontend Image"
                      width={140}
                      height={140}
                      className="rounded-full block"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
