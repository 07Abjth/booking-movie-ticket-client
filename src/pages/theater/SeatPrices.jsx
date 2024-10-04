// import React, { useEffect, useState } from 'react';
// import { getSeatPricesForShow } from './path/to/seatService'; // Adjust the path accordingly

// export const SeatPrices = ({ showId }) => {
//   const [seatPrices, setSeatPrices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSeatPrices = async () => {
//       const result = await getSeatPricesForShow(showId); // Use the service function

//       if (result.error) {
//         setError(result.error);
//       } else {
//         setSeatPrices(result.seats); // Assuming the response structure
//         console.log('Fetched Seat Prices:', result.seats); // Log the fetched seat prices
//       }
//       setLoading(false);
//     };

//     if (showId) {
//       fetchSeatPrices(); // Fetch prices only if showId is available
//     }
//   }, [showId]);

//   if (loading) return <p>Loading seat prices...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Seat Prices</h2>
//       <ul>
//         {seatPrices.map(seat => (
//           <li key={seat.seatId}>
//             Seat ID: {seat.seatId}, Price: ${seat.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// import { useEffect, useState } from 'react';
// import { getSeatPricesForShow } from '../../services/seatApi.js'; // Adjust the import based on your structure

// export const SeatPrices = ({ showId }) => {
//     const [prices, setPrices] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPrices = async () => {
//             try {
//                 const response = await getSeatPricesForShow(showId);
//                 setPrices(response.data);
//             } catch (error) {
//                 console.error("Error fetching seat prices:", error);
//                 setError(error.response?.data || 'Failed to fetch seat prices');
//             }
//         };

//         fetchPrices();
//     }, [showId]);

//     if (error) {
//         return <div className="text-red-500">{error}</div>; // Display error message if there's an error
//     }

//     if (!prices) {
//         return <div>Loading seat prices...</div>; // Show loading state while fetching
//     }

//     return (
//         <div>
//             <h2 className="text-xl">Seat Prices:</h2>
//             <ul>
//                 {prices.map((price) => (
//                     <li key={price.id}>
//                         {price.type}: ${price.amount} {/* Adjust based on your data structure */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// import { useEffect, useState } from 'react';
// import { getSeatPricesForShow } from '../../services/seatApi.js'; // Adjust the import based on your structure

// export const SeatPrices = ({ showId }) => {
//     const [prices, setPrices] = useState(null);  // Holds seat price data
//     const [error, setError] = useState(null);    // Holds error data if fetching fails

//     useEffect(() => {
//         const fetchPrices = async () => {
//             try {
//                 const response = await getSeatPricesForShow(showId);  // Fetch prices using showId
//                 setPrices(response.seats);  // Assuming the data is under 'seats'
//             } catch (error) {
//                 console.error("Error fetching seat prices:", error);
//                 setError(error.response?.data || 'Failed to fetch seat prices');  // Catch and display any error
//             }
//         };

//         fetchPrices();
//     }, [showId]);  // Dependency on showId so it refetches when showId changes

//     if (error) {
//         return <div className="text-red-500">{error}</div>;  // Display error message if fetching fails
//     }

//     if (!prices) {
//         return <div>Loading seat prices...</div>;  // Loading state while fetching
//     }

//     return (
//         <div>
//             <h2 className="text-xl">Seat Prices:</h2>
//             <ul>
//                 {prices.map((price) => (
//                     <li key={price.seatId}>
//                         Seat ID: {price.seatId}, Price: ${price.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// import { useEffect, useState } from 'react';
// import { getSeatPrices } from '../../services/seatApi.js'; // Adjust the import based on your structure

// export const SeatPrices = ({ seatId }) => {
//     const [price, setPrice] = useState(null);  // Holds seat price data
//     const [error, setError] = useState(null);  // Holds error data if fetching fails

//     useEffect(() => {
//         const fetchPrice = async () => {
//             try {
//                 const response = await getSeatPrices(seatId);  // Fetch price using seatId
//                 setPrice(response.price);  // Assuming the API returns the price in `response.price`
//             } catch (error) {
//                 console.error("Error fetching seat price:", error);
//                 setError(error.response?.data || 'Failed to fetch seat price');  // Handle and display errors
//             }
//         };

//         fetchPrice();
//     }, [seatId]);  // Re-fetch price when seatId changes

//     if (error) {
//         return <div className="text-red-500">{error}</div>;  // Display error message if fetching fails
//     }

//     if (price === null) {
//         return <div>Loading seat price...</div>;  // Loading state while fetching
//     }

//     return (
//         <div>
//             <h2 className="text-xl">Seat Price:</h2>
//             <p>Seat ID: {seatId}</p>
//             <p>Price: ${price}</p>
//         </div>
//     );
// };


// import { useEffect, useState } from 'react';
// import { getSeatPrices } from '../../services/seatApi.js'; // Adjust the import based on your structure

// export const SeatPrices = ({ seatId }) => {
//     const [price, setPrice] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPrice = async () => {
//             try {
//                 const response = await getSeatPrices(seatId);  // Fetch the price by seatId
//                 setPrice(response.price);  // Assuming the response contains the price
//             } catch (error) {
//                 console.error("Error fetching seat price:", error);
//                 setError(error.response?.data || 'Failed to fetch seat price');
//             }
//         };

//         fetchPrice();
//     }, [seatId]);  // Dependency on seatId so it refetches when seatId changes

//     if (error) {
//         return <div className="text-red-500">{error}</div>;  // Display error message if fetching fails
//     }

//     if (!price) {
//         return <div>Loading seat price...</div>;  // Loading state while fetching
//     }

//     return (
//         <div>
//             <h2 className="text-xl">Seat Price:</h2>
//             <p>Price: ${price}</p>  {/* Display the seat price */}
//         </div>
//     );
// };


 
// import { useEffect, useState } from 'react';
// import { getSeatPrices } from '../../services/seatApi.js'; // Adjust the import path as needed

// export const SeatPrices = ({ seatId }) => {
//     const [price, setPrice] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getPrice = async () => {
//             try {
//                 const response = await getSeatPrices(seatId);

//                 // If the response contains an object like { price: 100 }, handle accordingly
//                 if (response && response.price) {
//                     setPrice(response.price);
//                 } else {
//                     setError('Price data is unavailable');
//                 }
//             } catch (error) {
//                 setError('Failed to fetch seat price');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getPrice();
//     }, [seatId]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h3>Seat: {seatId}</h3>
//             {price !== null ? <p>Price: ${price}</p> : <p>Price data not available</p>}
//         </div>
//     );
// };

 
import { useEffect, useState } from 'react';
import { getSeatPrices } from '../../services/seatApi'; // Assuming you have an API service to get seat price data

export const SeatPrices = ({ seatId }) => {
  const [seatPrice, setSeatPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeatPrice = async () => {
      try {
        const response = await getSeatPrices(seatId);
        console.log('Seat Price Data:', response);

        if (response.error) {
          setError(response.error.message); // Set error message from the response
        } else {
          setSeatPrice(response.price); // Assuming `response.price` holds the price data
        }
      } catch (err) {
        console.error('Error fetching seat price:', err);
        setError('Failed to load seat price'); // Generic error message
      }
    };

    fetchSeatPrice();
  }, [seatId]);

  if (error) {
    return <p className="text-red-600">{error}</p>; // Display error in red text
  }

  return seatPrice !== null ? (
    <p className="text-lg font-semibold">Price for seat {seatId}: ₹{seatPrice}</p>
  ) : (
    <p>Loading seat price...</p> // Loading message
  );
};
