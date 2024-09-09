import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/v1/theater-owner";

// Theater owner signup function
export const theaterOwnerSignUp = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during signup' };
  }
};

// Theater owner login function
export const theaterOwnerLogin = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during login' };
  }
};

// Theater owner logout function
export const theaterOwnerLogout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`, {}, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during logout' };
  }
};

// Fetch theater owner profile function
export const fetchTheaterOwnerProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred while fetching profile' };
  }
};
