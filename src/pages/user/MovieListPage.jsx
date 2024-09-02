import { useState, useEffect } from 'react';
import { MovieCard } from '../../components/ui/Cards';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';

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
      const upcomingResponse = await axiosInstance({
        url: '/movie/upcomingMovies',
        method: 'GET',
      });
      setUpcomingMovies(upcomingResponse?.data?.data || []);

      // Fetch trending movies
      const trendingResponse = await axiosInstance({
        url: '/movie/trendingMovies',
        method: 'GET',
      });
      setTrendingMovies(trendingResponse?.data?.data || []);

      // Fetch new releases
      const newReleasesResponse = await axiosInstance({
        url: '/movie/newReleases',
        method: 'GET',
      });
      setNewReleases(newReleasesResponse?.data?.data || []);

    } catch (error) {
      console.error('Error fetching movies:', error);
      toast.error('Failed fetching movies');
      setError('Failed to load movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="px-20 py-10">
      <section className="my-10">
        <h1 className="font-bold text-4xl mb-5">Upcoming Movies</h1>
        <div className="grid grid-cols-3 gap-x-10">
          {upcomingMovies.length > 0 ? (
            upcomingMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          ) : (
            <div>No upcoming movies available</div>
          )}
        </div>
      </section>

      <section className="my-10">
        <h1 className="font-bold text-4xl mb-5">Trending Movies</h1>
        <div className="grid grid-cols-3 gap-x-10">
          {trendingMovies.length > 0 ? (
            trendingMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          ) : (
            <div>No trending movies available</div>
          )}
        </div>
      </section>

      <section className="my-10">
        <h1 className="font-bold text-4xl mb-5">New Releases</h1>
        <div className="grid grid-cols-3 gap-x-10">
          {newReleases.length > 0 ? (
            newReleases.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          ) : (
            <div>No new releases available</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MovieListPage;
