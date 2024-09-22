// import { useEffect, useState } from 'react';
// import { getSeatsForShow, reserveSeats, getSeatLayout } from '../../services/seatApi';
// import { useParams } from 'react-router-dom';

// export const SeatsSelectionPage = () => {
//   const { showId } = useParams();
//   const [seats, setSeats] = useState([]);
//   const [layout, setLayout] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch seat layout
//         const layoutData = await getSeatLayout(showId);
//         setLayout(layoutData.data);

//         // Fetch seats for the show
//         const seatData = await getSeatsForShow(showId);
//         if (seatData.error) {
//           setError(seatData.error);
//         } else {
//           setSeats(seatData.data);
//         }
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [showId]);

//   const handleSeatSelect = (seatId) => {
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(id => id !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   const handleBookSeats = async () => {
//     if (!window.confirm('Are you sure you want to book these seats?')) {
//       return;
//     }

//     try {
//       const response = await reserveSeats(selectedSeats);
//       if (response.error) {
//         setMessage(`Error booking seats: ${response.error}`);
//       } else {
//         setMessage('Seats booked successfully!');
//         setSeats(prevSeats => 
//           prevSeats.map(seat => 
//             selectedSeats.includes(seat._id) ? { ...seat, status: 'booked' } : seat
//           )
//         );
//         setSelectedSeats([]);
//       }
//     } catch (err) {
//       setMessage('Failed to book seats.');
//     }
//   };

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error) return <div className="alert alert-error text-white mt-4">{error}</div>;
//   if (seats.length === 0) return <div className="text-center mt-4">No seats available.</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold text-center mb-6">Select Your Seat</h1>
//       <div className="grid grid-cols-8 gap-4 mb-6">
//         {layout.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex">
//             {row.map(seatId => {
//               const seat = seats.find(seat => seat._id === seatId);
//               return (
//                 <div
//                   key={seatId}
//                   className={`seat ${
//                     seat?.status === 'booked'
//                       ? 'bg-red-600 cursor-not-allowed'
//                       : selectedSeats.includes(seatId)
//                         ? 'bg-yellow-400'
//                         : 'bg-green-500'
//                   } flex items-center justify-center rounded-lg p-4 text-white`}
//                   onClick={() => seat?.status === 'available' && handleSeatSelect(seatId)}
//                 >
//                   {seat?.seatNumber}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       <button 
//         onClick={handleBookSeats} 
//         className="btn btn-primary" 
//         disabled={selectedSeats.length === 0}
//       >
//         Book Selected Seats
//       </button>

//       {message && <div className="mt-4 text-center">{message}</div>}
//     </div>
//   );
// };


import { useEffect, useState } from 'react';
import { getSeatsForTheater, reserveSeats, getSeatLayout } from '../../services/seatApi'; // Adjusted to theater APIs
import { useParams } from 'react-router-dom';

export const SeatsSelectionPage = () => {
  const { theaterId } = useParams();  // Fetch theaterId from route params
  const [seats, setSeats] = useState([]);  
  const [layout, setLayout] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch seat layout for the theater
        const layoutData = await getSeatLayout(theaterId); 
        setLayout(layoutData.data);

        // Fetch seats for the theater
        const seatData = await getSeatsForTheater(theaterId);  // Updated to getSeatsForTheater
        if (seatData.error) {
          setError(seatData.error);
        } else {
          setSeats(seatData.data);
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [theaterId]);

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookSeats = async () => {
    if (!window.confirm('Are you sure you want to book these seats?')) {
      return;
    }

    try {
      const response = await reserveSeats(selectedSeats);
      if (response.error) {
        setMessage(`Error booking seats: ${response.error}`);
      } else {
        setMessage('Seats booked successfully!');
        setSeats(prevSeats => 
          prevSeats.map(seat => 
            selectedSeats.includes(seat._id) ? { ...seat, status: 'booked' } : seat
          )
        );
        setSelectedSeats([]);
      }
    } catch (err) {
      setMessage('Failed to book seats.');
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="alert alert-error text-white mt-4">{error}</div>;
  if (seats.length === 0) return <div className="text-center mt-4">No seats available.</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Select Your Seat</h1>
      <div className="grid grid-cols-8 gap-4 mb-6">
        {layout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map(seatId => {
              const seat = seats.find(seat => seat._id === seatId);
              return (
                <div
                  key={seatId}
                  className={`seat ${
                    seat?.status === 'booked'
                      ? 'bg-red-600 cursor-not-allowed'
                      : selectedSeats.includes(seatId)
                        ? 'bg-yellow-400'
                        : 'bg-green-500'
                  } flex items-center justify-center rounded-lg p-4 text-white`}onClick={() => seat?.status === 'available' && handleSeatSelect(seatId)}
                >
                  {seat?.seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button 
        onClick={handleBookSeats} 
        className="btn btn-primary" 
        disabled={selectedSeats.length === 0}
      >
        Book Selected Seats
      </button>

      {message && <div className="mt-4 text-center">{message}</div>}
    </div>
  );
};
