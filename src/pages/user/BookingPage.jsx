import { useState, useEffect } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';
import { MovieCard } from '../../components/ui/Cards'; // Adjust the path if necessary

export const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch bookings for the user
  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url: '/user/bookings', // Adjust the endpoint as needed
        method: 'GET',
      });
      setBookings(response?.data?.data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to load bookings');
      setError('Failed to load bookings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div>Loading bookings...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-4xl mb-5">Your Bookings</h1>
      <div className="space-y-4">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <div>No bookings found</div>
        )}
      </div>
    </div>
  );
};
