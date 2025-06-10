/**
 * Generates a random integer within the specified range (inclusive).
 *
 * @param min - The minimum value (inclusive). @default 0
 * @param max - The maximum value (inclusive). @default 100
 * @returns A random integer between min and max (both inclusive).
 *
 * @example
 * ```typescript
 * generateRandomInt(); // Returns a number between 0 and 100
 * generateRandomInt(1, 10); // Returns a number between 1 and 10
 * generateRandomInt(50, 60); // Returns a number between 50 and 60
 * ```
 */
export const generateRandomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
