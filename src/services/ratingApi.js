import axios from "axios";



// Get Ratings for a Movie
export const getRatings = async (movieId) => {
  try {
    const response = await axios({
      url: `http://localhost:4000/api/v1/ratings/${movieId}`,
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
    const response = await axios({
      url: "http://localhost:4000/api/v1/ratings",
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