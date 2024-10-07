import { axiosInstance } from '../config/axiosInstance';

// User signup function
export const userSignUp = async (data) => {
  try {
    const response = await axiosInstance.post('/user/register', data);
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during signup' };
  }
};

// User login function
export const userLogin = async (data) => {
  try {
    const response = await axiosInstance.post('/user/login', data);
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during login' };
  }
};

// User logout function
export const userLogout = async () => {
  try {
    const response = await axiosInstance.post('/user/logout');
    return response?.data;
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred during logout' };
  }
};

// Fetching user profile
export const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/user/profile');
    return response?.data.user || response?.data; 
  } catch (error) {
    return { error: error.response ? error.response.data : 'An error occurred while fetching profile' };
  }
};
