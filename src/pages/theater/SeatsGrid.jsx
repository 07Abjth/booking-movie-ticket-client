 


// import { useEffect, useState } from 'react';
// import { getSeatsForShow } from '../../services/seatApi.js';
// import { Seat } from './Seat.jsx';

// export const SeatsGrid = ({ showId, onSelect }) => {
//   const [seats, setSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSeats = async () => {
//       console.log(`Fetching seats for show ID: ${showId}`);
//       const data = await getSeatsForShow(showId);
//       console.log('Fetched data in SeatsGrid:', data); // Log fetched data

//       if (data.error) {
//         console.error('Error fetching seats in SeatsGrid:', data.error);
//         setError(data.error);
//       } else {
//         setSeats(data.seats);
//         console.log('Seats received in SeatsGrid:', data.seats); // Log the seats
//       }
//       setLoading(false);
//     };

//     fetchSeats();
//   }, [showId]);

//   if (loading) {
//     return <div className="text-center">Loading seats...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <div className="flex flex-wrap justify-center">
//       {seats.map((seat) => (
//         <Seat 
//           key={seat.seatNumber} 
//           seatNumber={seat.seatNumber} 
//           status={seat.status} 
//           onSelect={onSelect}  // Pass onSelect to Seat
//         />
//       ))}
//     </div>
//   );
// };



// // SeatsGrid.jsx
// import { useEffect, useState } from 'react';
// import { getSeatsForShow } from '../../services/seatApi.js';
//  import { Seat } from './Seat.jsx';

// export const SeatsGrid = ({ showId, onSeatSelect }) => {
 
//   const [seats, setSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSeats = async () => {
//       console.log(`Fetching seats for show ID: ${showId}`);
//       const data = await getSeatsForShow(showId);
//       console.log('Fetched data in SeatsGrid:', data);

//       if (data.error) {
//         console.error('Error fetching seats in SeatsGrid:', data.error);
//         setError(data.error);
//       } else {
//         setSeats(data.seats);
//         console.log('Seats received in SeatsGrid:', data.seats);
//       }
//       setLoading(false);
//     };
//     console.log(`showId changed to: ${showId}`); // This should log every time the showId changes

//     fetchSeats();
//     console.log(`Fetching seats for show ID: ${showId}`);

//   }, [showId]);

//   if (loading) {
//     return <div className="text-center">Loading seats...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <div className="flex flex-wrap justify-center">
//       {seats.map((seat) => (
//         <Seat
//           key={seat.seatNumber}
//           seatNumber={seat.seatNumber}
//           status={seat.status}
//           onSelect={onSeatSelect}  
//         />
//       ))}
//     </div>
//   );
// };

// SeatsGrid.jsx
import { useEffect, useState } from 'react';
import { getSeatsForShow } from '../../services/seatApi.js';
import {SeatRow} from './SeatRow.jsx';

export const SeatsGrid = ({ showId, onSeatSelect, selectedSeats }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await getSeatsForShow(showId);
        if (data.error) {
          throw new Error(data.error);
        }
        setSeats(data.seats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, [showId]);

  if (loading) return <div className="text-center">Loading seats...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const groupedSeats = groupSeatsByRow(seats); // Assume you have a function to group seats

  return (
    <div className="flex flex-wrap justify-center">
      {groupedSeats.map((rowSeats, index) => (
        <SeatRow
          key={index}
          seats={rowSeats}
          onSelect={onSeatSelect}
          selectedSeats={selectedSeats}
        />
      ))}
    </div>
  );
};

// Helper function to group seats by row (modify as per your data structure)
const groupSeatsByRow = (seats) => {
  // Implement your logic to group seats by row here
  return [seats]; // Placeholder for demonstration
};
