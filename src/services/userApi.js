import { axiosInstance } from '../config/axiosInstance';

// User signup function
export const userSignUp = async (data) => {
  try {
const response = await axiosInstance.post('/user/register', data);
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred during signup' };
  }
};

// User login function
export const userLogin = async (data) => {
  try {
    const response = await axiosInstance.post('/user/login', data, { withCredentials: true });
    
    if (response?.data?.success && response?.data?.token) {
      // Store both userId and token in localStorage
      localStorage.setItem('token', response.data.token);
      if (response?.data?.user) {
        localStorage.setItem('userId', response?.data?.user?._id);
      }
    }
    
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred during login' };
  }
};

// User logout function
export const userLogout = async () => {
  try {
    const response = await axiosInstance.post('/user/logout', {}, { withCredentials: true });
    // Remove userId from localStorage on logout
    localStorage.removeItem('userId');
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

// Fetching user profile by ID (if required)
export const fetchUserById = async (userId) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`, { withCredentials: true });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching user by ID' };
  }
};
