import { axiosInstance } from '../config/axiosInstance';

// Admin Login
export const adminLogin = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/admin/login",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred during login' };
    }
  }
};

// Admin Logout
export const adminLogout = async () => {
  try {
    const response = await axiosInstance({
      url: "/admin/logout",
      method: "POST",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred during logout' };
    }
  }
};

// Check Admin Authentication
export const adminCheck = async () => {
  try {
    const response = await axiosInstance({
      url: "/admin/check-admin/",
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    return { error: 'An error occurred while checking admin status' };
  }
};
