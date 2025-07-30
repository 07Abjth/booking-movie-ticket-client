import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieDetails } from '../../services/movieApi.js';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log('Fetched movie data:', data); // Log the fetched data
        if (data.error) throw new Error(data.error);
        setMovieDetails(data.data); // Access the movie details here
      } catch (error) {
        toast.error('Failed to fetch movie details.');
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-details">
      <h1 className="text-3xl font-bold mb-4">{movieDetails.title || 'Title not available'}</h1>
      <img src={movieDetails.image || 'default-image.jpg'} alt={movieDetails.title} className="mb-4 w-full max-w-md" />
      <p className="mb-4">{movieDetails.description || 'Description not available'}</p>
      <p className="mb-4"><strong>Release Date:</strong> {movieDetails.releaseDate ? new Date(movieDetails.releaseDate).toLocaleDateString() : 'N/A'}</p>
      <p className="mb-4"><strong>Duration:</strong> {movieDetails.duration ? `${movieDetails.duration} minutes` : 'N/A'}</p>
      <p className="mb-4"><strong>Language:</strong> {movieDetails.language || 'N/A'}</p>
      <p className="mb-4"><strong>Genre:</strong> {movieDetails.genre ? movieDetails.genre.join(', ') : 'N/A'}</p>
      <p className="mb-4"><strong>Director:</strong> {movieDetails.director || 'N/A'}</p>
      <p className="mb-4"><strong>Cast:</strong> {movieDetails.cast ? movieDetails.cast.join(', ') : 'N/A'}</p>
      <p className="mb-4"><strong>Average Rating:</strong> {movieDetails.avgRating || 'N/A'}</p>
    </div>
  );
};
