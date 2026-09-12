import axios from "axios";

const baseURL = import.meta.env.PROD
  ? "https://thingproxy.freeboard.io/fetch/https://newsapi.org/v2"
  : "/api";

const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
  };
  return config;
});

export default axiosInstance;