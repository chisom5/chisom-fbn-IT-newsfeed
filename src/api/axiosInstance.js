import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
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