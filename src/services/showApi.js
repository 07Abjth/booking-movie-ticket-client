import { axiosInstance } from '../config/axiosInstance';

// Get All Shows
export const getAllShows = async () => {
  try {
    const response = await axiosInstance({
      url: "/shows",
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching shows' };
    }
  }
};

// Create a New Show
export const createShow = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/shows",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while creating the show' };
    }
  }
};

// Delete a Show
export const deleteShow = async (showId) => {
  try {
    const response = await axiosInstance({
      url: `/shows/${showId}`,
      method: "DELETE",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while deleting the show' };
    }
  }
};
