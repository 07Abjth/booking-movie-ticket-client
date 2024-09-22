import axios from 'axios';

// Get all available seats for a specific show
export const getSeatsForShow = async (showId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/seat/show/${showId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching seats:', error);
    return { error: error.response ? error.response.data : 'Error fetching seats' };
  }
};

// Create seats in bulk for a show
export const createSeats = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/v1/seat/create`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating seats:', error);
    return { error: error.response ? error.response.data : 'Error creating seats' };
  }
};

// Delete seats in bulk
export const deleteSeats = async (seatIds) => {
  try {
    const response = await axios.delete(`http://localhost:4000/api/v1/seats/delete`, {
      data: { seatIds },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting seats:', error);
    return { error: error.response ? error.response.data : 'Error deleting seats' };
  }
};

// Get all available seats for a specific theater
export const getSeatsForTheater = async (theaterId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/seat/theater/${theaterId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching seats:', error);
    return { error: error.response ? error.response.data : 'Error fetching seats' };
  }
};

// Fetch Seat Layout for a specific theater
export const getSeatLayout = async (theaterId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/seat/layout/theater/${theaterId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching seat layout:', error);
    return { error: error.response ? error.response.data : 'Error fetching seat layout' };
  }
};

// Fetch Seat Layout for a specific theater and show
export const fetchSeatLayout = async (theaterId, showId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/theater/${theaterId}/seats`, {
      params: { showId }, // Send showId as a query parameter
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching seat layout:', error);
    return { error: error.response ? error.response.data : 'Error fetching seat layout' };
  }
};

// Reserve seats for booking
export const reserveSeats = async (seats) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/v1/seats/reserve`, { seats }, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error reserving seats:', error);
    return { error: error.response ? error.response.data : 'Error reserving seats' };
  }
};
