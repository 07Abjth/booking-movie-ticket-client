
// export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
//     if (!theaters.length) {
//       return <p>No theaters available for this movie</p>;
//     }
  
//     return (
//       <div>
//         {theaters.map((theater) => {
//           // Filter shows related to the current theater and selected movie
//           const theaterShows = shows.filter(
//             (show) => show.theater === theater._id && show.movie === selectedMovieId
//           );
  
//           // Group by date
//           const groupedShows = theaterShows.reduce((acc, show) => {
//             const showDate = new Date(show.date).toLocaleDateString();
//             if (!acc[showDate]) {
//               acc[showDate] = [];
//             }
//             acc[showDate].push(show.time);
//             return acc;
//           }, {});
  
//           return (
//             <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//               <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
  
//               {/* Render showtimes flexibly */}
//               {Object.keys(groupedShows).map((date) => (
//                 <div key={date} className="mt-2">
//                   <h4 className="font-semibold">{date}</h4>
//                   <div className="flex flex-wrap">
//                     {groupedShows[date].map((time, index) => (
//                       <button
//                         key={index}
//                         className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200"
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
  

// import { useNavigate } from 'react-router-dom';

// export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
//   const navigate = useNavigate();

//   const handleShowtimeClick = (showId) => {
//     // Navigate to the seat selection page with the selected showId
//     navigate(`/seats/${showId}`);
//   };

//   if (!theaters.length) {
//     return <p>No theaters available for this movie</p>;
//   }

//   return (
//     <div>
//       {theaters.map((theater) => {
//         // Filter shows related to the current theater and selected movie
//         const theaterShows = shows.filter(show => show.theater === theater._id && show.movie === selectedMovieId);

//         return (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
            
//             {/* Show the available showtimes */}
//             <div className="flex flex-wrap mt-2">
//               {theaterShows.length > 0 ? (
//                 theaterShows.map((show) => {
//                   const showDate = new Date(`${show.date}`);
//                   return (
//                     <button
//                       key={show._id}
//                       className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200"
//                       onClick={() => handleShowtimeClick(show._id)} // Click handler
//                     >
//                       {`${showDate.toLocaleDateString()} - ${show.time}`} {/* Format date and show time */}
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


// import { useNavigate } from 'react-router-dom';

// export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
//   const navigate = useNavigate();

//   const handleShowtimeClick = (theaterId, showId) => {
//     console.log("Navigating to seats with showId:", theaterId, "and showId:", showId);

//     // Navigate to the seat selection page with the selected showId
//     navigate(`/user/seats/${theaterId}/${showId}`);
//   };

//   if (!theaters.length) {
//     return <p>No theaters available for this movie</p>;
//   }

//   return (
//     <div>
//       {theaters.map((theater) => {
//         // Filter shows related to the current theater and selected movie
//         const theaterShows = shows.filter(show => show.theater === theater._id && show.movie === selectedMovieId);

//         return (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
            
//             {/* Show the available showtimes */}
//             <div className="flex flex-wrap mt-2">
//               {theaterShows.length > 0 ? (
//                 theaterShows.map((show) => {
//                   const showDate = new Date(show.date); // Parse the date
//                   const formattedDate = showDate.toLocaleDateString(); // Format the date

//                   return (
//                     <button
//                       key={show._id}
//                       className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200"
//                       onClick={() => handleShowtimeClick(theater._id,show._id)} // Click handler
//                     >
//                       {`${formattedDate} - ${show.time}`} {/* Format date and show time */}
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


// import { useNavigate } from 'react-router-dom';

// export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
//   const navigate = useNavigate();

//   const handleShowtimeClick = (theaterId, showId) => {
//     navigate(`/user/seats/${theaterId}/${showId}`);
//   };

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
//             <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
//             <div className="flex flex-wrap mt-2">
//               {theaterShows.length > 0 ? (
//                 theaterShows.map((show) => {
//                   const showDate = new Date(show.date).toLocaleDateString();

//                   return (
//                     <button
//                       key={show._id}
//                       className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200"
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
//             <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
//             <div className="flex flex-wrap mt-2">
//               {theaterShows.length > 0 ? (
//                 theaterShows.map((show) => {
//                   const showDate = new Date(show.date).toLocaleDateString();

//                   return (
//                     <button
//                       key={show._id}
//                       aria-label={`Showtime on ${showDate} at ${show.time}`}
//                       className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200 hover:bg-gray-300"
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

  const handleShowtimeClick = (theaterId, showId) => {
    console.log(`Navigating to /user/seats/${theaterId}/${showId}`);
    navigate(`/user/seats/${theaterId}/${showId}`);
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

    fetchShows();
  }, [selectedMovieId]);

  if (loading) {
    return <p>Loading...</p>;
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
                  const showDate = new Date(show.date).toLocaleDateString();

                  return (
                    <button
                      key={show._id}
                      aria-label={`Showtime on ${showDate} at ${show.time}`}
                      className="px-6 py-3 mr-2 mb-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
                      onClick={() => handleShowtimeClick(theater._id, show._id)}
                    >
                      {`${showDate} - ${show.time}`}
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
