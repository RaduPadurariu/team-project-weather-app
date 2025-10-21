"use client";

import { LinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterNavbarActiveLink = ({ link }: { link: LinkType }) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;
  return (
    <li>
      <Link
        href={link.link}
        className={`text-lg md:text-xl w-full overflow-hidden relative block font-normal py-0 px-2 md:px-6 hover:text-[var(--purple-500)] duration-300 transition-all ease-in-out ${
          isActive ? "text-[var(--purple-500)]" : "text-[var(--black-600)]"
        }`}
      >
        {link.title}
      </Link>
    </li>
  );
};

export default FooterNavbarActiveLink;
