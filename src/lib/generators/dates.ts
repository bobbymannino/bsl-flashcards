import { getRandomElement } from "$lib/utils";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = [
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

/**
 * Generates a random day of the week.
 *
 * @returns A randomly selected day of the week from Monday to Sunday.
 *
 * @example
 * ```typescript
 * generateRandomDayOfWeek(); // Returns "Wednesday"
 * generateRandomDayOfWeek(); // Returns "Friday"
 * generateRandomDayOfWeek(); // Returns "Monday"
 * ```
 */
export const generateRandomDayOfWeek = () => getRandomElement(daysOfWeek);

/**
 * Generates a random month of the year.
 *
 * @returns A randomly selected month from January to December.
 *
 * @example
 * ```typescript
 * generateRandomMonth(); // Returns "March"
 * generateRandomMonth(); // Returns "November"
 * generateRandomMonth(); // Returns "January"
 * ```
 */
export const generateRandomMonth = () => getRandomElement(months);
