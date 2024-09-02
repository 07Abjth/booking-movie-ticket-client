import { axiosInstance } from '../config/axiosInstance';

// Initiate Payment
export const initiatePayment = async (data) => {
  try {
    const response = await axiosInstance({
      url: "/payments/initiate",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while initiating the payment' };
    }
  }
};

// Verify Payment
export const verifyPayment = async (paymentId) => {
  try {
    const response = await axiosInstance({
      url: `/payments/verify/${paymentId}`,
      method: "POST",
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while verifying the payment' };
    }
  }
};
