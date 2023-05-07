import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(() => resolve('done'), time));
};
