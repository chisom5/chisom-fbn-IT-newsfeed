import axios from "axios";

const baseURL = import.meta.env.PROD ? "/api" : "https://newsapi.org/v2";

const axiosInstance = axios.create({
  baseURL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use((config) => {
  if (!import.meta.env.PROD) {
    config.params = {
      ...config.params,
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    };
  }
  return config;
});

export default axiosInstance;