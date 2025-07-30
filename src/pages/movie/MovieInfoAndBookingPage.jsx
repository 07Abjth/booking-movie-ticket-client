import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieDetails } from '../../services/movieApi.js';
import { getShowsByMovieId } from '../../services/showApi.js';
import { getTheatersByIds } from '../../services/theaterApi.js';
import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx';
import { MovieDetails } from '../movie/MovieDetails.jsx';

export const MovieInfoAndBookingPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState();
  const [theaters, setTheaters] = useState([]);
  const [shows, setShows] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const movieDataPromise = getMovieDetails(movieId);
      const showsDataPromise = getShowsByMovieId(movieId);

      const [movieData, showsData] = await Promise.all([movieDataPromise, showsDataPromise]);

      if (movieData.error) throw new Error(movieData.error);
      setMovieDetails(movieData);

      if (showsData.error && showsData.error.status === 404) {
        setTheaters([]);
        toast.info('No shows available for this movie.');
      } else if (showsData.length > 0) {
        const theaterIds = [...new Set(showsData.map(show => show.theater))];
        const theatersData = await getTheatersByIds(theaterIds);
        if (theatersData.error) throw new Error(theatersData.error);
        setTheaters(theatersData);
        setShows(showsData);
      }
    } catch (error) {
      toast.error('Failed to fetch movie details or theaters.');
      setError(error.message || 'Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  const handleSeatSelection = (seats) => {
    setSelectedSeats(seats);
  };

  const proceedToPayment = () => {
    if (selectedSeats.length === 0) {
      toast.error('Please select at least one seat.');
      return;
    }

    const selectedShow = shows.find(show => show.movie === movieId);

    navigate('/payment', {
      state: {
        movieTitle: movieDetails.title,
        theaterName: selectedShow?.theater?.name || 'N/A',
        showTime: selectedShow?.time || 'N/A',
        selectedSeats: selectedSeats,
        totalAmount: selectedSeats.length * selectedShow.price,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4
        }}></div>
        
        {/* Loading Content */}
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-400"></div>
              <div className="absolute inset-0 animate-pulse rounded-full h-20 w-20 border-2 border-purple-400/20"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Loading Movie Details
          </h2>
          <p className="text-gray-300 animate-pulse">
            Preparing your cinematic experience...
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-500/10 backdrop-blur-lg rounded-3xl border border-red-500/20 p-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-400 mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-300 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.4
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-20 py-12 space-y-12">
        
        {/* Movie Details Section */}
        {movieDetails && (
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <MovieDetails movie={movieDetails} />
          </div>
        )}

        {/* Theater and Showtimes Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              Select Theater & Showtime
            </h2>
            <p className="text-gray-300">
              Choose your preferred theater and showtime for the best experience
            </p>
          </div>
          
          <TheaterListAndShowtimes 
            theaters={theaters}
            shows={shows}
            selectedMovieId={movieId}
            onSeatSelection={handleSeatSelection}
          />
        </div>

        {/* Sticky Payment Button */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <button 
            className="group relative px-12 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden border border-white/10 backdrop-blur-lg"
            onClick={proceedToPayment}
          >
            {/* Button Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button Content */}
            <span className="relative flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Proceed to Payment</span>
              {selectedSeats.length > 0 && (
                <span className="ml-2 px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                  {selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''}
                </span>
              )}
            </span>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-20 group-active:animate-ping bg-white transition-opacity duration-150"></div>
          </button>
        </div>

        {/* Seat Selection Info */}
        {selectedSeats.length > 0 && (
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40">
            <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl px-6 py-3 border border-gray-700/50 shadow-xl">
              <p className="text-white text-sm font-medium">
                <span className="text-emerald-400">{selectedSeats.length}</span> seat{selectedSeats.length > 1 ? 's' : ''} selected
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
    </div>
  );
};