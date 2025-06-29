import { getRandomElement } from "$lib/utils";

/**
 * Generates a random time of day
 *
 * @returns A randomly selected time of day in the format "HH:MM"
 *
 * @example
 * ```ts
 * const randomTime = generateRandomTime();
 * console.log(randomTime); // "12:30", "09:15", "03:45", etc.
 * ```
 */
export const generateRandomTime = () => {
  const hours = getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const minutes = getRandomElement([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
  return `${hours!.toString().padStart(2, "0")}:${minutes!.toString().padStart(2, "0")}`;
};
