import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${(import.meta.env.VITE_API_URL).replace(/\/+$/, '')}/api/v1`,
  withCredentials: true,
});


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API request error:', error);
    return Promise.reject(error);
  }
);
