import slugify from "slugify";

export const capitalize = (label) =>
  label.charAt(0).toUpperCase() + label.slice(1);

export const titleSlugify = (title) => slugify(title, { lower: true });

// My own tiny clsx
export function clsx(...args) {
  return args
    .flatMap((arg) => {
      if (typeof arg === "string") {
        return arg; // If it's a string, return it as is
      } else if (Array.isArray(arg)) {
        return clsx(...arg); // Recursively flatten arrays
      } else if (typeof arg === "object" && arg !== null) {
        return Object.keys(arg).filter((key) => arg[key]); // Return keys where the value is truthy
      }
      return ""; // Skip falsy or invalid values
    })
    .filter(Boolean) // Remove any empty strings or falsy values
    .join(" "); // Join the valid class names with a space
}
