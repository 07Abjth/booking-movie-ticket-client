// CheckoutForm.jsx
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios'; 

export const CheckOutForm = ({ selectedSeats, totalPrice, navigate }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Create PaymentIntent on the backend
      const { data: clientSecret } = await axios.post('/api/v1/payment/create-payment-intent', {
        amount: totalPrice * 100, // Convert to smallest currency unit (e.g., paise)
        currency: 'inr',
        metadata: { seats: selectedSeats.map(seat => seat.seatNumber).join(', ') },
      });

      // Confirm the payment on the client
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        // Show error to the user
        setError(result.error.message);
        setProcessing(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Payment succeeded, book the seats
          const showId = selectedSeats[0].show; // Assuming all seats are for the same show
          const theaterId = selectedSeats[0].theater; // Assuming all seats are for the same theater
          const seatNumbers = selectedSeats.map(seat => seat.seatNumber);

          const bookingResponse = await axios.post('/api/v1/seat/book', {
            showId,
            theaterId,
            seatNumbers,
          });

          if (bookingResponse.data.message === 'Seats booked successfully.') {
            // Redirect to a success page or show a success message
            navigate('/success', { state: { selectedSeats, totalPrice } });
          } else {
            setError('Payment succeeded, but booking failed.');
          }
        }
        setProcessing(false);
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <CardElement className="p-4 border rounded-md" />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className={`mt-4 p-2 rounded-md w-full ${processing ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
      >
        {processing ? 'Processing...' : `Pay ₹${totalPrice}`}
      </button>
    </form>
  );
};

