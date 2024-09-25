 import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const SuccessPage = () => {
  const location = useLocation();
  const { selectedSeats, totalPrice } = location.state || { selectedSeats: [], totalPrice: 0 };

  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="mb-2">You have booked the following seats:</p>
      <p className="mb-4">{selectedSeats.map(seat => seat.seatNumber).join(', ')}</p>
      <p className="mb-4">Total Paid: ₹{totalPrice}</p>
      <Link to="/" className="text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
};
