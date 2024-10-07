 import axios from 'axios';

// const BASE_URL = "http://localhost:4000/api/v1/user";
const apiUrl = import.meta.env.VITE_API_URL || 'cineticketsbook-server.vercel.app/api/v1';



// User signup function
export const userSignUp = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during signup' };
  }
};

// User login function
export const userLogin = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/user/login`, data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during login' };
  }
};

// User logout function
export const userLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`, {}, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during logout' };
  }
};

// fetching user profile
export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      withCredentials: true,
    });
    // Adjust according to the actual response structure
    return response?.data.user || response?.data; 
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred while fetching profile' };
  }
};

// import { axiosInstance } from '../config/axiosInstance';

// // User signup function
// export const userSignUp = async (data) => {
//   try {
//     const response = await axiosInstance.post('/register', data);
//     return response?.data.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred during signup' };
//   }
// };

// // User login function
// export const userLogin = async (data) => {
//   try {
//     const response = await axiosInstance.post('/login', data);
//     return response?.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred during login' };
//   }
// };

// // User logout function
// export const userLogout = async () => {
//   try {
//     const response = await axiosInstance.post('/logout');
//     return response?.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred during logout' };
//   }
// };

// // Fetch user profile
// export const fetchUserProfile = async () => {
//   try {
//     const response = await axiosInstance.get('/profile');
//     return response?.data.user || response?.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred while fetching profile' };
//   }
// };
