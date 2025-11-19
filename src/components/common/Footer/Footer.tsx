import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterNavbar } from "./FooterNavbar";
import { mariusSocialLinks, raduSocialLinks } from "@/data/data";

const Footer = () => {
  return (
    <footer className="full bg-[var(--red-600)]">
      <div className="w-full flex items-center justify-center pt-[42px] pb-8">
        <Link href="/" className="">
          <Image
            src="/images/logo.png"
            alt="Logo Image Footer"
            width={564}
            height={564}
            className=" w-[104px] h-[104px] inline-block"
          />
        </Link>
      </div>
      <FooterNavbar />
      <div className="w-full flex justify-center pb-3">
        <div className="flex flex-col md:flex-row justify-between">
          <div className=" w-full flex justify-between mb-2 mr-0 md:mr-10">
            <span className="whitespace-nowrap">Radu Padurariu:</span>
            <ul className="flex ml-2">
              {raduSocialLinks.map((icon) => {
                return (
                  <li key={icon.id} className="">
                    <a
                      href={icon.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`${icon.icon} text-2xl text-[var(--purple-400)]`}
                      ></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-between">
            <span className="whitespace-nowrap">Marius Maftei:</span>
            <ul className="flex ml-2">
              {mariusSocialLinks.map((icon) => {
                return (
                  <li key={icon.id} className="">
                    <a
                      href={icon.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`${icon.icon} text-2xl text-[var(--purple-400)]`}
                      ></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-5">
        <div className="text-sm text-[var(--black-300)] text-center px-[15px]">
          <span>
            Copyright &copy; All rights reserved | This template was inspired
            by&nbsp;
          </span>

          <a
            href="https://www.figma.com/files/team/1071487187872199805/resources/community/file/1388954110053705224?fuid=1071487182563597820"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:text-[var(--purple-500)]"
          >
            Joao Marcos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
