import { useState, useEffect } from 'react';
import { MovieCard } from '../../components/ui/Cards';
import toast from 'react-hot-toast';
import axios from 'axios';

// Define MovieListPage
const MovieListPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies for different categories
  const fetchMovies = async () => {
    setLoading(true);
    try {
      // Fetch upcoming movies
      const upcomingResponse = await axios.get('http://localhost:4000/api/v1/movie/upcoming');
      console.log('Upcoming Movies:', upcomingResponse.data.data);
      setUpcomingMovies(upcomingResponse.data.data);

      // Fetch trending movies
      const trendingResponse = await axios.get('http://localhost:4000/api/v1/movie/trending');
      console.log('Trending Movies:', trendingResponse.data.data);
      setTrendingMovies(trendingResponse.data.data);

      // Fetch new releases
      const newReleasesResponse = await axios.get('http://localhost:4000/api/v1/movie/newReleases');
      console.log('New Releases:', newReleasesResponse.data.data);
      setNewReleases(newReleasesResponse.data.data);

    } catch (error) {
      console.error('Error fetching movies:', error);
      toast.error('Failed to fetch movies');
      setError('Failed to load movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
      <h1 className='font-bold text-4xl my-5'>Trending Movies</h1>
      <div className='grid grid-cols-3 gap-10'>
        {trendingMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      <h1 className='font-bold text-4xl my-5'>Upcoming Movies</h1>
      <div className='grid grid-cols-3 gap-10'>
        {upcomingMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      <h1 className='font-bold text-4xl my-5'>New Releases</h1>
      <div className='grid grid-cols-3 gap-10'>
        {newReleases.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;