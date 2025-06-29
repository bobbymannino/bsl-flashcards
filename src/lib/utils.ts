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

/**
 * Generates a random number of elements from the given array. If the array
 * length if 0 then an empty array will be returned. If the count is 0 or less
 * an empty array will be returned. The same element may be returned multiple
 * times.
 *
 * @param array - The array to select elements from
 * @param count - The number of elements to generate
 * @returns An array of randomly selected elements
 *
 * @example
 * ```typescript
 * const colors = ['red', 'blue', 'green'];
 * getRandomElements(colors, 2); // Returns ['red', 'blue']
 *
 * getRandomElements([], 3); // Returns []
 * ```
 */
export const getRandomElements = <T>(array: T[], count: number): T[] => {
  if (array.length == 0 || count < 1) return [];

  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = generateRandomInt(0, array.length - 1);
    result.push(array[randomIndex]);
  }
  return result;
};
