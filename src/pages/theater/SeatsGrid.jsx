// // SeatsGrid.js
// import   { useEffect, useState } from 'react';
// import { getSeatsForShow } from '../../services/seatApi.js'; // Import your API functions
// import {Seat} from './Seat.jsx'; // Import your Seat component

// export const SeatsGrid = ({ showId }) => {
//   const [seats, setSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSeats = async () => {
//       const data = await getSeatsForShow(showId); // Call the API function
//       if (data.error) {
//         setError(data.error); // Set error state if fetching fails
//       } else {
//         setSeats(data.seats); // Assuming 'data.seats' contains the array of seats
//       }
//       setLoading(false); // Set loading to false after fetching
//     };

//     fetchSeats(); // Invoke the fetch function
//   }, [showId]);

//   if (loading) {
//     return <div className="text-center">Loading seats...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   const handleSeatSelect = (seatNumber) => {
//     console.log(`Selected seat: ${seatNumber}`);
//     // Add your selection logic here (e.g., toggle selection state)
//   };

//   return (
//     <div className="flex flex-wrap justify-center">
//       {seats.map((seat) => (
//         <Seat key={seat.seatNumber} seatNumber={seat.seatNumber} status={seat.status} />
//       ))}
//     </div>
//   );
// };


// import { useEffect, useState } from 'react';
// import { getSeatsForShow } from '../../services/seatApi.js';
// import { Seat } from './Seat.jsx';

// export const SeatsGrid = ({ showId, onSelect }) => { // Accept onSelect as prop
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


import { useEffect, useState } from 'react';
import { getSeatsForShow } from '../../services/seatApi.js';
import { Seat } from './Seat.jsx';

export const SeatsGrid = ({ showId, onSelect }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeats = async () => {
      console.log(`Fetching seats for show ID: ${showId}`);
      const data = await getSeatsForShow(showId);
      console.log('Fetched data in SeatsGrid:', data); // Log fetched data

      if (data.error) {
        console.error('Error fetching seats in SeatsGrid:', data.error);
        setError(data.error);
      } else {
        setSeats(data.seats);
        console.log('Seats received in SeatsGrid:', data.seats); // Log the seats
      }
      setLoading(false);
    };

    fetchSeats();
  }, [showId]);

  if (loading) {
    return <div className="text-center">Loading seats...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {seats.map((seat) => (
        <Seat 
          key={seat.seatNumber} 
          seatNumber={seat.seatNumber} 
          status={seat.status} 
          onSelect={onSelect}  // Pass onSelect to Seat
        />
      ))}
    </div>
  );
};
