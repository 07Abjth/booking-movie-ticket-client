// // import { useEffect, useState } from 'react';
// // import { reserveSeats, fetchSeatLayout } from '../../services/seatApi';
// // import { useParams } from 'react-router-dom';

// // export const SeatsSelectionPage = () => {
// //   const { theaterId, showId } = useParams();
// //   const [layout, setLayout] = useState([]);
// //   const [seats, setSeats] = useState([]);
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const seatLayoutData = await fetchSeatLayout(theaterId, showId);
// //         if (seatLayoutData.error) {
// //           setError(seatLayoutData.error);
// //         } else {
// //           setSeats(seatLayoutData.seats);
// //           setLayout(seatLayoutData.layout);
// //         }
// //       } catch (err) {
// //         setError('Failed to fetch data');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [theaterId, showId]);

// //   const handleSeatSelect = (seatId) => {
// //     setSelectedSeats((prevSelected) =>
// //       prevSelected.includes(seatId)
// //         ? prevSelected.filter((id) => id !== seatId)
// //         : [...prevSelected, seatId]
// //     );
// //   };

// //   const handleBookSeats = async () => {
// //     if (!window.confirm('Are you sure you want to book these seats?')) return;

// //     try {
// //       const response = await reserveSeats(selectedSeats);
// //       if (response.error) {
// //         setMessage(`Error booking seats: ${response.error}`);
// //       } else {
// //         setMessage('Seats booked successfully!');
// //         setSeats((prevSeats) =>
// //           prevSeats.map((seat) =>
// //             selectedSeats.includes(seat._id) ? { ...seat, status: 'booked' } : seat
// //           )
// //         );
// //         setSelectedSeats([]);
// //       }
// //     } catch (err) {
// //       setMessage('Failed to book seats.');
// //     }
// //   };

// //   if (loading) return <div className="text-center mt-8">Loading...</div>;
// //   if (error) return <div className="alert alert-error text-white mt-4">{error}</div>;
// //   if (seats.length === 0) return <div className="text-center mt-4">No seats available.</div>;

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-2xl font-bold text-center mb-6">Select Your Seat</h1>
// //       <div className="grid grid-cols-8 gap-4 mb-6">
// //         {layout.map((row, rowIndex) => (
// //           <div key={rowIndex} className="flex">
// //             {row.map((seatId) => {
// //               const seat = seats.find((seat) => seat._id === seatId);
// //               return (
// //                 <div
// //                   key={seatId}
// //                   className={`seat ${
// //                     seat?.status === 'booked'
// //                       ? 'bg-red-600 cursor-not-allowed'
// //                       : selectedSeats.includes(seatId)
// //                       ? 'bg-yellow-400'
// //                       : 'bg-green-500'
// //                   } flex items-center justify-center rounded-lg p-4 text-white`}
// //                   onClick={() =>
// //                     seat?.status === 'available' && handleSeatSelect(seatId)
// //                   }
// //                 >
// //                   {seat?.seatNumber}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         ))}
// //       </div>

// //       <button
// //         onClick={handleBookSeats}
// //         className="btn btn-primary"
// //         disabled={selectedSeats.length === 0}
// //       >
// //         Book Selected Seats
// //       </button>

// //       {message && <div className="mt-4 text-center">{message}</div>}
// //     </div>
// //   );
// // };


// import { useEffect, useState } from 'react';
// import { reserveSeats, fetchSeatLayout } from '../../services/seatApi';
// import { useParams } from 'react-router-dom';

// export const SeatsSelectionPage = () => {
//   const { theaterId, showId } = useParams();
//   const [layout, setLayout] = useState([]);
//   const [seats, setSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatLayoutData = await fetchSeatLayout(showId);
//         if (seatLayoutData.error) {
//           setError(seatLayoutData.error);
//         } else {
//           setSeats(seatLayoutData.seats);
//           setLayout(seatLayoutData.layout);
//         }
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [theaterId, showId]);

//   const handleSeatSelect = (seatId) => {
//     setSelectedSeats((prevSelected) =>
//       prevSelected.includes(seatId)
//         ? prevSelected.filter((id) => id !== seatId)
//         : [...prevSelected, seatId]
//     );
//   };

//   const handleBookSeats = async () => {
//     if (!window.confirm('Are you sure you want to book these seats?')) return;

//     try {
//       const response = await reserveSeats(selectedSeats);
//       if (response.error) {
//         setMessage(`Error booking seats: ${response.error}`);
//       } else {
//         setMessage('Seats booked successfully!');
//         setSeats((prevSeats) =>
//           prevSeats.map((seat) =>
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
//           <div key={rowIndex} className="flex items-center">
//             <div className="seat-label mr-2">{String.fromCharCode(65 + rowIndex)}</div>
//             {row.map((seatId) => {
//               const seat = seats.find((seat) => seat._id === seatId);
//               return (
//                 <div
//                   key={seatId}
//                   className={`seat ${
//                     seat?.status === 'booked'
//                       ? 'bg-red-600 cursor-not-allowed'
//                       : selectedSeats.includes(seatId)
//                       ? 'bg-yellow-400'
//                       : 'bg-green-500'
//                   } flex items-center justify-center rounded-lg p-4 text-white`}
//                   onClick={() =>
//                     seat?.status === 'available' && handleSeatSelect(seatId)
//                   }
//                   title={`Seat ${seat?.seatNumber} - ${seat?.status}`}
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



// import { useEffect, useState } from 'react';
// import { reserveSeats, fetchSeatLayout } from '../../services/seatApi.js'; 
// import { useParams } from 'react-router-dom';

// export const SeatsSelectionPage = () => {
//   const { theaterId, showId } = useParams(); // Get params from URL
//   const [layout, setLayout] = useState([]);
//   const [seats, setSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const seatLayoutData = await fetchSeatLayout(theaterId, showId);
//         if (seatLayoutData.error) {
//           setError(seatLayoutData.error);
//         } else {
//           setSeats(seatLayoutData.seats);
//           setLayout(seatLayoutData.layout);
//         }
//       } catch (err) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [theaterId, showId]);

//   const handleSeatSelect = (seatId) => {
//     setSelectedSeats((prevSelected) =>
//       prevSelected.includes(seatId)
//         ? prevSelected.filter((id) => id !== seatId)
//         : [...prevSelected, seatId]
//     );
//   };

//   const handleBookSeats = async () => {
//     if (!window.confirm('Are you sure you want to book these seats?')) return;

//     try {
//       const response = await reserveSeats(selectedSeats);
//       if (response.error) {
//         setMessage(`Error booking seats: ${response.error}`);
//       } else {
//         setMessage('Seats booked successfully!');
//         setSeats((prevSeats) =>
//           prevSeats.map((seat) =>
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
//           <div key={rowIndex} className="flex items-center">
//             <div className="seat-label mr-2">{String.fromCharCode(65 + rowIndex)}</div>
//             {row.map((seatId) => {
//               const seat = seats.find((seat) => seat._id === seatId);
//               return (
//                 <div
//                   key={seatId}
//                   className={`seat ${
//                     seat?.status === 'booked'
//                       ? 'bg-red-600 cursor-not-allowed'
//                       : selectedSeats.includes(seatId)
//                       ? 'bg-yellow-400'
//                       : 'bg-green-500'
//                   } flex items-center justify-center rounded-lg p-4 text-white`}
//                   onClick={() =>
//                     seat?.status === 'available' && handleSeatSelect(seatId)
//                   }
//                   title={`Seat ${seat?.seatNumber} - ${seat?.status}`}
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



//  import    { useState } from 'react';
// import {SeatsGrid} from './SeatsGrid.jsx';

// export const SeatsSelectionPage = () => {
//   const showId = '66e566b4a4f1c803c85de523'; // Replace with actual show ID
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatSelect = (seatNumber) => {
//     setSelectedSeats((prev) => {
//       // Toggle selection
//       if (prev.includes(seatNumber)) {
//         return prev.filter((seat) => seat !== seatNumber);
//       }
//       return [...prev, seatNumber];
//     });
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//       <SeatsGrid showId={showId} onSeatSelect={handleSeatSelect} />
//       <div className="mt-4 text-center">
//         <h2 className="text-xl">Selected Seats:</h2>
//         <p>{selectedSeats.join(', ')}</p>
//         <button className="mt-2 bg-blue-500 text-white p-2 rounded">
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// };

 
// import { useState, useEffect } from 'react';
// import { getSeatsForShow } from '../../services/seatApi.js'; // Adjust the import based on your file structure
// import {SeatsGrid} from './SeatsGrid.jsx';

// export const SeatsSelectionPage = () => {
//   const showId = '66e566b4a4f1c803c85de523'; // Replace with actual show ID
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [seats, setSeats] = useState([]); // State to hold fetched seats
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   const handleSeatSelect = (seatNumber) => {
//     setSelectedSeats((prev) => {
//       // Toggle selection
//       if (prev.includes(seatNumber)) {
//         return prev.filter((seat) => seat !== seatNumber);
//       }
//       return [...prev, seatNumber];
//     });
//   };

//   useEffect(() => {
//     const fetchSeats = async () => {
//       const data = await getSeatsForShow(showId);
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setSeats(data.seats); // Set fetched seats in state
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
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//       {/* Render SeatsGrid only if you want to show it */}
//       <SeatsGrid showId={showId} onSeatSelect={handleSeatSelect} />
//       <div className="mt-4 text-center">
//         <h2 className="text-xl">Selected Seats:</h2>
//         <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//         <button
//           className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
//           disabled={selectedSeats.length === 0} // Disable button if no seats selected
//         >
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// };


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { getSeatsForShow } from '../../services/seatApi.js';
import { SeatsGrid } from './SeatsGrid.jsx';

export const SeatsSelectionPage = () => {
  const { showId } = useParams();  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatNumber)) {
        return prev.filter((seat) => seat !== seatNumber);
      }
      return [...prev, seatNumber];
    });
  };

  useEffect(() => {
    const fetchSeats = async () => {
      console.log(`Fetching seats for show ID: ${showId}`);
      const data = await getSeatsForShow(showId);
      console.log('Fetched data:', data); // Log the fetched data

      if (data.error) {
        console.error('Error fetching seats:', data.error);
        setError(data.error);
      } else {
        console.log('Seats received:', data.seats); // Log the seats
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
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
      <SeatsGrid showId={showId} onSeatSelect={handleSeatSelect} />
      <div className="mt-4 text-center">
        <h2 className="text-xl">Selected Seats:</h2>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
        <button
          className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
          disabled={selectedSeats.length === 0}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};
