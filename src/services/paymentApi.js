// import axios from "axios";

// // Initiate Payment
// export const initiatePayment = async (data) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/payment/initiate",
//       { amount: data }
//     );
//     return response?.data;
//   } catch (error) {
//     if (error.response) {
//       return { error: error.response.data };
//     } else {
//       return { error: 'An error occurred while initiating the payment' };
//     }
//   }
// };

// // Create Order
// export const createPaymentOrder = async (amount) => {
//   try {
//     const response = await axios.post('http://localhost:4000/api/v1/payment/create-order', 
//       { amount: amount }
//     );
//     return response.data; // Assuming the response structure is { orderId, currency, amount }
//   } catch (error) {
//     throw error.response ? error.response.data : new Error('An error occurred while creating the order');
//   }
// };

// // Verify Payment
// export const verifyPayment = async (paymentId) => {
//   try {
//     const response = await axios({
//       url: `http://localhost:4000/api/v1/payment/verify/${paymentId}`,
//       method: "POST",
//       withCredentials: true,
//     });
//     return response?.data;
//   } catch (error) {
//     if (error.response) {
//       return { error: error.response.data };
//     } else {
//       return { error: 'An error occurred while verifying the payment' };
//     }
//   }
// };


import axios from "axios";



// Fetch PayU hash and merchant key
export const fetchPaymentData = async ({ transactionId, amount, productInfo, firstname, email, phone }) => {
  try {
      const response = await axios.post('http://localhost:4000/api/v1/payment/getPayUHash', {
          txnid: transactionId,
          amount: amount,
          productinfo: productInfo,
          firstname: firstname,
          email: email,
          phone: phone,
          surl: 'https://your-success-url.com', // You can also consider passing this as a parameter
          furl: 'https://your-failure-url.com', // Same as above
      });

      return response.data; // Return the data received from the API
  } catch (error) {
      console.error("Error fetching payment data:", error);
      throw error; // Rethrow the error for the component to handle it if necessary
  }
};