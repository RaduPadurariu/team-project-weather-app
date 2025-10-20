"use client";

import { LinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarActiveLink = ({
  link,
  setNavOpen,
}: {
  link: LinkType;
  setNavOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;

  return (
    <li>
      <Link
        onClick={() => {
          setNavOpen(false);
        }}
        href={link.link}
        className={`text-xl w-full overflow-hidden relative block font-medium md:font-normal py-2.5 md:py-0 pr-[22px] md:pr-10  pl-[15px] md:pl-2 md:hover:text-[var(--purple-500)] md:duration-300 md:transition-all md:ease-in-out ${
          isActive
            ? "text-[var(--purple-500)]"
            : "text-[var(--white-100)] md:text-[var(--black-600)]"
        }`}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default NavbarActiveLink;
