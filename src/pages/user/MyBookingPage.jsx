import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getAllBookings } from '../../services/bookingApi.js'; // Import your API function

export const MyBookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true); // Reset loading state before fetching
      const data = await getAllBookings(); // Use the API function
      if (data.error) {
        toast.error(data.error);
      } else {
        setBookings(data);
      }
      setLoading(false); // Reset loading state after fetching
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  const renderBooking = (booking) => (
    <li key={booking._id} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/bookings/${booking._id}`} className="block text-gray-800">
        <h3 className="text-2xl font-semibold">{booking.movie.title} - {new Date(booking.showTime).toLocaleString()}</h3>
        <p className="text-lg text-gray-600 mt-2">Theater: {booking.theater.name}</p>
        <p className="text-lg text-gray-600 mt-1">Seats: {booking.selectedSeats.join(', ')}</p>
        <p className="text-lg text-gray-600 mt-1">Status: 
          <span className={`font-semibold ${booking.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
            {booking.paymentStatus}
          </span>
        </p>
      </Link>
    </li>
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">My Bookings</h2>
      {bookings.length > 0 ? (
        <ul className="space-y-6">
          {bookings.map(renderBooking)} {/* Using the helper function for each booking */}
        </ul>
      ) : (
        <p className="text-center text-xl text-gray-700">
          You have no bookings yet. 
          <Link to="/movies" className="text-blue-500">Browse Movies</Link>
        </p>
      )}
    </div>
  );
};
