// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       // Fetch movie details
//       const movieData = await getMovieDetails(movieId);
//       if (movieData.error) throw new Error(movieData.error);
//       setMovieDetails(movieData);
  
//       // Fetch shows to get theaters, handle 404 error for no shows
//       const shows = await getShowsByMovieId(movieId);
//       if (shows.error && shows.error.status === 404) {
//         setTheaters([]); // No shows available
//         toast.info('No shows available for this movie.');
//       } else if (shows.length > 0) {
//         const theaterIds = [...new Set(shows.map(show => show.theater))];
//         const theatersData = await getTheatersByIds(theaterIds);
//         if (theatersData.error) throw new Error(theatersData.error);
//         setTheaters(theatersData);
//       }
//     } catch (error) {
//       toast.error('Failed to fetch movie details or theaters.');
//       setError(error.message || 'Failed to load data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
  

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {movieDetails && <MovieDetails movie={movieDetails} />}
//       <TheaterList theaters={theaters} />
//     </div>
//   );
// };

//  import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [shows, setShows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       // Fetch movie details
//       const movieData = await getMovieDetails(movieId);
//       if (movieData.error) throw new Error(movieData.error);
//       setMovieDetails(movieData);
  
//       // Fetch shows to get theaters, handle 404 error for no shows
//       const showsData = await getShowsByMovieId(movieId);
//       if (showsData.error && showsData.error.status === 404) {
//         setTheaters([]); // No shows available
//         toast.info('No shows available for this movie.');
//       } else if (showsData.length > 0) {
//         const theaterIds = [...new Set(showsData.map(show => show.theater))];
//         const theatersData = await getTheatersByIds(theaterIds);
//         if (theatersData.error) throw new Error(theatersData.error);
//         setTheaters(theatersData);
//         setShows(showsData); // Store the shows for later use
//       }
//     } catch (error) {
//       toast.error('Failed to fetch movie details or theaters.');
//       setError(error.message || 'Failed to load data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {movieDetails && <MovieDetails movie={movieDetails} />}
//       <TheaterList theaters={theaters} shows={shows} /> {/* Pass shows here */}
//     </div>
//   );
// };



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieDetails } from '../../services/movieApi.js';
import { getShowsByMovieId } from '../../services/showApi.js';
import { getTheatersByIds } from '../../services/theaterApi.js';
import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx'; // Updated import
import { MovieDetails } from '../movie/MovieDetails.jsx';

export const MovieInfoAndBookingPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [theaters, setTheaters] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch movie details
      const movieData = await getMovieDetails(movieId);
      if (movieData.error) throw new Error(movieData.error);
      setMovieDetails(movieData);
  
      // Fetch shows to get theaters, handle 404 error for no shows
      const showsData = await getShowsByMovieId(movieId);
      if (showsData.error && showsData.error.status === 404) {
        setTheaters([]); // No shows available
        toast.info('No shows available for this movie.');
      } else if (showsData.length > 0) {
        const theaterIds = [...new Set(showsData.map(show => show.theater))];
        const theatersData = await getTheatersByIds(theaterIds);
        if (theatersData.error) throw new Error(theatersData.error);
        setTheaters(theatersData);
        setShows(showsData); // Store the shows for later use
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

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
      {movieDetails && <MovieDetails movie={movieDetails} />}
      <TheaterListAndShowtimes theaters={theaters} shows={shows} selectedMovieId={movieId} /> {/* Pass shows here */}
    </div>
  );
};
