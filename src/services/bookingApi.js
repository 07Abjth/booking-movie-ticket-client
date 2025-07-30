// bookingApi.js (API calls for booking)
import { axiosInstance } from "../config/axiosInstance";



export const createBooking = async (bookingData) => {
  try {
    console.log("Sending booking data:", bookingData); // Log data being sent to backend
    const response = await axiosInstance.post('/booking/create-booking', bookingData, { withCredentials: true });
    console.log("Booking response from server:", response.data); // Log response from server
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// Get Booking Details by ID
export const getBookingDetails = async (bookingId) => {
  try {
    const response = await axiosInstance.get(`/booking/details/${bookingId}`, { withCredentials: true });
    return response?.data;
  } catch (error) {
    return { error: error.response?.data || 'Failed to fetch booking details' };
  }
};

export const getUserBookings = async () => {
  try {
    const response = await axiosInstance.get('/booking/user-bookings', { withCredentials: true });
    // return response.data?.bookings || []; // Only return the bookings array, or empty array if undefined
    return response.data;
  } catch (error) {
    console.error("Error in getUserBookings API:", error);
    throw error.response?.data || { message: "Failed to fetch bookings" };
  }
};
