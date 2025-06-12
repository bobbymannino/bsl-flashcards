import { getRandomElement } from "$lib/utils";

const greetings = [
  "Hello",
  "Hi",
  "Welcome",
  "Nice to see you again",
  "Good morning",
  "Good afternoon",
  "Good evening",
  "Good night",
];
const farewells = ["Bye", "Goodbye", "See you later", "See you tomorrow", "See you soon"];
const manners = ["Please", "Thank you", "Sorry to interrupt you", "Excuse me"];

/**
 * Generates a random greeting from a predefined list of common greetings.
 *
 * @returns A randomly selected greeting from the greetings array
 *
 * @example
 * ```ts
 * const randomGreeting = generateRandomGreeting();
 * console.log(randomGreeting); // "Hello", "Hi", "Welcome", etc.
 * ```
 */
export const generateRandomGreeting = () => getRandomElement(greetings);

/**
 * Generates a random farewell from a predefined list of common farewells.
 *
 * @returns A randomly selected farewell from the farewells array
 *
 * @example
 * ```ts
 * const randomFarewell = generateRandomFarewell();
 * console.log(randomFarewell); // "Bye", "Goodbye", "See you later", etc.
 * ```
 */
export const generateRandomFarewell = () => getRandomElement(farewells);

/**
 * Generates a random polite manner from a predefined list of courteous expressions.
 *
 * @returns A randomly selected manner from the manners array
 *
 * @example
 * ```ts
 * const randomManner = generateRandomManner();
 * console.log(randomManner); // "Please", "Thankyou", "Sorry to interrupt you", etc.
 * ```
 */
export const generateRandomManner = () => getRandomElement(manners);
