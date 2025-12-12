"use client";

import { useCurrentDate } from "@/hooks/useCurrentDate";

const ForecastDate = () => {
  const { weekday, day, month, year } = useCurrentDate();
  const formattedDate = `${weekday} ${day}, ${month} ${year}`;

  return <div>{formattedDate}</div>;
};

export default ForecastDate;
