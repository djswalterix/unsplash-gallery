/**
 * Converte una data ISO 8601 in un formato leggibile.
 */
export function formatReadableDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString("en-gb", { dateStyle: "full" });
}
