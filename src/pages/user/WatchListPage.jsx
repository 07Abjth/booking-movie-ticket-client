import { useState, useEffect } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';
import { MovieCard } from '../../components/ui/Cards'; // Adjust the path if necessary

export const WatchListPage = () => {
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch watch list from the server
  const fetchWatchList = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url: '/user/watchlist', // Adjust the endpoint as needed
        method: 'GET',
      });
      setWatchList(response?.data?.data || []);
    } catch (error) {
      console.error('Error fetching watch list:', error);
      toast.error('Failed to load watch list');
      setError('Failed to load watch list. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchList();
  }, []);

  if (loading) return <div>Loading watch list...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-4xl mb-5">Your Watch List</h1>
      <div className="grid grid-cols-3 gap-x-10">
        {watchList.length > 0 ? (
          watchList.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        ) : (
          <div>No movies in your watch list</div>
        )}
      </div>
    </div>
  );
};
