export function sanitizeQueryParams(params = {}) {
  const { country, pageSize, page, search } = params;

  const safeCountry =
    typeof country === "string" && country.trim().length === 2
      ? country.trim().toLowerCase()
      : "us";

  const parsedSize = Number(pageSize);
  const safePageSize =
    Number.isInteger(parsedSize) && parsedSize > 0
      ? Math.min(parsedSize, 10)
      : 6;

  const parsedPage = Number(page);
  const safePage =
    Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const safeSearch =
    typeof search === "string" ? search.trim().replace(/[<>]/g, "") : "";

  return {
    country: safeCountry,
    pageSize: safePageSize,
    page: safePage,
    ...(safeSearch && { q: safeSearch }),
  };
}
