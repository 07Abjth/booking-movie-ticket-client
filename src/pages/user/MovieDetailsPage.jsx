import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
 import axios from "axios";

export const MovieDetailsPage = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const fetchMovieDetails = async () => {
    try {
      // const response = await axiosInstance.get(`/movie/details/${id}`);
      const response = await axios.get(`http://localhost:4000/api/v1/movie/details/${id}`);

      console.log("API Response:", response.data); // Check the entire response
      setMovieDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      toast.error('Failed to fetch movie details');
      setError('Failed to load movie details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
  fetchMovieDetails();
}, []); 


  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
console.log("log details ====", movieDetails);

return (


  <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
    
 
    
    {movieDetails ? (
      
      <div className="movie-details">
        <h1 className="text-3xl font-bold mb-4">{movieDetails.title || "Title not available"}</h1>
        <img src={movieDetails.image || "default-image.jpg"} alt={movieDetails.title} className="mb-4 w-full max-w-md" />
        <p className="mb-4">{movieDetails.description || "Description not available"}</p>
        <p className="mb-4"><strong>Release Date:</strong> {movieDetails.releaseDate ? new Date(movieDetails.releaseDate).toLocaleDateString() : "N/A"}</p>
        <p className="mb-4"><strong>Duration:</strong> {movieDetails.duration ? `${movieDetails.duration} minutes` : "N/A"}</p>
        <p className="mb-4"><strong>Language:</strong> {movieDetails.language || "N/A"}</p>
        <p className="mb-4"><strong>Genre:</strong> {movieDetails.genre ? movieDetails.genre.join(', ') : "N/A"}</p>
        <p className="mb-4"><strong>Director:</strong> {movieDetails.director || "N/A"}</p>
        <p className="mb-4"><strong>Cast:</strong> {movieDetails.cast ? movieDetails.cast.join(', ') : "N/A"}</p>
        <p className="mb-4"><strong>Average Rating:</strong> {movieDetails.avgRating || "N/A"}</p>
        <p className="mb-4"><strong>Total Ratings:</strong> {movieDetails.totalRatings || "N/A"}</p>
        <p className="mb-4"><strong>Trending:</strong> {movieDetails.trending ? 'Yes' : 'No'}</p>
        <p className="mb-4"><strong>Upcoming:</strong> {movieDetails.upcoming ? 'Yes' : 'No'}</p>
        <p className="mb-4"><strong>New Release:</strong> {movieDetails.isNewRelease ? 'Yes' : 'No'}</p>
      </div>
    ) : (
      <div className="text-center py-20 text-gray-500">Movie details not found</div>
    )}
  </div>
);

};
