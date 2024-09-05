import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const MovieDetailsPage = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axiosInstance.get(`/movie/getMovie/${id}`);
        setMovie(response.data.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        toast.error('Failed to fetch movie details');
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
      {movie ? (
        <div className="movie-details">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <img src={movie.image} alt={movie.title} className="mb-4 w-full max-w-md" />
          <p className="mb-4">{movie.description}</p>
          <p className="mb-4"><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
          <p className="mb-4"><strong>Duration:</strong> {movie.duration} minutes</p>
          <p className="mb-4"><strong>Language:</strong> {movie.language}</p>
          <p className="mb-4"><strong>Genre:</strong> {movie.genre.join(', ')}</p>
          <p className="mb-4"><strong>Director:</strong> {movie.director}</p>
          <p className="mb-4"><strong>Cast:</strong> {movie.cast.join(', ')}</p>
          <p className="mb-4"><strong>Average Rating:</strong> {movie.avgRating}</p>
          <p className="mb-4"><strong>Total Ratings:</strong> {movie.totalRatings}</p>
          <p className="mb-4"><strong>Trending:</strong> {movie.trending ? 'Yes' : 'No'}</p>
          <p className="mb-4"><strong>Upcoming:</strong> {movie.upcoming ? 'Yes' : 'No'}</p>
          <p className="mb-4"><strong>New Release:</strong> {movie.isNewRelease ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">Movie details not found</div>
      )}
    </div>
  );
};
