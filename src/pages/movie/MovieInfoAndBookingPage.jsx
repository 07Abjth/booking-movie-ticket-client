// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { ShowTimes } from '../theater/ShowTimes.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';
// import { getMovieDetails } from '../../services/movieApi.js';
// import {TheaterList} from '../theater/TheaterList.jsx'

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theatersAndShowTimes, setTheatersAndShowtimes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await getMovieDetails(movieId);
//       if (data.error) throw new Error(data.error);

//       setMovieDetails(data.movie);
//       setTheatersAndShowtimes(data.theaters);
//     } catch (error) {
//       toast.error('Failed to fetch movie details and showtimes.');
//       setError(error.message || 'Failed to load movie details. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {/* Render Movie Details */}
//  <MovieDetails/>
//  <TheaterList/>
     
//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { ShowTimes } from '../theater/ShowTimes.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { getMovieDetails } from '../../services/movieApi.js';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theatersAndShowTimes, setTheatersAndShowtimes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // const fetchData = async () => {
//   //   try {
//   //     const data = await getMovieDetails(movieId);
//   //     if (data.error) throw new Error(data.error);

//   //     setMovieDetails(data.movie);
//   //     setTheatersAndShowtimes(data.theaters);  // Pass the theater data
//   //   } catch (error) {
//   //     toast.error('Failed to fetch movie details and showtimes.');
//   //     setError(error.message || 'Failed to load movie details. Please try again later.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, [movieId]);

//   // if (loading) return <div>Loading...</div>;
//   // if (error) return <div>{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {/* Render Movie Details */}
//       <MovieDetails movie={movieDetails} />

//       {/* Render Theater List and pass theaters data */}
//       {/* <TheaterList theaters={theatersAndShowTimes} /> */}
//       <TheaterList/>


//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { MovieDetails } from '../movie/MovieDetails.jsx';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { getMovieDetails } from '../../services/movieApi.js';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await getMovieDetails(movieId);
//       if (data.error) throw new Error(data.error);

//       setMovieDetails(data.movie);
//       setTheaters(data.theaters); // Update this line to pass theaters data
//     } catch (error) {
//       toast.error('Failed to fetch movie details and theaters.');
//       setError(error.message || 'Failed to load movie details. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {/* Render Movie Details */}
//       <MovieDetails movie={movieDetails} />

//       {/* Render Theater List */}
//       <TheaterList theaters={theaters} />
//     </div>
//   );
// };



// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { MovieDetails } from '../movie/MovieDetails.jsx';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { getMovieDetails } from '../../services/movieApi.js';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await getMovieDetails(movieId);
//       if (data.error) throw new Error(data.error);

//       setMovieDetails(data.movie);
//       setTheaters(data.theaters); // Pass theaters to the state
//     } catch (error) {
//       toast.error('Failed to fetch movie details and theaters.');
//       setError(error.message || 'Failed to load movie details. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {/* Render Movie Details */}
//       <MovieDetails movie={movieDetails} />

//       {/* Render Theater List */}
//       <TheaterList theaters={theaters} />
//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { MovieDetails } from '../movie/MovieDetails.jsx';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { getMovieDetails } from '../../services/movieApi.js';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await getMovieDetails(movieId);
//       if (data.error) throw new Error(data.error);

//       setMovieDetails(data.movie);
//       setTheaters(data.theaters || []); // Ensure theaters is an array
//     } catch (error) {
//       toast.error('Failed to fetch movie details and theaters.');
//       setError(error.message || 'Failed to load movie details. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       <MovieDetails movie={movieDetails} />
//       <TheaterList theaters={theaters} movieId={movieId} /> {/* Pass movieId to TheaterList */}
//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import {MovieDetails} from '../movie/MovieDetails.jsx'

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await getMovieDetails(movieId);
//       if (data.error) throw new Error(data.error);

//       setMovieDetails(data.movie);
//       setTheaters(data.theaters || []); // Ensure theaters is an array
//     } catch (error) {
//       toast.error('Failed to fetch movie details and theaters.');
//       setError(error.message || 'Failed to load movie details. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       <MovieDetails movie={movieDetails} />
//       <TheaterList theaters={theaters} movieId={movieId} /> {/* Pass movieId to TheaterList */}
//     </div>
//   );
// };



// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { TheaterList } from '../theater/TheaterList.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [theaters, setTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const movieData = await getMovieDetails(movieId);
//       if (movieData.error) throw new Error(movieData.error);
//       setMovieDetails(movieData);

//       // Fetch shows to get theaters
//       const { data: shows } = await getShowsByMovieId(movieId);
//       if (shows && shows.length > 0) {
//         const theaterIds = [...new Set(shows.map(show => show.theaterId))];
//         const { data: theatersData } = await getTheatersByIds(theaterIds);
//         setTheaters(theatersData || []);
//       }
//     } catch (error) {
//       toast.error('Failed to fetch movie details and theaters.');
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


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieDetails } from '../../services/movieApi.js';
import { getShowsByMovieId } from '../../services/showApi.js';
import { getTheatersByIds } from '../../services/theaterApi.js';
import { TheaterList } from '../theater/TheaterList.jsx';
import { MovieDetails } from '../movie/MovieDetails.jsx';

export const MovieInfoAndBookingPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [theaters, setTheaters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch movie details
      const movieData = await getMovieDetails(movieId);
      if (movieData.error) throw new Error(movieData.error);
      setMovieDetails(movieData);

      // Fetch shows to get theaters
      const shows = await getShowsByMovieId(movieId);
      if (shows.error) throw new Error(shows.error);

      if (shows.length > 0) {
        const theaterIds = [...new Set(shows.map(show => show.theater))];
        const theatersData = await getTheatersByIds(theaterIds);
        if (theatersData.error) throw new Error(theatersData.error);
        setTheaters(theatersData);
      } else {
        setTheaters([]);
      }
    } catch (error) {
      toast.error('Failed to fetch movie details and theaters.');
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
      <TheaterList theaters={theaters} />
    </div>
  );
};
