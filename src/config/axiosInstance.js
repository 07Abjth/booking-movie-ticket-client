import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";

// Log BASE_URL only in development
if (import.meta.env.DEV) {
  console.log("🟡 BASE_URL:", BASE_URL);
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});