import axios from 'axios';

console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);  

const baseURL = import.meta.env.VITE_API_URL ;  
export const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1`,
  withCredentials: true,
});

