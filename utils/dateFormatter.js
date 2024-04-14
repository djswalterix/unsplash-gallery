/**
 * Converts  a ISO 8601 in un readable.
 */
export function formatReadableDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString("en-gb", { dateStyle: "full" });
}
