
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


import { useNavigate } from 'react-router-dom';

export const TheaterListAndShowtimes = ({ theaters, shows, selectedMovieId }) => {
  const navigate = useNavigate();

  const handleShowtimeClick = (theaterId, showId) => {
    console.log("Navigating to seats with showId:", theaterId, "and showId:", showId);

    // Navigate to the seat selection page with the selected showId
    navigate(`/user/seats/${theaterId}/${showId}`);
  };

  if (!theaters.length) {
    return <p>No theaters available for this movie</p>;
  }

  return (
    <div>
      {theaters.map((theater) => {
        // Filter shows related to the current theater and selected movie
        const theaterShows = shows.filter(show => show.theater === theater._id && show.movie === selectedMovieId);

        return (
          <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
            
            {/* Show the available showtimes */}
            <div className="flex flex-wrap mt-2">
              {theaterShows.length > 0 ? (
                theaterShows.map((show) => {
                  const showDate = new Date(show.date); // Parse the date
                  const formattedDate = showDate.toLocaleDateString(); // Format the date

                  return (
                    <button
                      key={show._id}
                      className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200"
                      onClick={() => handleShowtimeClick(theater._id,show._id)} // Click handler
                    >
                      {`${formattedDate} - ${show.time}`} {/* Format date and show time */}
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
