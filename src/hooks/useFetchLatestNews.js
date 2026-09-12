import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTopHeadlines } from "../api/newsApi";

export function useFetchLatestNews({ country, pageSize, page } = {}) {
  return useQuery({
    queryKey: ["latest-news", { country, pageSize, page }],
    queryFn: () => getTopHeadlines(country, pageSize, page),
    placeholderData: keepPreviousData,
  });
}
