// import { axiosInstance } from "../config/axiosInstance";

// // Get All Movies
// export const getAllMovies = async () => {
//   try {
//     const response = await axiosInstance({
//       url: `/movie/moviesList`,
//       method: "GET",
//       withCredentials: true,
//     });
//     return response?.data;
//   } catch (error) {
//     if (error.response) {
//       return { error: error.response.data };
//     } else {
//       return { error: 'An error occurred while fetching movies' };
//     }
//   }
// };

// //Get movie details
// export const getMovieDetails = async (movieId) => {
//   try {
//     if (!movieId) throw new Error('Movie ID is required');

//     const response = await axiosInstance.get(`movie/${movieId}`, {
      
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     return { error: error.response?.data || 'An error occurred while fetching movie details' };
//   }
// };

// // Add a New Movie
// export const addMovie = async (data) => {
//   try {
//     const response = await axios({
//       url: `${API_BASE_URL}/movies`,
//       method: "POST",
//       data,
//       withCredentials: true,
//     });
//     return response?.data;
//   } catch (error) {
//     if (error.response) {
//       return { error: error.response.data };
//     } else {
//       return { error: 'An error occurred while adding the movie' };
//     }
//   }
// };

// // // Fetch Theaters and ShowTimes for a Specific Movie
 


import { axiosInstance } from "../config/axiosInstance";

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

// Get Movie Details
export const getMovieDetails = async (movieId) => {
  try {
    if (!movieId) throw new Error('Movie ID is required');
    const response = await axiosInstance.get(`/movie/${movieId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while fetching movie details' };
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
