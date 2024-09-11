import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const MovieDetailsPage = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  const [movieDetails, setMovieDetails] = useState(null);
  const [theaterDetails, setTheaterDetails] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      // Fetch movie details and theater showtimes
      const movieResponse = await axios.get(`http://localhost:4000/api/v1/movie/details/${id}`);
      const theaterResponse = await axios.get(`http://localhost:4000/api/v1/movie/theaters/${id}`);
      
      console.log("API Response (Movie):", movieResponse.data); // Check the movie details response
      console.log("API Response (Theaters):", theaterResponse.data); // Check the theater details response
      
      setMovieDetails(movieResponse.data.data);
      setTheaterDetails(theaterResponse.data.data.theaters || []); // Adjust based on your API structure
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

  const handleShowtimeClick = (showtime) => {
    // Set the selected showtime to display available seats
    setSelectedShowtime(showtime);
  };

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

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
          
          {/* Show Theater Details */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Theater Showtimes</h2>
            {theaterDetails.length > 0 ? (
              <ul className="list-disc pl-5">
                {theaterDetails.map((theater, index) => (
                  <li key={index} className="mb-4">
                    <h3 className="text-xl font-semibold">{theater.name}</h3>
                    <ul className="list-inside">
                      {theater.showtimes.map((showtime, index) => (
                        <li key={index}>
                          <button 
                            onClick={() => handleShowtimeClick(showtime)} 
                            className="text-blue-500 underline"
                          >
                            {new Date(showtime.time).toLocaleTimeString()} - {showtime.screen}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No showtimes available for this movie.</p>
            )}
          </div>

          {/* Show Selected Showtime Details */}
          {selectedShowtime && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Selected Showtime</h2>
              <p><strong>Theater:</strong> {selectedShowtime.theaterName}</p>
              <p><strong>Screen:</strong> {selectedShowtime.screen}</p>
              <p><strong>Time:</strong> {new Date(selectedShowtime.time).toLocaleTimeString()}</p>
              {/* Add more details as needed */}
              <Link to={`/seats/${selectedShowtime.id}`}>
                <button className="btn btn-primary">Select Seats</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">Movie details not found</div>
      )}
    </div>
  );
};
