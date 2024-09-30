
// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { SeatsGrid } from './SeatsGrid.jsx';

// export const SeatsSelectionPage = () => {
//     const { theaterId } = useParams(); 
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const navigate = useNavigate();

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
//             navigate(`/user/payment`, { state: { selectedSeats, theaterId } });
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//             <SeatsGrid theaterId={theaterId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
//             <div className="mt-4 text-center" aria-live="polite">
//                 <h2 className="text-xl">Selected Seats:</h2>
//                 <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
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
// import { getSeatPricesForShowtime} from '../../services/seatApi.js'; // Adjust the path accordingly

// export const SeatsSelectionPage = () => {
//     const { theaterId } = useParams(); 
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]); // State for seat prices
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             const prices = await getSeatPricesForShowtime(theaterId);
//             if (!prices.error) {
//                 setSeatPrices(prices); // Update state with fetched prices
//             } else {
//                 console.error(prices.error); // Handle error if needed
//             }
//         };

//         fetchSeatPrices();
//     }, [theaterId]);

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
//                     {seatPrices.length > 0 
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
// import { getSeatPricesForShowtime } from '../../services/seatApi.js'; // Adjust the path accordingly

// export const SeatsSelectionPage = () => {
//     const { theaterId, showId } = useParams();  // Retrieve both theaterId and showId from URL params
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]); // State for seat prices
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             try {
//                 const prices = await getSeatPricesForShowtime(theaterId, showId);
//                 if (!prices.error) {
//                     setSeatPrices(prices); 
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error.message);
//                 // You can also display a user-friendly message or redirect if necessary
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
//                     {seatPrices.length > 0 
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
// import { getSeatPricesByTheater } from '../../services/seatApi.js'; // Adjust the path accordingly

// export const SeatsSelectionPage = () => {
//     const { theaterId } = useParams();  // Retrieve only theaterId from URL params
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrices, setSeatPrices] = useState([]); // State for seat prices
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSeatPrices = async () => {
//             try {
//                 const prices = await getSeatPricesByTheater(theaterId);  // Fetch seat prices by theaterId only
//                 if (!prices.error) {
//                     setSeatPrices(prices); 
//                 }
//             } catch (error) {
//                 console.error('Error fetching seat prices:', error.message);
//                 // You can also display a user-friendly message or redirect if necessary
//             }
//         };
//         fetchSeatPrices();
//     }, [theaterId]);
    

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
//                     {seatPrices.length > 0 
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


import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { SeatsGrid } from './SeatsGrid.jsx';
import { getSeatPricesByTheater } from '../../services/seatApi.js'; // Adjust the path accordingly

export const SeatsSelectionPage = () => {
    const { theaterId } = useParams();  // Retrieve only theaterId from URL params
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatPrices, setSeatPrices] = useState([]); // State for seat prices
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSeatPrices = async () => {
            try {
                const prices = await getSeatPricesByTheater(theaterId);  // Fetch seat prices by theaterId only
                
                // Log the prices to see what you are getting
                console.log('Seat prices response:', prices);
                
                if (Array.isArray(prices)) {
                    setSeatPrices(prices); 
                } else {
                    console.error('Seat prices data is not an array:', prices);
                }
            } catch (error) {
                console.error('Error fetching seat prices:', error.message);
            }
        };
        fetchSeatPrices();
    }, [theaterId]);

    const handleSeatSelect = (seatNumber) => {
        setSelectedSeats((prev) => {
            if (prev.includes(seatNumber)) {
                // Deselect the seat
                return prev.filter((seat) => seat !== seatNumber);
            }
            // Select the seat
            return [...prev, seatNumber];
        });
    };

    const handleProceedToPayment = () => {
        if (selectedSeats.length > 0) {
            navigate(`/user/payment`, { state: { selectedSeats, theaterId, seatPrices } });
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
            <SeatsGrid theaterId={theaterId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
            <div className="mt-4 text-center" aria-live="polite">
                <h2 className="text-xl">Selected Seats:</h2>
                <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
                <h2 className="text-xl">Seat Prices:</h2>
                <p>
                    {Array.isArray(seatPrices) && seatPrices.length > 0 
                        ? seatPrices.map(seat => `Seat ${seat.seatNumber}: $${seat.price}`).join(', ')
                        : 'Prices not available'}
                </p>
                <button
                    className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    disabled={selectedSeats.length === 0}
                    onClick={handleProceedToPayment}
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};
