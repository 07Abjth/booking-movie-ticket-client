// import React, { useState } from 'react';
// import { createPaymentOrder } from '../../services/paymentApi.js'; // Adjust the import path as needed

// export const CheckOutForm = ({ selectedSeats, totalPrice, navigate }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handlePayment = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);
  
//     try {
//       // Create order on the backend using the payment API service
//       const order = await createPaymentOrder(totalPrice);

//       // Initialize Razorpay
//       const options = {
//         key: 'your-razorpay-key', // Replace with your Razorpay key
//         amount: order.amount,
//         currency: order.currency,
//         name: 'Movie Ticket Booking',
//         description: 'Booking for selected seats',
//         order_id: order.orderId, // Ensure this matches your response
//         handler: async (response) => {
//           // Call API to book seats after successful payment
//           try {
//             const bookingResponse = await axios.post('/api/v1/seat/book', {
//               showId: selectedSeats[0].show,
//               theaterId: selectedSeats[0].theater,
//               seatNumbers: selectedSeats.map(seat => seat.seatNumber),
//               paymentId: response.razorpay_payment_id, // Include Razorpay payment ID
//             });

//             if (bookingResponse.data.message === 'Seats booked successfully.') {
//               navigate('/success', { state: { selectedSeats, totalPrice } });
//             } else {
//               setError('Payment succeeded, but booking failed.');
//             }
//           } catch (bookingError) {
//             console.error('Booking error:', bookingError);
//             setError('Failed to book seats after payment.');
//           }
//         },
//         prefill: {
//           name: '', // Add user name if available
//           email: '', // Add user email if available
//           contact: '', // Add user contact number if available
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };
  
//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (err) {
//       console.error('Payment error:', err);
//       setError('Payment failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       <button
//         onClick={handlePayment}
//         disabled={loading}
//         className={`mt-4 p-2 rounded-md w-full ${loading ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
//       >
//         {loading ? 'Processing...' : `Pay ₹${totalPrice}`}
//       </button>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { createPaymentOrder } from '../../services/paymentApi.js'; // Adjust the import path as needed
import axios from 'axios';

export const CheckOutForm = ({ selectedSeats, totalPrice, navigate }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      // Create order on the backend using the payment API service
      const order = await createPaymentOrder(totalPrice);

      // Initialize Razorpay
      const options = {
        key: 'your-razorpay-key', // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: 'Movie Ticket Booking',
        description: 'Booking for selected seats',
        order_id: order.orderId,
        handler: async (response) => {
          // Call API to book seats after successful payment
          try {
            const bookingResponse = await axios.post('/api/v1/seat/book', {
              showId: selectedSeats[0].show,
              theaterId: selectedSeats[0].theater,
              seatNumbers: selectedSeats.map(seat => seat.seatNumber),
              paymentId: response.razorpay_payment_id,
            });

            if (bookingResponse.data.message === 'Seats booked successfully.') {
              navigate('/success', { state: { selectedSeats, totalPrice } });
            } else {
              setError('Payment succeeded, but booking failed.');
            }
          } catch (bookingError) {
            console.error('Booking error:', bookingError);
            setError('Failed to book seats after payment.');
          }
        },
        prefill: {
          name: '', // Add user name if available
          email: '', // Add user email if available
          contact: '', // Add user contact number if available
        },
        theme: {
          color: '#3399cc',
        },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`mt-4 p-2 rounded-md w-full ${loading ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
      >
        {loading ? 'Processing...' : `Pay ₹${totalPrice}`}
      </button>
    </div>
  );
};
