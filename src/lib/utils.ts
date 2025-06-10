import { generateRandomInt } from "$lib/generators/numbers";

/**
 * Returns a random element from the provided array.
 *
 * @template T - The type of elements in the array
 * @param array - The array to select a random element from
 * @returns A random element from the array, or undefined if the array is empty
 *
 * @example
 * ```typescript
 * const colors = ['red', 'blue', 'green'];
 * getRandomElement(colors); // Returns 'red', 'blue', or 'green'
 *
 * const numbers = [1, 2, 3, 4, 5];
 * getRandomElement(numbers); // Returns a random number from the array
 *
 * getRandomElement([]); // Returns undefined
 * ```
 */
export const getRandomElement = <T>(array: T[]): T | undefined => {
  if (array.length == 0) return undefined;

  const randomIndex = generateRandomInt(0, array.length - 1);
  return array[randomIndex];
};
