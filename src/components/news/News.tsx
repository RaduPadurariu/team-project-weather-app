import React from "react";
import MainNews from "./MainNews/MainNews";
import BreakingNews from "./BreakingNews/BreakingNews";
import Features from "./Features/Features";
import HomeWeatherHeading from "../home/HomeNews/HomeWeatherHeading";

const News = () => {
  return (
    <div className="pt-[100px]">
      <HomeWeatherHeading />
      <MainNews />
      <BreakingNews />
      <Features />
    </div>
  );
};

export default News;
