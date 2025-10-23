import React from "react";
import BreakingNews from "../news/BreakingNews/BreakingNews";
import Forecast from "./Forecast/Forecast";

const Weather = () => {
  return (
    <div className="pt-[100px]">
      <Forecast />
      <BreakingNews />
    </div>
  );
};

export default Weather;
