import { useState, useEffect } from 'react';
import { MovieCard } from '../../components/ui/Cards';
import { axiosInstance } from '../../config/axiosInstance';
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
      console.log('Upcoming Movies:', upcomingMovies);

      setUpcomingMovies(upcomingResponse.data.data);

      // // Fetch trending movies
      // const trendingResponse = await axiosInstance.get('/movie/trending');
      // console.log('Trending Movies:', trendingMovies);

      // setTrendingMovies(trendingResponse?.data?.data || []);


      const trendingResponse = await axios.get('http://localhost:4000/api/v1/movie/trending');
      console.log('Trending Movies:', trendingResponse.data.data);
      setTrendingMovies(trendingResponse.data.data);
  


      // Fetch new releases
      const newReleasesResponse = await axiosInstance.get('/movie/newReleases');
      console.log('New Releases:', newReleases);

      setNewReleases(newReleasesResponse?.data?.data || []);

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
       
       <h1>Trending movies</h1>
     {trendingMovies.map((value)=>(
      <MovieCard key={value.id} movie={value}/>
      ))}
       <h1>Upcoming movies</h1>
     {upcomingMovies.map((value)=>(
      <MovieCard key={value.id} movie={value}/>
      ))}

       {/* <h1>Trending movies</h1>
     {trendingMovies.map((value)=>(
      <MovieCard key={value.id} movie={value}/>
      ))} */}
     
     </div>
  );
};

export default MovieListPage;
