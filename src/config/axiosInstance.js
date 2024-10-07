import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || 'https://cineticketsbook-server.vercel.app'}/api/v1`,
  withCredentials: true, // Include credentials if needed for cookies, sessions
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API request error:', error);
    return Promise.reject(error);
  }
);
