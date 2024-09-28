// import   { useEffect, useState } from 'react';
// import { getSeatsForTheater } from '../'; // Adjust the import path as necessary

// export const TheaterSeats = ({ theaterId }) => {
//   const [seats, setSeats] = useState([]);

//   // Fetch seats when theater ID changes
//   const fetchSeats = async () => {
//     try {
//       const response = await getSeatsForTheater(theaterId); // Use the updated function
//       if (response.success) {
//         setSeats(response.seats);
//       } else {
//         console.error('Failed to fetch seats:', response.message);
//       }
//     } catch (error) {
//       console.error('Error fetching seats:', error);
//     }
//   };

//   useEffect(() => {
//     if (theaterId) {
//       fetchSeats();
//     }
//   }, [theaterId]);

//   return (
//     <div>
//       <h2>Available Seats</h2>
//       {seats.length > 0 ? (
//         <ul>
//           {seats.map(seat => (
//             <li key={seat._id}>
//               {seat.seatNumber} - {seat.row} - {seat.type}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No seats available.</p>
//       )}
//     </div>
//   );
// };

import { useEffect, useState } from 'react';
import { getSeatsForTheater } from '../'; // Adjust the import path as necessary

export const TheaterSeats = ({ theaterId }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch seats when theater ID changes
  const fetchSeats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getSeatsForTheater(theaterId);
      if (response.success) {
        setSeats(response.seats);
      } else {
        setError(response.message || 'Failed to fetch seats');
      }
    } catch (error) {
      setError(error.response ? error.response.data : 'Error fetching seats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (theaterId) {
      fetchSeats();
    }
  }, [theaterId]);

  return (
    <div>
      <h2>Available Seats</h2>
      {loading && <p>Loading seats...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {seats.length > 0 ? (
        <ul>
          {seats.map(seat => (
            <li key={seat._id}>
              {seat.seatNumber} - {seat.row} - {seat.type}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No seats available.</p>
      )}
    </div>
  );
};
