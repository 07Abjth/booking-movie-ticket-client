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



// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx'; // Updated import
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
//       <TheaterListAndShowtimes theaters={theaters} shows={shows} selectedMovieId={movieId} /> {/* Pass shows here */}
//     </div>
//   );
// };



// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { makePayment } from '../../services/paymentApi.js'; // Import the makePayment function
// import { MovieDetails } from './MovieDetails'; // Component for showing movie details (you can adjust this)
// import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx'; // Component for listing theaters and showtimes
// import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications

// export const MovieInfoAndBookingPage = () => {
//   const { movieId } = useParams(); // Get the movie ID from the URL params
//   const [movieDetails, setMovieDetails] = useState(null); // Store movie details
//   const [theaters, setTheaters] = useState([]); // Store available theaters
//   const [shows, setShows] = useState([]); // Store available shows
//   const [selectedSeats, setSelectedSeats] = useState([]); // Store selected seats
//   const [selectedShow, setSelectedShow] = useState(null); // Store selected show
//   const [loading, setLoading] = useState(true); // Manage loading state
//   const [error, setError] = useState(null); // Manage error state

//   // Fetch movie details, available theaters, and showtimes
//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       // Assuming you have API endpoints to fetch movie details, theaters, and shows.
//       const movieResponse = await fetch(`/api/v1/movies/${movieId}`);
//       const movieData = await movieResponse.json();
//       setMovieDetails(movieData);

//       // Fetch theaters and showtimes based on movie
//       const theaterResponse = await fetch(`/api/v1/theaters/${movieId}/shows`);
//       const theaterData = await theaterResponse.json();
//       setTheaters(theaterData.theaters);
//       setShows(theaterData.shows);

//       setLoading(false);
//     } catch (error) {
//       setError('Failed to load movie or showtimes');
//       setLoading(false);
//     }
//   };

//   // Handle the payment process
//   const handlePayment = () => {
//     if (selectedSeats.length > 0 && selectedShow) {
//       makePayment(selectedSeats, selectedShow);
//     } else {
//       toast.error('Please select seats and a show to proceed with payment.');
//     }
//   };

//   // Fetch data when the component is mounted or when the movieId changes
//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//       {movieDetails && <MovieDetails movie={movieDetails} />} {/* Show movie details */}
      
//       <TheaterListAndShowtimes
//         theaters={theaters}
//         shows={shows}
//         selectedMovieId={movieId}
//         onSelectShow={setSelectedShow}  // Capture the selected show
//         onSelectSeats={setSelectedSeats}  // Capture the selected seats
//       />

//       <button
//         className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
//         onClick={handlePayment}
//         disabled={selectedSeats.length === 0 || !selectedShow}
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };




// // MovieInfoAndBookingPage.jsx

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx';
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
//       <TheaterListAndShowtimes theaters={theaters} shows={shows} selectedMovieId={movieId} />
//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';

// // MovieInfoAndBookingPage component
// export const MovieInfoAndBookingPage = () => {
//     const { movieId } = useParams();
//     const [movieDetails, setMovieDetails] = useState(null);
//     const [theaters, setTheaters] = useState([]);
//     const [shows, setShows] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchData = async () => {
//         try {
//             // Fetch movie details
//             const movieData = await getMovieDetails(movieId);
//             if (movieData.error) throw new Error(movieData.error);
//             setMovieDetails(movieData);

//             // Fetch shows to get theaters, handle 404 error for no shows
//             const showsData = await getShowsByMovieId(movieId);
//             if (showsData.error && showsData.error.status === 404) {
//                 setTheaters([]); // No shows available
//                 toast.info('No shows available for this movie.');
//             } else if (showsData.length > 0) {
//                 const theaterIds = [...new Set(showsData.map(show => show.theater))];
//                 const theatersData = await getTheatersByIds(theaterIds);
//                 if (theatersData.error) throw new Error(theatersData.error);
//                 setTheaters(theatersData);
//                 setShows(showsData); // Store the shows for later use
//             }
//         } catch (error) {
//             toast.error('Failed to fetch movie details or theaters.');
//             setError(error.message || 'Failed to load data. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [movieId]);

//     if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//     if (error) return <div className="text-center text-red-500">{error}</div>;

//     return (
//         <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//             {movieDetails && <MovieDetails movie={movieDetails} />}
//             <TheaterListAndShowtimes theaters={theaters} shows={shows} selectedMovieId={movieId} />
//         </div>
//     );
// };






// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';

// export const MovieInfoAndBookingPage = () => {
//     const { movieId } = useParams();
//     const navigate = useNavigate();
//     const [movieDetails, setMovieDetails] = useState();
//     const [theaters, setTheaters] = useState([]);
//     const [shows, setShows] = useState([]);
//     const [selectedSeats, setSelectedSeats] = useState([]); // Track selected seats
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchData = async () => {
//         try {
//             const movieData = await getMovieDetails(movieId);
//             if (movieData.error) throw new Error(movieData.error);
//             setMovieDetails(movieData);

//             const showsData = await getShowsByMovieId(movieId);
//             if (showsData.error && showsData.error.status === 404) {
//                 setTheaters([]);
//                 toast.info('No shows available for this movie.');
//             } else if (showsData.length > 0) {
//                 const theaterIds = [...new Set(showsData.map(show => show.theater))];
//                 const theatersData = await getTheatersByIds(theaterIds);
//                 if (theatersData.error) throw new Error(theatersData.error);
//                 setTheaters(theatersData);
//                 setShows(showsData);
//             }
//         } catch (error) {
//             toast.error('Failed to fetch movie details or theaters.');
//             setError(error.message || 'Failed to load data. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [movieId]);

//     const handleSeatSelection = (seats) => {
//         setSelectedSeats(seats); // This function gets selected seats from the child component
//     };

//     const proceedToPayment = () => {
//         if (selectedSeats.length === 0) {
//             toast.error('Please select at least one seat.');
//             return;
//         }

//         const selectedShow = shows.find(show => show.movie === movieId); // Example: getting the show data

//         navigate('/payment', {
//             state: {
//                 movieTitle: movieDetails.title,
//                 theaterName: selectedShow?.theater?.name || 'N/A',
//                 showTime: selectedShow?.time || 'N/A',
//                 selectedSeats: selectedSeats,
//                 totalAmount: selectedSeats.length * selectedShow.price, // Example calculation
//             },
//         });
//     };

//     if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
//     if (error) return <div className="text-center text-red-500">{error}</div>;

//     return (
//         <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//             {movieDetails && <MovieDetails movie={movieDetails} />}
//             <TheaterListAndShowtimes 
//                 theaters={theaters} 
//                 shows={shows} 
//                 selectedMovieId={movieId} 
//                 onSeatSelection={handleSeatSelection} // Pass seat selection handler
//             />
//             <button className="btn-primary" onClick={proceedToPayment}>Proceed to Payment</button>
//         </div>
//     );
// };



import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchMovieDetails } from '../../services/movieApi.js';
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
    const [selectedSeats, setSelectedSeats] = useState([]); // Track selected seats
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            console.log('Fetching movie details for ID:', movieId);
            const movieData = await fetchMovieDetails(movieId);
            if (movieData.error) throw new Error(movieData.error);
            setMovieDetails(movieData);
            console.log('Movie details fetched:', movieData);

            const showsData = await getShowsByMovieId(movieId);
            console.log('Fetched shows data:', showsData);
            if (showsData.error && showsData.error.status === 404) {
                setTheaters([]);
                toast.info('No shows available for this movie.');
            } else if (showsData.length > 0) {
                const theaterIds = [...new Set(showsData.map(show => show.theater))];
                console.log('Theater IDs to fetch:', theaterIds);
                const theatersData = await getTheatersByIds(theaterIds);
                if (theatersData.error) throw new Error(theatersData.error);
                setTheaters(theatersData);
                setShows(showsData);
                console.log('Theaters and shows set:', { theatersData, showsData });
            }
        } catch (error) {
            toast.error('Failed to fetch movie details or theaters.');
            console.error('Error fetching data:', error);
            setError(error.message || 'Failed to load data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [movieId]);

    const handleSeatSelection = (seats) => {
        setSelectedSeats(seats); // This function gets selected seats from the child component
        console.log('Selected seats updated:', seats);
    };

    const proceedToPayment = () => {
        if (selectedSeats.length === 0) {
            toast.error('Please select at least one seat.');
            return;
        }
    
        // Ensure we have both selectedShow and movie details
        const selectedShow = shows.find(show => show.id === selectedShowId); // assuming selectedShowId from child component
        if (!movieDetails || !selectedShow) {
            toast.error('Could not retrieve movie or show details.');
            return;
        }
    
        navigate('/payment', {
            state: {
                movieTitle: movieDetails.title,
                theaterName: selectedShow?.theater?.name || 'N/A',
                showTime: selectedShow?.time || 'N/A',
                selectedSeats: selectedSeats,
                totalAmount: selectedSeats.length * (selectedShow.price || 0),
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
                onSeatSelection={handleSeatSelection} // Pass seat selection handler
            />
            <button className="btn-primary" onClick={proceedToPayment}>Proceed to Payment</button>
        </div>
    );
};

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';
// import { TheaterListAndShowtimes } from '../theater/TheaterListAndShowtimes.jsx';
// import { MovieDetails } from '../movie/MovieDetails.jsx';

// export const MovieInfoAndBookingPage = () => {
//     const { movieId } = useParams();
//     const navigate = useNavigate();
//     const [movieDetails, setMovieDetails] = useState();
//     const [theaters, setTheaters] = useState([]);
//     const [shows, setShows] = useState([]);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchData = async () => {
//         try {
//             console.log('Fetching movie details for ID:', movieId);
//             if (!movieId) {
//                 throw new Error('Movie ID is undefined.');
//             }

//             const movieData = await getMovieDetails(movieId);
//             console.log('Raw movie data received:', movieData);
//             if (movieData.error) {
//                 throw new Error(movieData.error);
//             }

//             setMovieDetails(movieData);
//             console.log('Movie details fetched successfully:', movieData);

//             const showsData = await getShowsByMovieId(movieId);
//             console.log('Fetched shows data:', showsData);

//             if (showsData.error && showsData.error.status === 404) {
//                 setTheaters([]);
//                 toast.info('No shows available for this movie.');
//             } else if (showsData.length > 0) {
//                 const theaterIds = [...new Set(showsData.map(show => show.theater))];
//                 console.log('Theater IDs to fetch:', theaterIds);
//                 const theatersData = await getTheatersByIds(theaterIds);
//                 if (theatersData.error) throw new Error(theatersData.error);
//                 setTheaters(theatersData);
//                 setShows(showsData);
//                 console.log('Theaters and shows set:', { theatersData, showsData });
//             } else {
//                 console.log('No shows available for this movie.');
//             }
//         } catch (error) {
//             toast.error('Failed to fetch movie details or theaters.');
//             console.error('Error fetching data:', error);
//             setError(error.message || 'Failed to load data. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [movieId]);

//     const handleSeatSelection = (seats) => {
//         setSelectedSeats(seats);
//         console.log('Selected seats updated:', seats);
//     };
//     const proceedToPayment = () => {
//         if (selectedSeats.length === 0) {
//             toast.error('Please select at least one seat.');
//             return;
//         }
    
//         const selectedShow = shows.find(show => show.movie === movieId);
//         console.log('Selected Show:', selectedShow);
    
//         // Check if selectedShow is null or undefined
//         if (!selectedShow) {
//             console.error('No selected show found for movie ID:', movieId);
//             toast.error('Could not find show for the selected movie.');
//             return;
//         }
    
//         console.log('Movie Details:', movieDetails);
    
//         // Ensure movieDetails is available
//         if (!movieDetails) {
//             console.error('Movie details are missing for movie ID:', movieId);
//             toast.error('Could not retrieve movie details.');
//             return;
//         }
    
//         const theaterName = selectedShow.theater?.name;
//         console.log('Theater Name:', theaterName);
    
//         // Navigate with state
//         navigate('/payment', {
//             state: {
//                 movieTitle: movieDetails.title,
//                 theaterName: theaterName || 'N/A',
//                 showTime: selectedShow.time || 'N/A',
//                 selectedSeats: selectedSeats,
//                 totalAmount: selectedSeats.length * selectedShow.price,
//             },
//         });
//     };
    

//     if (loading) {
//         console.log('Loading...');
//         return <div className="flex justify-center items-center h-screen">Loading...</div>;
//     }

//     if (error) {
//         console.error('Error Message:', error);
//         return <div className="text-center text-red-500">{error}</div>;
//     }

//     return (
//         <div className="px-8 md:px-20 py-10 bg-gray-100 min-h-screen">
//             {movieDetails && <MovieDetails movie={movieDetails} />}
//             <TheaterListAndShowtimes 
//                 theaters={theaters} 
//                 shows={shows} 
//                 selectedMovieId={movieId} 
//                 onSeatSelection={handleSeatSelection}
//             />
//             <button className="btn-primary" onClick={proceedToPayment}>Proceed to Payment</button>
//         </div>
//     );
// };
