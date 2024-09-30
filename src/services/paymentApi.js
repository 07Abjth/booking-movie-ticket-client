import axios from "axios";



// Initiate Payment
export const initiatePayment = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/payment/initiate",
      {amount:data}
     );
    return response?.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: 'An error occurred while initiating the payment' };
    }
  }
};


// Create Order
export const createPaymentOrder = async (amount) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/payment/create-order', 
      {amount:amount}
    )
    //   {
    //   {amount:data}

    //   amount: amount * 100, // Convert to paise
    // });
    return response.data; // Assuming the response structure is { orderId, currency, amount }
  } catch (error) {
    throw error.response ? error.response.data : new Error('An error occurred while creating the order');
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
