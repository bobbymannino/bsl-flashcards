import { getRandomElement } from "$lib/utils";

const names = [
  "Lucy",
  "Bob",
  "Will",
  "William",
  "Tom",
  "John",
  "Johnathan",
  "Ben",
  "Bill",
  "Billy",
  "Josh",
  "AJ",
  "Owen",
  "Jacob",
  "Kevin",
  "Roberto",
  "Mike",
  "Michael",
  "Michelle",
  "Tim",
  "Willow",
  "Marie",
  "Barbra",
  "Jessica",
  "Isabelle",
  "Jeff",
  "Lois",
];

/**
 * Generates a random first name from a predefined list of common names.
 *
 * @returns A randomly selected name from the names array
 *
 * @example
 * ```ts
 * const randomName = generateRandomName();
 * console.log(randomName); // "Lucy", "Bob", "Will", etc.
 * ```
 */
export const generateRandomName = () => getRandomElement(names);
