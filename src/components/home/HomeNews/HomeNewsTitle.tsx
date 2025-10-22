import React from "react";

const HomeNewsTitle = ({ title }: { title: string }) => {
  return (
    <section className="flex items-center">
      <h2 className="text-[var(--black-600)] font-semibold text-xl md:text-[40px] uppercase whitespace-nowrap mr-10 ">
        {title}
      </h2>
      <div className="h-1 bg-[var(--purple-500)] w-full"></div>
    </section>
  );
};

export default HomeNewsTitle;
