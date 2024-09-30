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



// // Fetch seat prices based on theaterId and showtimeId
// export const getSeatPricesForShowtime = async (theaterId, showId) => {
//   try {
//     // Make the GET request to the API endpoint
//     const response = await axios.get(`http://localhost:4000/api/v1/seat/get-seat-prices/${showId}`, {
//       withCredentials: true, // Ensure CORS settings are correct on the backend for this to work
//     });

//     // Return the response data (seat prices)
//     return response.data; // Ensure this returns the expected format
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error fetching seat prices:', error);

//     // Return an error object, either from Axios or a custom message
//     return {
//       error: error.response ? error.response.data : 'Error fetching seat prices',
//     };
//   }
// };

export const getSeatPricesByTheater = async (theaterId) => {
  try {
      const response = await axios.get(`/api/v1/seat/get-seat-prices/${theaterId}`);
      return response.data; 
  } catch (error) {
      console.error("Error fetching seat prices:", error);
      throw error;
  }
};