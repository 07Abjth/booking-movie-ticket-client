// import axios from 'axios';
// // import { axiosInstance } from '../config/axiosInstance';


// export const userSignUp = async (data) => {
//   try {
//     const response = await axios({
//       url: "http://localhost:4000/api/v1/user/register",
//       method: "POST",
//       data,
//       withCredentials: true,
//     });
//     return response?.data;
//   } catch (error) {
//     // Handle error response to bubble it up
//     if (error.response) {
//       // Return specific error response from the server
//       return { error: error.response.data };
//     } else {
//       // General error message
//       return { error: 'An error occurred during login' };
//     }
//   }
// }



// export const userLogin = async (data) => {
//   try {
//     const response = await axios({
//       url: "http://localhost:4000/api/v1/user/login",
//       method: "POST",
//       data,
//       withCredentials: true,
//     });
//     return response?.data;
//   } catch (error) {
//     // Handle error response to bubble it up
//     if (error.response) {
//       // Return specific error response from the server
//       return { error: error.response.data };
//     } else {
//       // General error message
//       return { error: 'An error occurred during login' };
//     }
//   }
// };


// export const userLogout = async () => {
//   try {
//     const response = await axios({
//       url: "http://localhost:4000/api/v1/user/logout",
//       method: "POST",
//       withCredentials: true,
//     });
//     return response?.data;
//   } catch (error) {
//     // Handle error response to bubble it up
//     if (error.response) {
//       // Return specific error response from the server
//       return { error: error.response.data };
//     } else {
//       // General error message
//       return { error: 'An error occurred during logout' };
//     }
//   }
// };
 

import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/v1/user";

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
    const response = await axios.post(`${BASE_URL}/login`, data, {
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

// Fetch user profile function
export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred while fetching profile' };
  }
};
