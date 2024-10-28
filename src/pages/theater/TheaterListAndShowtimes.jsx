

// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleShowtimeClick = (theaterId, showId) => {
//     console.log(`Navigating to /user/seats/${theaterId}/${showId}`);
//     navigate(`/user/seats/${theaterId}/${showId}`);
//   };

//   useEffect(() => {
//     const fetchShows = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Fetch logic for theaters and shows from your backend here
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShows();
//   }, [selectedMovieId]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!theaters.length) {
//     return <p>No theaters available for this movie</p>;
//   }

//   return (
//     <div>
//       {theaters.map((theater) => {
//         const theaterShows = shows.filter(
//           (show) => show.theater === theater._id && show.movie === selectedMovieId
//         );

//         return (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-2xl font-bold text-blue-800 mb-1">{theater.name}</h3>
//             <p className="text-lg text-gray-600">{theater.location}</p>
//             <div className="flex flex-wrap mt-2">
//               {theaterShows.length > 0 ? (
//                 theaterShows.map((show) => {
//                   const showDate = new Date(show.date).toLocaleDateString();

//                   return (
//                     <button
//                       key={show._id}
//                       aria-label={`Showtime on ${showDate} at ${show.time}`}
//                       className="px-6 py-3 mr-2 mb-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
//                       onClick={() => handleShowtimeClick(theater._id, show._id)}
//                     >
//                       {`${showDate} - ${show.time}`}
//                     </button>
//                   );
//                 })
//               ) : (
//                 <p>No showtimes available</p>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };


import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShowtimeClick = (theaterId, showId, movieId) => {
    console.log(`Navigating to /user/seats/${theaterId}/${showId}`);
    navigate(`/user/seats/${theaterId}/${showId}/${movieId}`);
  };

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch logic for theaters and shows from your backend here
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    // Uncomment this line if fetchShows has API logic:
    // fetchShows();
  }, [selectedMovieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!theaters.length) {
    return <p>No theaters available for this movie</p>;
  }

  return (
    <div>
      {theaters.map((theater) => {
        const theaterShows = shows.filter(
          (show) => show.theater === theater._id && show.movie === selectedMovieId
        );

        return (
          <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
            <h3 className="text-2xl font-bold text-blue-800 mb-1">{theater.name}</h3>
            <p className="text-lg text-gray-600">{theater.location}</p>
            <div className="flex flex-wrap mt-2">
              {theaterShows.length > 0 ? (
                theaterShows.map((show) => {
                  const showDate = show.date ? new Date(show.date).toLocaleDateString() : 'Date Unavailable';
                  const showTime = show.time || 'Time Unavailable';

                  return (
                    <button
                      key={show._id}
                      aria-label={`Showtime on ${showDate} at ${showTime}`}
                      className="px-6 py-3 mr-2 mb-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
                      onClick={() => handleShowtimeClick(theater._id, show._id)}
                    >
                      {`${showDate} - ${showTime}`}
                    </button>
                  );
                })
              ) : (
                <p>No showtimes available</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
