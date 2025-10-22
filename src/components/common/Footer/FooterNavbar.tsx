import React from "react";
import FooterNavbarActiveLink from "./FooterNavbarActiveLink";
import { navbarLinks } from "@/data/data";

export const FooterNavbar = () => {
  return (
    <nav className="w-full pb-6">
      <ul className={`flex justify-center flex-row w-full`}>
        {navbarLinks.map((link) => {
          return <FooterNavbarActiveLink key={link.id} link={link} />;
        })}
      </ul>
    </nav>
  );
};
