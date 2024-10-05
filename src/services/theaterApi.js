import axios from 'axios';


 

// Get All Theaters
export const getTheaters = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/v1/theater/get-theaters", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching theaters' };
  }
};
 

 

// Create a New Theater
export const createTheater = async (data) => {
  try {
    const response = await axios.post("http://localhost:4000/api/v1/theater/create-theater", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while creating the theater' };
  }
};

// Delete a Theater
export const deleteTheater = async (theaterId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/api/v1/theater/${theaterId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while deleting the theater' };
  }
};

// Fetch theaters by movie
export const getTheatersByMovie = async (movieId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/theater/${movieId}/theaters`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching theaters for this movie' };
  }
};


 
// Function to add movies to a theater
export const addMoviesToTheater = async (theaterId, movieIds) => {
  try {
    const response = await axios.put(`http://localhost:4000/api/v1/theater/${theaterId}/movies`, { movieIds });
    return response.data;  // Returns the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to add movies to theater');
  }
}


// Fetch Theaters by an Array of Theater IDs
export const getTheatersByIds = async (theaterIds) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/v1/theater/theaters/:by-ids`, {
      theaterIds,  // Send the array of theater IDs in the request body
    }, {
      withCredentials: true,  // This ensures cookies are sent with the request if required
    });
    return response.data;  // Returns the theaters data
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching theaters' };
  }
};


// Fetch theater details by ID
export const getTheaterDetails = async (theaterId) => {

  try {
    if (!theaterId) throw new Error('theater ID is required');

    const response = await axios.get(`http://localhost:4000/api/v1/theater/details/${theaterId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching theater details' };
  }
};
