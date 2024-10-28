 


import { axiosInstance } from "../config/axiosInstance.js";

// Get All Movies
export const getAllMovies = async () => {
  try {
    const response = await axiosInstance({
      url: `/movie/moviesList`,
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching movies' };
  }
};
 

// Detailed movie info by ID
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/details`, { withCredentials: true });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'Failed to fetch movie details' };
  }
};


// Add a New Movie
export const addMovie = async (data) => {
  try {
    const response = await axiosInstance.post(`/movies`, data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while adding the movie' };
  }
};
