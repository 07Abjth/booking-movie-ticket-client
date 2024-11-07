import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getBookingDetails } from '../../services/bookingApi.js'; // Import your API function

export const BookingDetailsPage = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      setLoading(true); // Reset loading state before fetching
      const data = await getBookingDetails(bookingId); // Use the API function
      if (data.error) {
        toast.error(data.error);
      } else {
        setBooking(data);
      }
      setLoading(false); // Reset loading state after fetching
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!booking) {
    return <div>Booking not found.</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Movie: {booking.movie.title}</p>
      <p>Theater: {booking.theater.name}</p>
      <p>Show Time: {new Date(booking.showTime).toLocaleString()}</p>
      <p>Seats: {booking.selectedSeats.join(', ')}</p>
      <p>Total Amount: ₹{booking.totalAmount}</p>
      <p>Status: {booking.paymentStatus}</p>
      <p>Booking Date: {new Date(booking.createdAt).toLocaleString()}</p>
    </div>
  );
};
