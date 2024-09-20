import axios from 'axios';

// Base URL of your backend API
const API_BASE_URL = 'http://localhost:4000/api/v1';

// Create a New Show
export const createShow = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/show/create-show`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while creating the show' };
  }
};

// Delete Show
export const deleteShow = async (showId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/show/${showId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while deleting the show' };
  }
};

// Create Multiple Shows
export const createMultipleShows = async (movieId, theaterId, dates, times, price) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/show/create-multiple-shows`, {
      movieId,
      theaterId,
      dates,
      times,
      price,
    }, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating multiple shows:', error);
    throw error;
  }
};



// Fetch Shows by Movie ID
export const getShowsByMovieId = async (movieId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/show/movies/${movieId}`);
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching shows' };
  }
};

