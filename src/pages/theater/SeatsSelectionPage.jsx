import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SeatsGrid } from './SeatsGrid.jsx';
import { getSeatPrices } from '../../services/seatApi.js';
import { getMovieDetails } from '../../services/movieApi.js';
import { getTheaterDetails } from '../../services/theaterApi.js';
import { getShowById } from '../../services/showApi.js';

export const SeatsSelectionPage = () => {
    const { theaterId, showId, movieId } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatPrices, setSeatPrices] = useState([]);
    const [error, setError] = useState(null);
    const [movieDetails, setMovieDetails] = useState({});
    const [theaterDetails, setTheaterDetails] = useState({});
    const [showDetails, setShowDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingSeatPrices, setLoadingSeatPrices] = useState(false); // Add a separate loading state for seat prices
    const fetchedPrices = useRef(new Set()); // Use useRef to avoid re-renders
    const navigate = useNavigate();

    // Fetch initial movie, theater, and show data
    useEffect(() => {
        const fetchInitialData = async () => {
            setLoading(true);
            try {
                const [movie, theater, show] = await Promise.all([
                    getMovieDetails(movieId),
                    getTheaterDetails(theaterId),
                    getShowById(showId),
                ]);

                if (movie.success) setMovieDetails(movie.data);
                if (theater.success) setTheaterDetails(theater.data);
                if (show.success) setShowDetails(show.data);
            } catch (err) {
                setError("Failed to load initial data. Please try again.");
                console.error("Error fetching initial data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchInitialData();
    }, [theaterId, showId, movieId]);

    // Fetch seat prices for selected seats
    useEffect(() => {
        const fetchSeatPrices = async (seatId) => {
            if (!seatId || fetchedPrices.current.has(seatId)) return;
            try {
                setLoadingSeatPrices(true);
                const response = await getSeatPrices(seatId);
                if (response.success) {
                    fetchedPrices.current.add(seatId);
                    setSeatPrices((prev) => [
                        ...prev,
                        { seatId, price: response.price }
                    ]);
                } else {
                    setError(response.message || 'Error fetching seat price.');
                }
            } catch (error) {
                setError('Error fetching seat price. Please try again later.');
                console.error('Error fetching seat price:', error);
            } finally {
                setLoadingSeatPrices(false);
            }
        };

        // Fetch prices for each selected seat
        selectedSeats.forEach(seatId => fetchSeatPrices(seatId));
    }, [selectedSeats]);

    // Handle seat selection
    const handleSeatSelect = (seatId) => {
        setSelectedSeats((prev) => {
            const newSelectedSeats = prev.includes(seatId)
                ? prev.filter((seat) => seat !== seatId)
                : [...prev, seatId];
            return newSelectedSeats;
        });
    };

    // Calculate total amount based on selected seats
    const totalAmount = seatPrices
        .filter(({ seatId }) => selectedSeats.includes(seatId))
        .reduce((total, { price }) => total + price, 0);

    // Handle navigation to the payment page
    const handleProceedToPayment = () => {
        const userId = localStorage.getItem('userId'); // Or fetch from global state/context
        if (selectedSeats.length > 0) {
            navigate(`/user/seats/${theaterId}/${showId}/${movieId}/payment`, {
                state: {
                  selectedSeats,
                  movieDetails,
                  theaterDetails,
                  showTime: showDetails.time,
                  totalAmount,
                  userId, // Make sure this is available in the localStorage or context
                }
             });
             
        } else {
            setError("Please select at least one seat.");
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="mb-4 text-center">
                        <h2 className="text-xl">{movieDetails.title || 'Movie Title Not Available'}</h2>
                        <p>{theaterDetails.name || 'Theater Name Not Available'}</p>
                        <p>{showDetails.time ? `Show Time: ${showDetails.time}` : 'Show Time: N/A'}</p>
                    </div>
                    <SeatsGrid 
                        theaterId={theaterId} 
                        showId={showId} 
                        onSeatSelect={handleSeatSelect} 
                        selectedSeats={selectedSeats} 
                    />
                    <div className="mt-4 text-center" aria-live="polite">
                        <h2 className="text-xl">Selected Seats:</h2>
                        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
                        <p>Total Amount: ₹{totalAmount > 0 ? totalAmount : '0.00'}</p>
                    </div>
                    <button 
                        onClick={handleProceedToPayment} 
                        disabled={selectedSeats.length === 0 || loadingSeatPrices} // Disable if seats are not selected or prices are still being fetched
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Proceed to Payment {totalAmount > 0 && ` - ₹${totalAmount}`}
                    </button>
                    {error && <div className="text-red-500">{error}</div>}
                </>
            )}
        </div>
    );
};




 