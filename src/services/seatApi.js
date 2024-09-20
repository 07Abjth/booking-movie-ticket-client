import axios from 'axios';

// Get All Available Seats for a Show
export const getSeats = async (showId) => {
  try {
    const response = await axios({
      url: `http://localhost:4000/api/v1/seats/show/${showId}`,
      method: 'GET',
      withCredentials: true, // if you're using credentials for auth
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching seats' };
    }
  }
};

// Create Seats in Bulk
export const createSeats = async (data) => {
  try {
    const response = await axios({
      url: 'http://localhost:4000/api/v1/seats/create',
      method: 'POST',
      data,
      withCredentials: true, // for auth, if necessary
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while creating seats' };
    }
  }
};

// Reserve Seats
export const reserveSeats = async (seats) => {
  try {
    const response = await axios({
      url: 'http://localhost:4000/api/v1/seats/reserve',
      method: 'POST',
      data: { seats },
      withCredentials: true, // for auth
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while reserving the seats' };
    }
  }
};

// Delete Seats
export const deleteSeats = async (seatIds) => {
  try {
    const response = await axios({
      url: 'http://localhost:4000/api/v1/seats/delete',
      method: 'DELETE',
      data: { seatIds }, // Send the seat IDs in the request body
      withCredentials: true, // for auth
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while deleting the seats' };
    }
  }
};
