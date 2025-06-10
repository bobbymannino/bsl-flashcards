import { getRandomElement } from "$lib/utils";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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
