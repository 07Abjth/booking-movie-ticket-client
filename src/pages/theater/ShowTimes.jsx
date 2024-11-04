// import React, { useState } from 'react';

// export const ShowTimes = ({ shows }) => {
//   const [selectedShowTime, setSelectedShowTime] = useState(null);

//   const handleShowtimeClick = (show) => {
//     setSelectedShowTime(show);
//     // You can also trigger seat selection and booking logic here
//   };

//   return (
//     <div className="flex flex-wrap mt-2">
//       {shows.length > 0 ? (
//         shows.map((show) => {
//           const showDate = new Date(`${show.date}T${show.time}`);
//           return (
//             <button
//               key={show._id}
//               className={`px-4 py-2 mr-2 rounded-md ${
//                 selectedShowTime === show ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//               onClick={() => handleShowtimeClick(show)}
//             >
//               {showDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
//             </button>
//           );
//         })
//       ) : (
//         <div>No showtimes available</div>
//       )}

//       {selectedShowTime && (
//         <div className="mt-4">
//           <h4 className="text-lg">
//             Selected Showtime: {selectedShowTime.time}`.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
//           </h4>
//         </div>
//       )}
//     </div>
//   );
// };



import React, { useState } from 'react';

export const ShowTimes = ({ shows, onShowTimeSelect }) => {
  const [selectedShowTime, setSelectedShowTime] = useState(null);

  const handleShowtimeClick = (show) => {
    setSelectedShowTime(show);
    onShowTimeSelect(show); // Pass selected showtime to parent component
  };

  return (
    <div className="flex flex-wrap mt-2">
      {shows.length > 0 ? (
        shows.map((show) => {
          const showDate = new Date(`${show.date}T${show.time}`);
          return (
            <button
              key={show._id}
              className={`px-4 py-2 mr-2 rounded-md ${
                selectedShowTime === show ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleShowtimeClick(show)}
            >
              {showDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </button>
          );
        })
      ) : (
        <div>No showtimes available</div>
      )}

      {selectedShowTime && (
        <div className="mt-4">
          <h4 className="text-lg">
            Selected Showtime: {new Date(`${selectedShowTime.date}T${selectedShowTime.time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </h4>
        </div>
      )}
    </div>
  );
};
