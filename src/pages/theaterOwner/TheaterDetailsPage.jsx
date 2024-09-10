import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const TheaterDetailsPage = () => {
  const { id } = useParams(); // Get the theater ID from the URL parameters
  const [theaterDetails, setTheaterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTheaterDetails = async () => {
    try {
      // const response = await axiosInstance.get(`/theater/details/${id}`);
      const response = await axios.get(`http://localhost:4000/api/v1/theater//get-theaters`);

      console.log("API Response:", response.data); // Check the entire response
      setTheaterDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching theater details:', error);
      toast.error('Failed to fetch theater details');
      setError('Failed to load theater details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTheaterDetails();
  }, []);

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  console.log("Theater details ====", theaterDetails);

  return (
    <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
      {theaterDetails ? (
        <div className="theater-details">
          <h1 className="text-3xl font-bold mb-4">{theaterDetails.name || "Theater name not available"}</h1>
          <img src={theaterDetails.image || "default-image.jpg"} alt={theaterDetails.name} className="mb-4 w-full max-w-md" />
          <p className="mb-4">{theaterDetails.description || "Description not available"}</p>
          <p className="mb-4"><strong>Location:</strong> {theaterDetails.location || "Location not available"}</p>
          <p className="mb-4"><strong>Contact:</strong> {theaterDetails.contact || "Contact not available"}</p>
          <p className="mb-4"><strong>Seats Available:</strong> {theaterDetails.seatsAvailable || "N/A"}</p>
          <p className="mb-4"><strong>Opening Hours:</strong> {theaterDetails.openingHours || "N/A"}</p>
          <p className="mb-4"><strong>Facilities:</strong> {theaterDetails.facilities ? theaterDetails.facilities.join(', ') : "N/A"}</p>
          <p className="mb-4"><strong>Upcoming Shows:</strong> {theaterDetails.upcomingShows ? theaterDetails.upcomingShows.join(', ') : "N/A"}</p>
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">Theater details not found</div>
      )}
      <div className="card-actions justify-start">
        <Link to="/book-ticket">
          <button className="btn btn-primary">Book Ticket</button>
        </Link>
      </div>
    </div>
  );
};
