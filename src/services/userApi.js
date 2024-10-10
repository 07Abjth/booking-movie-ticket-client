// import { axiosInstance } from '../config/axiosInstance';

// import axios from 'axios';



// const bakEndUrl = "https://cine-ticket-book-server.vercel.app/api/v1"


// // User signup function
// export const userSignUp = async (data) => {
//   try {
//     const response = await axiosInstance.post('/user/register', data);
//     return response?.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred during signup' };
//   }
// };

// // User login function
// export const userLogin = async (data) => {
//   try {
//     const response = await axios.post(`${bakEndUrl}/user/login`, data);
//     return response?.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred during login' };
//   }
// };

// // User logout function
// export const userLogout = async () => {
//   try {
//     const response = await axiosInstance.post('/user/logout');
//     return response?.data;
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred during logout' };
//   }
// };

// // Fetching user profile
// export const fetchUserProfile = async () => {
//   try {
//     const response = await axiosInstance.get('/user/profile');
//     return response?.data.user || response?.data; 
//   } catch (error) {
//     return { error: error.response ? error.response.data : 'An error occurred while fetching profile' };
//   }
// };



import { axiosInstance } from '../config/axiosInstance';

// User signup function
export const userSignUp = async (data) => {
  try {
    const response = await axiosInstance.post('/user/register', data, { withCredentials: true });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred during signup' };
  }
};

// User login function
export const userLogin = async (data) => {
  try {
    const response = await axiosInstance.post(`/user/login`, data, { withCredentials: true });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred during login' };
  }
};

// User logout function
export const userLogout = async () => {
  try {
    const response = await axiosInstance.post('/user/logout', {}, { withCredentials: true });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred during logout' };
  }
};

// Fetching user profile
export const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/user/profile', { withCredentials: true });
    return response?.data.user || response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching profile' };
  }
};
