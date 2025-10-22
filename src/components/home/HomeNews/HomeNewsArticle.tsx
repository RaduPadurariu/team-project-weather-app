import React from "react";

const HomeNewsArticle = ({
  title,
  description,
  classStyle,
}: {
  title: string;
  description: string;
  classStyle: string;
}) => {
  return (
    <section className={`${classStyle}`}>
      <h4 className="text-[var(--purple-500)] text-sm pb-2">{title}</h4>
      <div className="text-[var(--black-600)] text-xs">{description}</div>
    </section>
  );
};

export default HomeNewsArticle;
