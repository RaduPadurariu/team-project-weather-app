import { useState, useEffect } from "react";

interface CurrentDateParts {
  year: number;
  month: string;
  day: number;
  weekday: string;
  hour: string;
  minute: string;
}

export function useCurrentDate(): CurrentDateParts {
  const [dateParts, setDateParts] = useState<CurrentDateParts>({
    year: 0,
    month: "",
    day: 0,
    weekday: "",
    hour: "",
    minute: "",
  });

  useEffect(() => {
    const now = new Date();
    const weekdayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const year = now.getFullYear();
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const weekday = weekdayNames[now.getDay()];
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");

    setDateParts({ year, month, day, weekday, hour, minute });
  }, []);

  return dateParts;
}
