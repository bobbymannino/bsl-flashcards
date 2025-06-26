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

/**
 * Generates a random date
 *
 * @returns A random date from 1st January 1970 to 10 years from today
 *
 * @example
 * ```typescript
 * generateRandomMonth(); // Returns "1st January 1970"
 * generateRandomMonth(); // Returns "22nd December 1979"
 * generateRandomMonth(); // Returns "30th March 2030"
 * ```
 */
export const generateRandomDate = () => {
  // random date between 1st jan 1979 - (current date + 10 years)
  const lower = new Date(1979, 0, 1);
  const upper = new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000);
  const date = new Date(
    Math.floor(Math.random() * (upper.getTime() - lower.getTime()) + lower.getTime()),
  );

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
};

/**
 * Gets the ordinal suffix for a given day number.
 *
 * @param day - The day number (1-31)
 * @returns The appropriate ordinal suffix ("st", "nd", "rd", or "th")
 *
 * @example
 * ```typescript
 * getOrdinalSuffix(1);  // Returns "st"
 * getOrdinalSuffix(2);  // Returns "nd"
 * getOrdinalSuffix(3);  // Returns "rd"
 * getOrdinalSuffix(4);  // Returns "th"
 * getOrdinalSuffix(11); // Returns "th"
 * getOrdinalSuffix(21); // Returns "st"
 * ```
 */
function getOrdinalSuffix(day: number) {
  // Special case for 11th, 12th, 13th which all use "th"
  if (day >= 11 && day <= 13) return "th";

  // For all other numbers, check the last digit
  switch (day % 10) {
    case 1:
      return "st"; // 1st, 21st, 31st
    case 2:
      return "nd"; // 2nd, 22nd
    case 3:
      return "rd"; // 3rd, 23rd
    default:
      return "th"; // 4th, 5th, 6th, 7th, 8th, 9th, 10th, etc.
  }
}
