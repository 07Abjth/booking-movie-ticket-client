import { axiosInstance } from '../config/axiosInstance';

// Get All Theaters
export const getAllTheaters = async () => {
  try {
    const response = await axiosInstance({
      url: "/theaters",
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching theaters' };
    }
  }
};

// Create a New Theater
export const createTheater = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/theaters",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while creating the theater' };
    }
  }
};

// Delete a Theater
export const deleteTheater = async (theaterId) => {
  try {
    const response = await axiosInstance({
      url: `/theaters/${theaterId}`,
      method: "DELETE",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while deleting the theater' };
    }
  }
};
