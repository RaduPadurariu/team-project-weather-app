import { WeatherContextType } from "@/types/types";
import { createContext } from "react";

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);
