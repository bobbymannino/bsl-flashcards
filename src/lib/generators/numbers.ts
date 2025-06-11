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

/**
 * Generates a random GBP (British Pound) currency string.
 *
 * @param mode - The format mode for the generated currency string.
 *   - "pence": Returns only pence (e.g., "42p")
 *   - "pound": Returns only pounds (e.g., "£73")
 *   - "both": Returns pounds and pence (e.g., "£45 67p")
 * @default "both"
 * @returns A randomly generated GBP currency string in the specified format.
 *
 * @example
 * ```typescript
 * generateRandomGbp(); // Returns "£42.73"
 * generateRandomGbp("pence"); // Returns "85p"
 * generateRandomGbp("pound"); // Returns "£29"
 * generateRandomGbp("both"); // Returns "£15.92p"
 * ```
 */
export function generateRandomGbp(mode: "pence" | "pound" | "both" = "both") {
  switch (mode) {
    case "pence":
      return generateRandomInt() + "p";
    case "pound":
      return "£" + generateRandomInt();
    case "both":
      return `£${generateRandomInt()}.${generateRandomInt().toString().padStart(2, "0")}`;
  }
}
