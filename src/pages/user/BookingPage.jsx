 import { useLocation, Link } from 'react-router-dom';

export const BookingPage = () => {
  const location = useLocation();
  const { selectedSeats, totalPrice } = location.state || { selectedSeats: [], totalPrice: 0 };

  return (
    <div className="booking-confirmation p-5 text-center">
      <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="mb-2">You have successfully booked the following seats:</p>
      <ul className="list-disc list-inside mb-4">
        {selectedSeats.map((seat) => (
          <li key={seat}>Seat Number: {seat}</li>
        ))}
      </ul>
      <p className="mb-4">Total Price: ₹{totalPrice}</p>
      <Link to="/user/payment" className="text-blue-500 underline">
        Proceed to Payment
      </Link>
    </div>
  );
};
