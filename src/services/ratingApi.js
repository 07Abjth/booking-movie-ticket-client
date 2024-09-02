import { axiosInstance } from '../config/axiosInstance';

// Get Ratings for a Movie
export const getRatings = async (movieId) => {
  try {
    const response = await axiosInstance({
      url: `/ratings/${movieId}`,
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching ratings' };
    }
  }
};

// Submit a Rating
export const submitRating = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/ratings",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while submitting the rating' };
    }
  }
};
