import { browser } from "$app/environment";

/**
 * Creates a reactive state that persists to localStorage and automatically syncs changes.
 *
 * @template T - The type of the stored value
 * @param {string} key - The localStorage key to store the value under
 * @param {T} defaultValue - The default value to use if no stored value exists or parsing fails
 * @returns {Object} An object with getter and setter for the reactive value
 * @returns {T} returns.value - The current value (getter/setter)
 *
 * @example
 * ```ts
 * const userPrefs = persistentState('userPreferences', { theme: 'dark' });
 * userPrefs.value = { theme: 'light' }; // Automatically saves to localStorage
 * ```
 *
 * @description
 * This function creates a Svelte 5 rune-based reactive state that:
 * - Loads initial value from localStorage on creation (browser only)
 * - Automatically saves changes to localStorage using $effect
 * - Falls back to defaultValue if localStorage is unavailable or contains invalid JSON
 * - Works safely in SSR environments by checking browser availability
 */
export function persistentState<T>(key: string, defaultValue: T) {
  let storedValue = defaultValue;

  if (browser) {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        storedValue = JSON.parse(item);
      } catch {
        storedValue = defaultValue;
      }
    }
  }

  let value = $state(storedValue);

  $effect(() => {
    if (browser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  });

  return {
    get value() {
      return value;
    },
    set value(newValue: T) {
      value = newValue;
    },
  };
}
