"use client";

import { navbarLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarActiveLink from "./NavbarActiveLink";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`w-full bg-[var(--red-500)] py-1.5`}>
      <div className={`weather-container flex justify-between items-center`}>
        <div>
          <Link href={"/"}>
            <Image
              width={564}
              height={564}
              src={"/images/logo.png"}
              alt="No Logo Image"
              priority
              className="w-[62px] h-[62px]"
            ></Image>
          </Link>
        </div>
        <nav>
          <ul
            className={`flex pt-5 md:pt-0 flex-col md:flex-row bg-[#000000E0] md:bg-transparent z-[998] top-0 left-0 fixed md:static bottom-0 w-[260px] md:w-full transform ${
              navOpen
                ? "translate-x-0 duration-300 ease-in-out"
                : "-translate-x-full"
            } md:translate-x-0`}
          >
            {navbarLinks.map((link) => {
              return (
                <NavbarActiveLink
                  key={link.id}
                  link={link}
                  setNavOpen={setNavOpen}
                />
              );
            })}
          </ul>
          <div className="block lg:hidden z-[997]">
            <span
              className=" text-black block cursor-pointer text-2xl ml-5 text-center md:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
