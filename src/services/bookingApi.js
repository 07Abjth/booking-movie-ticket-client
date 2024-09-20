import axios from 'axios';

// Get All Bookings
export const getAllBookings = async () => {
  try {
    const response = await axios({
      url: "http://localhost:4000/api/v1/bookings",
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching bookings' };
    }
  }
};

// Create a Booking
export const createBooking = async (data) => {
  try {
    const response = await axios({
      url: "http://localhost:4000/api/v1/bookings",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while creating the booking' };
    }
  }
};

// Get Booking Details
export const getBookingDetails = async (bookingId) => {
  try {
    const response = await axios({
      url: `http://localhost:4000/api/v1/bookings/${bookingId}`,
      method: "GET",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while fetching booking details' };
    }
  }
};

// Cancel a Booking
export const cancelBooking = async (bookingId) => {
  try {
    const response = await axios({
      url: `http://localhost:4000/api/v1/bookings/${bookingId}/cancel`,
      method: "POST",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while canceling the booking' };
    }
  }
};
