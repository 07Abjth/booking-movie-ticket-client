
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js'; // Adjust the path accordingly

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId } = useParams();  // Retrieve both theaterId and showId from URL params
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]); // State for seat prices
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             try {
//                 const prices = await getSeatPrices(theaterId, showId);  // Fetch seat prices by theaterId and showId
                
//                 // Log the prices to see what you are getting
//                 console.log('Seat prices response:', prices);
                
//                 if (Array.isArray(prices)) {
//                     setSeatPrices(prices); 
//                 } else {
//                     console.error('Seat prices data is not an array:', prices);
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error.message);
//             }
//         };
//         fetchSeatPrices();
//     }, [theaterId, showId]);

//     const handleSeatSelect = (seatNumber) => {
//         setSelectedSeats((prev) => {
//             if (prev.includes(seatNumber)) {
//                 // Deselect the seat
//                 return prev.filter((seat) => seat !== seatNumber);
//             }
//             // Select the seat
//             return [...prev, seatNumber];
//         });
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {Array.isArray(seatPrices) && seatPrices.length > 0 
//                         ? seatPrices.map(seat => `Seat ${seat.seatNumber}: $${seat.price}`).join(', ')
//                         : 'Prices not available'}
//                 </p>
//                 <button
//                     className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
//                     disabled={selectedSeats.length === 0}
//                     onClick={handleProceedToPayment}
//                 >
//                     Proceed to Payment
//                 </button>
//             </div>
//         </div>
//     );
// };


// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js'; // Adjust the path accordingly

// export const SeatsSelectionPage = () => {
//     const {  showId, seatId,  theaterId,  } = useParams();  // Retrieve both theaterId and showId from URL params
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]); // State for seat prices
//     const [error, setError] = useState(null); // State for error handling
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             try {
//                 console.log('Fetching seat prices for:', { showId, seatId }); // Debugging output
//                 const prices = await getSeatPrices(  showId, seatId);  // Fetch seat prices by theaterId and showId
                
//                 // Log the response to see what you are getting
//                 console.log('Seat prices response:', prices);
                
//                 // Check if prices.data exists and is an array; if not, set to prices.data directly
//                 if (prices.success) {
//                     const fetchedPrices = Array.isArray(prices.data) ? prices.data : [prices.data]; 
//                     setSeatPrices(fetchedPrices);
//                 } else {
//                     console.error('Seat prices request failed:', prices);
//                     setError(prices.message || 'Error fetching seat prices.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error.response ? error.response.data : error.message);
//                 setError('Error fetching seat prices. Please try again later.');
//             }
//         };
//         fetchSeatPrices();
//     }, [ showId, seatId]);
    

//     const handleSeatSelect = (seatNumber) => {
//         setSelectedSeats((prev) => {
//             if (prev.includes(seatNumber)) {
//                 // Deselect the seat
//                 return prev.filter((seat) => seat !== seatNumber);
//             }
//             // Select the seat
//             return [...prev, seatNumber];
//         });
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {Array.isArray(seatPrices) && seatPrices.length > 0 
//                         ? seatPrices.map(seat => `Seat ${seat.seatNumber}: $${seat.price}`).join(', ')
//                         : 'Prices not available'}
//                 </p>
//                 {error && <p className="text-red-500">{error}</p>} {/* Display error if exists */}
//                 <button
//                     className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
//                     disabled={selectedSeats.length === 0}
//                     onClick={handleProceedToPayment}
//                 >
//                     Proceed to Payment
//                 </button>
//             </div>
//         </div>
//     );
// };





// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js';

// export const SeatsSelectionPage = () => {
//     const { theaterId, seatId } = useParams(); // Ensure all params are retrieved
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             try {
//                 console.log('Fetching seat prices for:', { seatId }); // Debugging output
//                 const prices = await getSeatPrices( seatId); // Correct usage of parameters

//                 console.log('Seat prices response:', prices);
                
//                 if (prices.success) {
//                     const fetchedPrices = Array.isArray(prices.data) ? prices.data : [prices.data];
//                     setSeatPrices(fetchedPrices);
//                 } else {
//                     console.error('Seat prices request failed:', prices);
//                     setError(prices.message || 'Error fetching seat prices.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error.response ? error.response.data : error.message);
//                 setError('Error fetching seat prices. Please try again later.');
//             }
//         };
//         fetchSeatPrices();
//     }, [theaterId, seatId]); // Include all necessary dependencies
    
//     const handleSeatSelect = (seatNumber) => {
//         setSelectedSeats((prev) => prev.includes(seatNumber) 
//             ? prev.filter((seat) => seat !== seatNumber) 
//             : [...prev, seatNumber]);
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {seatPrices.length > 0 
//                         ? seatPrices.map(seat => `Seat ${seat.seatNumber}: $${seat.price}`).join(', ')
//                         : 'Prices not available'}
//                 </p>
//                 {error && <p className="text-red-500">{error}</p>}
//                 <button
//                     className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
//                     disabled={selectedSeats.length === 0}
//                     onClick={handleProceedToPayment}
//                 >
//                     Proceed to Payment
//                 </button>
//             </div>
//         </div>
//     );
// };

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js';

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId, seatId } = useParams(); // Extract showId here
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             if (!showId || !seatId) {
//                 console.error('showId or seatId is undefined. Cannot fetch prices.');
//                 return; // Exit if showId or seatId is undefined
//             }
//             try {
//                 console.log('Fetching seat prices for:', { theaterId, showId, seatId });
//                 const prices = await getSeatPrices(theaterId, showId, seatId); // Pass the correct parameters

//                 console.log('Seat prices response:', prices);
                
//                 if (prices.success) {
//                     const fetchedPrices = Array.isArray(prices.data) ? prices.data : [prices.data];
//                     setSeatPrices(fetchedPrices);
//                 } else {
//                     console.error('Seat prices request failed:', prices);
//                     setError(prices.message || 'Error fetching seat prices.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error.response ? error.response.data : error.message);
//                 setError('Error fetching seat prices. Please try again later.');
//             }
//         };
//         fetchSeatPrices();
//     }, [theaterId, showId, seatId]); // Include showId in dependencies
    
//     const handleSeatSelect = (seatNumber) => {
//         setSelectedSeats((prev) => prev.includes(seatNumber) 
//             ? prev.filter((seat) => seat !== seatNumber) 
//             : [...prev, seatNumber]);
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {seatPrices.length > 0 
//                         ? seatPrices.map(seat => `Seat ${seat.number}: $${seat.price}`).join(', ')
//                         : 'No seat prices available'}
//                 </p>
//             </div>
//             <button onClick={handleProceedToPayment} disabled={selectedSeats.length === 0}>
//                 Proceed to Payment
//             </button>
//             {error && <div className="text-red-500">{error}</div>} {/* Display error messages */}
//         </div>
//     );
// };


// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { SeatsGrid } from './SeatsGrid.jsx';
// import {  getSeatsAndSeatsPriceFromTheaterAndShowId } from '../../services/seatApi.js';

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId } = useParams();
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!theaterId || !showId ) {
//             console.error('Invalid parameters:', { theaterId, showId });
//             setError('Invalid parameters. Please try again.');
//             return;
//         }

//         const fetchSeatPrices = async () => {
//             try {
//                 console.log('Fetching seat prices for:', { theaterId, showId });
//                 const response = await getSeatsAndSeatsPriceFromTheaterAndShowId(theaterId, showId);
//                 console.log('Seat prices response:', response);
                
//                 if (response.success) {
//                     const fetchedPrices = Array.isArray(response.data) ? response.data : [response.data];
//                     setSeatPrices(fetchedPrices);
//                 } else {
//                     console.error('Seat prices request failed:', response.message);
//                     setError(response.message || 'Error fetching seat prices.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error);
//                 setError('Error fetching seat prices. Please try again later.');
//             }
//         };

//         fetchSeatPrices();
//     }, [theaterId, showId]);

//     const handleSeatSelect = (seatNumber) => {
//         setSelectedSeats((prev) =>
//             prev.includes(seatNumber)
//                 ? prev.filter((seat) => seat !== seatNumber)
//                 : [...prev, seatNumber]
//         );
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} showId={showId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {seatPrices.length > 0
//                         ? seatPrices.map((seat) => `Seat ${seat.number}: $${seat.price}`).join(', ')
//                         : 'No seat prices available'}
//                 </p>
//             </div>
//             <button onClick={handleProceedToPayment} disabled={selectedSeats.length === 0}>
//                 Proceed to Payment
//             </button>
//             {error && <div className="text-red-500">{error}</div>} {/* Display error messages */}
//         </div>
//     );
// };


// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js'; // Updated to use the new function

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId } = useParams();
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!theaterId || !showId) {
//             console.error('Invalid parameters:', { theaterId, showId });
//             setError('Invalid parameters. Please try again.');
//             return;
//         }

//         const fetchSeatPrices = async () => {
//             try {
//                 console.log('Fetching seat prices for show:', { showId });
//                 const response = await getSeatPrices(showId); // Updated function call
                
//                 console.log('Seat prices response:', response);
                
//                 if (response.success) {
//                     const fetchedPrices = Array.isArray(response.data.seats) ? response.data.seats : [response.data.seats];
//                     setSeatPrices(fetchedPrices);
//                 } else {
//                     console.error('Seat prices request failed:', response.message);
//                     setError(response.message || 'Error fetching seat prices.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error);
//                 setError('Error fetching seat prices. Please try again later.');
//             }
//         };

//         fetchSeatPrices();
//     }, [theaterId, showId]);

//     const handleSeatSelect = (seatNumber) => {
//         setSelectedSeats((prev) =>
//             prev.includes(seatNumber)
//                 ? prev.filter((seat) => seat !== seatNumber)
//                 : [...prev, seatNumber]
//         );
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} showId={showId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {seatPrices.length > 0
//                         ? seatPrices.map((seat) => `Seat ${seat.seatNumber}: $${seat.price}`).join(', ')
//                         : 'No seat prices available'}
//                 </p>
//             </div>
//             <button onClick={handleProceedToPayment} disabled={selectedSeats.length === 0}>
//                 Proceed to Payment
//             </button>
//             {error && <div className="text-red-500">{error}</div>} {/* Display error messages */}
//         </div>
//     );
// };

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js';

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId } = useParams();
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]);
//     const [fetchedPrices, setFetchedPrices] = useState(new Set());
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async (seatId) => {
//             if (!seatId || fetchedPrices.has(seatId)) return;
//             try {
//                 console.log('Fetching seat price for seat:', { seatId });
//                 const response = await getSeatPrices(seatId);
                
//                 console.log('Seat price response:', response);
                
//                 if (response.success) {
//                     setFetchedPrices((prev) => new Set(prev).add(seatId));
//                     setSeatPrices((prev) => [...prev, { seatId, price: response.price }]);
//                 } else {
//                     console.error('Seat price request failed:', response.message);
//                     setError(response.message || 'Error fetching seat price.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat price:', error);
//                 setError('Error fetching seat price. Please try again later.');
//             }
//         };

//         selectedSeats.forEach(seatId => fetchSeatPrices(seatId));
//     }, [selectedSeats]);

//     const handleSeatSelect = (seatId) => {
//         setSelectedSeats((prev) => {
//             const newSelectedSeats = prev.includes(seatId)
//                 ? prev.filter((seat) => seat !== seatId)
//                 : [...prev, seatId];
            
//             console.log('Updated selected seats:', newSelectedSeats); // Debug log
//             return newSelectedSeats;
//         });
//     };

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} showId={showId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//                 <h2 className="text-xl">Seat Prices:</h2>
//                 <p>
//                     {seatPrices.length > 0
//                         ? seatPrices.map(({ seatId, price }) => `Seat ${seatId}: $${price}`).join(', ')
//                         : 'No seat prices available'}
//                 </p>
//             </div>
//             <button onClick={handleProceedToPayment} disabled={selectedSeats.length === 0}>
//                 Proceed to Payment
//             </button>
//             {error && <div className="text-red-500">{error}</div>}
//         </div>
//     );
// };





// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { SeatsGrid } from './SeatsGrid.jsx';
// import { getSeatPrices } from '../../services/seatApi.js';
// import { getMovieDetails } from '../../services/movieApi.js';
// import { getTheaterDetails } from '../../services/theaterApi.js';
// import { getShowById } from '../../services/showApi.js';

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId, movieId } = useParams();
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]);
//     const [fetchedPrices, setFetchedPrices] = useState(new Set());
//     const [error, setError] = useState(null);
//     const [movieDetails, setMovieDetails] = useState({});
//     const [theaterDetails, setTheaterDetails] = useState({});
//     const [showDetails, setShowDetails] = useState({});
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchInitialData = async () => {
//             try {
//                 const movie = await getMovieDetails(movieId);
//                 const theater = await getTheaterDetails(theaterId);
//                 const show = await getShowById(showId);

//                 setMovieDetails(movie);
//                 setTheaterDetails(theater);
//                 setShowDetails(show);
//             } catch (err) {
//                 setError("Failed to load initial data. Please try again.");
//                 console.error("Error fetching initial data:", err);
//             }
//         };
//         fetchInitialData();
//     }, [theaterId, showId, movieId]);

//     useEffect(() => {
//         const fetchSeatPrices = async (seatId) => {
//             if (!seatId || fetchedPrices.has(seatId)) return;
//             try {
//                 const response = await getSeatPrices(seatId);
//                 if (response.success) {
//                     setFetchedPrices((prev) => new Set(prev).add(seatId));
//                     setSeatPrices((prev) => [...prev, { seatId, price: response.price }]);
//                 } else {
//                     setError(response.message || 'Error fetching seat price.');
//                 }
//             } catch (error) {
//                 setError('Error fetching seat price. Please try again later.');
//                 console.error('Error fetching seat price:', error);
//             }
//         };

//         selectedSeats.forEach(seatId => fetchSeatPrices(seatId));
//     }, [selectedSeats, fetchedPrices]);

//     const handleSeatSelect = (seatId) => {
//         setSelectedSeats((prev) => {
//             const newSelectedSeats = prev.includes(seatId)
//                 ? prev.filter((seat) => seat !== seatId)
//                 : [...prev, seatId];
//             return newSelectedSeats;
//         });
//     };

//     const totalAmount = seatPrices
//         .filter(({ seatId }) => selectedSeats.includes(seatId))
//         .reduce((total, { price }) => total + price, 0);

//     const handleProceedToPayment = () => {
//         if (selectedSeats.length > 0) {
//             navigate(`/user/seats/${theaterId}/${showId}/${movieId}/payment`, {
//                 state: {
//                     selectedSeats,
//                     movieDetails,
//                     theaterDetails,
//                     showTime: showDetails.time,
//                     totalAmount,
//                 }
//             });
//         } else {
//             setError("Please select at least one seat.");
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} showId={showId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//             </div>
//             <button 
//                 onClick={handleProceedToPayment} 
//                 disabled={selectedSeats.length === 0} 
//                 className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//             >
//                 Proceed to Payment {totalAmount > 0 && ` - ₹${totalAmount}`}
//             </button>
//             {error && <div className="text-red-500">{error}</div>}
//         </div>
//     );
// };



import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SeatsGrid } from './SeatsGrid.jsx';
import { getSeatPrices } from '../../services/seatApi.js';
import { getMovieDetails } from '../../services/movieApi.js';
import { getTheaterDetails } from '../../services/theaterApi.js';
import { getShowById } from '../../services/showApi.js';

export const SeatsSelectionPage = () => {
    const { theaterId, showId, movieId } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatPrices, setSeatPrices] = useState([]);
    const [fetchedPrices, setFetchedPrices] = useState(new Set());
    const [error, setError] = useState(null);
    const [movieDetails, setMovieDetails] = useState({});
    const [theaterDetails, setTheaterDetails] = useState({});
    const [showDetails, setShowDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch initial movie, theater, and show data
    useEffect(() => {
        const fetchInitialData = async () => {
            setLoading(true);
            try {
                const [movie, theater, show] = await Promise.all([
                    getMovieDetails(movieId),
                    getTheaterDetails(theaterId),
                    getShowById(showId),
                ]);

                if (movie.success) setMovieDetails(movie.data);
                if (theater.success) setTheaterDetails(theater.data);
                if (show.success) setShowDetails(show.data); // Ensure show.data has the required structure
            } catch (err) {
                setError("Failed to load initial data. Please try again.");
                console.error("Error fetching initial data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchInitialData();
    }, [theaterId, showId, movieId]);

    // Fetch seat prices for selected seats
    useEffect(() => {
        const fetchSeatPrices = async (seatId) => {
            if (!seatId || fetchedPrices.has(seatId)) return;
            try {
                const response = await getSeatPrices(seatId);
                if (response.success) {
                    setFetchedPrices((prev) => new Set(prev).add(seatId));
                    setSeatPrices((prev) => [...prev, { seatId, price: response.price }]);
                } else {
                    setError(response.message || 'Error fetching seat price.');
                }
            } catch (error) {
                setError('Error fetching seat price. Please try again later.');
                console.error('Error fetching seat price:', error);
            }
        };

        selectedSeats.forEach(seatId => fetchSeatPrices(seatId));
    }, [selectedSeats, fetchedPrices]);

    // Handle seat selection
    const handleSeatSelect = (seatId) => {
        setSelectedSeats((prev) => {
            const newSelectedSeats = prev.includes(seatId)
                ? prev.filter((seat) => seat !== seatId)
                : [...prev, seatId];
            return newSelectedSeats;
        });
    };

    // Calculate total amount based on selected seats
    const totalAmount = seatPrices
        .filter(({ seatId }) => selectedSeats.includes(seatId))
        .reduce((total, { price }) => total + price, 0);

    // Handle navigation to the payment page
    const handleProceedToPayment = () => {
        if (selectedSeats.length > 0) {
            navigate(`/user/seats/${theaterId}/${showId}/${movieId}/payment`, {
                state: {
                    selectedSeats,
                    movieDetails,
                    theaterDetails,
                    showTime: showDetails.time || 'N/A', // Ensure showDetails has a 'time' property
                    totalAmount,
                }
            });
        } else {
            setError("Please select at least one seat.");
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="mb-4 text-center">
                        <h2 className="text-xl">{movieDetails.title || 'Movie Title Not Available'}</h2>
                        <p>{theaterDetails.name || 'Theater Name Not Available'}</p>
                        <p>{showDetails.time ? `Show Time: ${showDetails.time}` : 'Show Time: N/A'}</p>
                    </div>
                    <SeatsGrid theaterId={theaterId} showId={showId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
                    <div className="mt-4 text-center" aria-live="polite">
                        <h2 className="text-xl">Selected Seats:</h2>
                        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
                        <p>Total Amount: ₹{totalAmount > 0 ? totalAmount : '0.00'}</p>
                    </div>
                    <button 
                        onClick={handleProceedToPayment} 
                        disabled={selectedSeats.length === 0} 
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Proceed to Payment {totalAmount > 0 && ` - ₹${totalAmount}`}
                    </button>
                    {error && <div className="text-red-500">{error}</div>}
                </>
            )}
        </div>
    );
};










