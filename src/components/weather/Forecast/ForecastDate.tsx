"use client";

import { useCurrentDate } from "@/hooks/useCurrentDate";
import React from "react";

const ForecastDate = () => {
  const { weekday, day, month, year } = useCurrentDate();
  const formattedDate = `${weekday} ${day}, ${month} ${year}`;

  return <div>{formattedDate}</div>;
};

export default ForecastDate;
