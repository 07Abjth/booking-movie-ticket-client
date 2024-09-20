import axios from "axios";



// Initiate Payment
export const initiatePayment = async (data) => {
  try {
    const response = await axios({
      url: "http://localhost:4000/api/v1/payments/initiate",
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
    const response = await axios({
      url: `http://localhost:4000/api/v1/payments/verify/${paymentId}`,
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
