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

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
      {movieDetails && <MovieDetails movie={movieDetails} />}
      <TheaterListAndShowtimes 
        theaters={theaters} 
        shows={shows} 
        selectedMovieId={movieId} 
        onSeatSelection={handleSeatSelection}
      />
      <button className="btn-primary" onClick={proceedToPayment}>Proceed to Payment</button>
    </div>
  );
};
