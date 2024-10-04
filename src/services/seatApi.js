import axios from 'axios';

// Get all available seats for a specific theater
export const getSeatsForTheater = async (theaterId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/seat/get-seats-by-theater-id/${theaterId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching seats:', error);
    return { error: error.response ? error.response.data : 'Error fetching seats' };
  }
};







 

export const getSeatPricesForShow = async (showId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/seat/seats/prices/${showId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching seat prices:", error);
    return { error: "Failed to fetch seat prices" }; // Modify this message to match the frontend.
  }
};





export const fetchSeatPrice = async (showSeatId) => {
  try {
    const response = await axios.get(`/api/v1/seat/seats/price/${showSeatId}`);
    console.log('Seat price:', response.data);
  } catch (error) {
    console.error('Error fetching seat price:', error);
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






// Get price of a specific seat
export const getSeatPrices = async (seatId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/v1/seat/price/${seatId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching seat price:', error);
    return { error: error.response ? error.response.data : 'Error fetching seat price' };
  }
};


