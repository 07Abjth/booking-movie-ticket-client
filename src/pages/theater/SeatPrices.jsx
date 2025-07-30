 
 
import { useEffect, useState } from 'react';
import { getSeatPrices } from '../../services/seatApi'; // Assuming you have an API service to get seat price data

export const SeatPrices = ({ seatId }) => {
  const [seatPrice, setSeatPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeatPrice = async () => {
      try {
        const response = await getSeatPrices(seatId);
        console.log('Seat Price Data:', response);

        if (response.error) {
          setError(response.error.message); // Set error message from the response
        } else {
          setSeatPrice(response.price); // Assuming `response.price` holds the price data
        }
      } catch (err) {
        console.error('Error fetching seat price:', err);
        setError('Failed to load seat price'); // Generic error message
      }
    };

    fetchSeatPrice();
  }, [seatId]);

  if (error) {
    return <p className="text-red-600">{error}</p>; // Display error in red text
  }

  return seatPrice !== null ? (
    <p className="text-lg font-semibold">Price for seat {seatId}: ₹{seatPrice}</p>
  ) : (
    <p>Loading seat price...</p> // Loading message
  );
};
