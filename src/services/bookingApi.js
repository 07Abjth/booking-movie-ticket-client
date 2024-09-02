import { axiosInstance } from '../config/axiosInstance';

// Get All Bookings
export const getAllBookings = async () => {
  try {
    const response = await axiosInstance({
      url: "/bookings",
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
    const response = await axiosInstance({
      url: "/bookings",
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
    const response = await axiosInstance({
      url: `/bookings/${bookingId}`,
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
    const response = await axiosInstance({
      url: `/bookings/${bookingId}/cancel`,
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
