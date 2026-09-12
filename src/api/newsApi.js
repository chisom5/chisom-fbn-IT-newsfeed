import axiosInstance from "./axiosInstance";
import {sanitizeQueryParams} from '../utils/sanitizeParams';

export const getTopHeadlines = async (country, pageSize, page) => {
  const cleanParams = sanitizeQueryParams({ country, pageSize, page });

  try {
    const response = await axiosInstance.get("/top-headlines", {
      params: cleanParams,
    });

    const articles = response?.data?.articles || [];
    const totalResults = response?.data?.totalResults ?? articles.length;

    return {
      articles,
      totalResults,
      totalPages: Math.max(1, Math.ceil(totalResults / cleanParams.pageSize)),
    };
  } catch (error) {
    const apiErrorMessage =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred while fetching news headlines.";

    throw new Error(apiErrorMessage);
  }
};

