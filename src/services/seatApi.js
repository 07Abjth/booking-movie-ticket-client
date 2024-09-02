import { axiosInstance } from '../config/axiosInstance';

// Get All Seats for a Show
export const getSeats = async (showId) => {
  try {
    const response = await axiosInstance({
      url: `/seats/${showId}`,
      method: "GET",
      withCredentials: true,
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

// Create Seats
export const createSeats = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/seats",
      method: "POST",
      data,
      withCredentials: true,
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

// Reserve a Seat
export const reserveSeat = async (seatId, data) => {
  try {
    const response = await axiosInstance({
      url: `/seats/${seatId}/reserve`,
      method: "PATCH",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while reserving the seat' };
    }
  }
};
