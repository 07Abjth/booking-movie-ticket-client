import { useState, useEffect } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';

export const UserReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reviews from the server
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url: '/reviews', // Adjust the endpoint as needed
        method: 'GET',
      });
      setReviews(response?.data?.data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast.error('Failed to load reviews');
      setError('Failed to load reviews. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) return <div>Loading reviews...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-4xl mb-5">User Reviews</h1>
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="p-4 border rounded shadow-sm">
              <h2 className="text-xl font-semibold">{review.movieTitle}</h2>
              <p className="mt-2">{review.reviewText}</p>
              <small className="text-gray-500">Reviewed by: {review.username} on {new Date(review.createdAt).toLocaleDateString()}</small>
            </div>
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </div>
    </div>
  );
};
