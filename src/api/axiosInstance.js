import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 15000,
  params: {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
  },
})

export default axiosInstance
