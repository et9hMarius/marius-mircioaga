// "2024-01-01" -> "1 January 2024". Dates in src/seo.js are calendar dates,
// so they are formatted in UTC to avoid drifting a day in other time zones.
export function formatDate(isoDate) {
  return new Date(isoDate + "T00:00:00Z").toLocaleDateString("en-GB", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
