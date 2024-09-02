import { axiosInstance } from '../config/axiosInstance';

// Get All Movies
export const getAllMovies = async () => {
  try {
    const response = await axiosInstance({
      url: "/movies",
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching movies' };
    }
  }
};

// Get Movie Details
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance({
      url: `/movies/${movieId}`,
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching movie details' };
    }
  }
};

// Add a New Movie
export const addMovie = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/movies",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while adding the movie' };
    }
  }
};
