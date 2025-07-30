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
    const [loadingSeatPrices, setLoadingSeatPrices] = useState(false);
    const fetchedPrices = useRef(new Set());
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
        const userId = null; // Using null instead of localStorage
        if (selectedSeats.length > 0) {
            navigate(`/user/seats/${theaterId}/${showId}/${movieId}/payment`, {
                state: {
                  selectedSeats,
                  movieDetails,
                  theaterDetails,
                  showTime: showDetails.time,
                  totalAmount,
                  userId,
                }
             });
        } else {
            setError("Please select at least one seat.");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                        }}></div>
                    </div>
                    
                    {/* Cinema-themed floating elements */}
                    <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Loading Content */}
                <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-8">
                        <div className="relative w-28 h-28">
                            {/* Theater seat icon with spinning effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 animate-spin" style={{
                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))',
                                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))'
                            }}></div>
                            <div className="absolute inset-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-violet-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 mb-4 tracking-tight">
                        Preparing Your Seats
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <p className="text-slate-300 text-lg opacity-80">
                        Loading cinema hall layout
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                {/* Cinematic ambiance */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-600/8 to-cyan-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>
                
                {/* Theater curtain effect */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-slate-300 font-medium">Cinema Experience</span>
                    </div>
                    
                    <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 mb-6 tracking-tight">
                        Select Your Seats
                    </h1>
                </div>

                {/* Movie Info Card */}
                <div className="mb-10">
                    <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-violet-500/10 transition-all duration-300">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-white">
                                    {movieDetails.title || 'Movie Title Not Available'}
                                </h2>
                                <div className="flex flex-wrap items-center gap-6 text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="font-medium">{theaterDetails.name || 'Theater Name Not Available'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">{showDetails.time ? `${showDetails.time}` : 'Show Time: N/A'}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Screen indicator */}
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-slate-400 text-sm mb-1">SCREEN</p>
                                    <div className="w-20 h-3 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-400/50 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seats Grid Section */}
                <div className="mb-10">
                    <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-4">
                                Choose Your Perfect Spot
                            </h3>
                            
                            {/* Seat Legend */}
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-slate-600 rounded border border-slate-500"></div>
                                    <span className="text-slate-300">Available</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded border border-violet-400"></div>
                                    <span className="text-slate-300">Selected</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-red-500/50 rounded border border-red-400"></div>
                                    <span className="text-slate-300">Occupied</span>
                                </div>
                            </div>
                        </div>
                        
                        <SeatsGrid 
                            theaterId={theaterId} 
                            showId={showId} 
                            onSeatSelect={handleSeatSelect} 
                            selectedSeats={selectedSeats} 
                        />
                    </div>
                </div>

                {/* Bottom spacing for fixed elements */}
                <div className="h-40"></div>
            </div>

            {/* Selection Summary - Fixed Bottom */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        
                        {/* Selection Info */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl font-bold text-white">
                                    Selected Seats:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedSeats.length > 0 ? (
                                        selectedSeats.map((seat, index) => (
                                            <span key={seat} className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 rounded-full text-sm font-medium border border-violet-500/30">
                                                {seat}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-slate-400 italic">None selected</span>
                                    )}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-300">Total Amount:</span>
                                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                    ₹{totalAmount > 0 ? totalAmount.toFixed(2) : '0.00'}
                                </span>
                                {loadingSeatPrices && (
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <div className="w-4 h-4 border-2 border-violet-400 border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-sm">Calculating...</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex-shrink-0">
                            <button 
                                onClick={handleProceedToPayment} 
                                disabled={selectedSeats.length === 0 || loadingSeatPrices}
                                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                            >
                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                
                                {/* Button content */}
                                <span className="relative flex items-center gap-3">
                                    <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <span>Proceed to Payment</span>
                                    {totalAmount > 0 && (
                                        <span className="ml-2 px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                                            ₹{totalAmount.toFixed(2)}
                                        </span>
                                    )}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Error Toast */}
            {error && (
                <div className="fixed top-8 right-8 z-50 max-w-md">
                    <div className="bg-red-900/90 backdrop-blur-lg border border-red-500/30 rounded-2xl p-4 shadow-2xl animate-pulse">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-red-200 font-medium">{error}</p>
                            </div>
                            <button 
                                onClick={() => setError(null)}
                                className="ml-auto w-6 h-6 text-red-400 hover:text-red-300 transition-colors"
                            >
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};