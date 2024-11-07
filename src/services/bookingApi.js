import { axiosInstance } from "../config/axiosInstance";

// Create a New Booking
export const createBooking = async (data) => {
  try {
    const response = await axiosInstance.post('/booking/create', data, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while creating the booking' };
  }
};

// Get Booking Details by ID
export const getBookingDetails = async (bookingId) => {
  try {
    const response = await axiosInstance.get(`/booking/details/${bookingId}`, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'Failed to fetch booking details' };
  }
};

// Get All Bookings (For Admin)
export const getAllBookings = async () => {
  try {
    const response = await axiosInstance.get('/booking/get-allBookings', {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'Failed to fetch all bookings' };
  }
};

// Cancel Booking
export const cancelBooking = async (bookingId) => {
  try {
    const response = await axiosInstance.delete(`/booking/cancel/${bookingId}`, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while canceling the booking' };
  }
};

// Update Booking Status (Admin can change booking status)
export const updateBookingStatus = async (bookingId, status) => {
  try {
    const response = await axiosInstance.patch(`/booking/updateStatus/${bookingId}`, { status }, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'An error occurred while updating the booking status' };
  }
};
