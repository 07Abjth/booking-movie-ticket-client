// import React, { useEffect, useState } from 'react';

// export const MyBookingPage = ({ sessionId }) => {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const response = await fetch(`http://localhost:4000/api/v1/bookings-by-session?session_id=${sessionId}`);
//                 const data = await response.json();

//                 if (data.success) {
//                     setBookings(data.bookings);
//                 } else {
//                     setError(data.message);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch bookings.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, [sessionId]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Booking Details</h2>
//             {bookings.map((booking) => (
//                 <div key={booking._id}>
//                     <p><strong>Movie:</strong> {booking.movie.title}</p>
//                     <p><strong>Theater:</strong> {booking.theater.name}</p>
//                     <p><strong>Seats:</strong> {booking.selectedSeats.map(seat => seat.name).join(', ')}</p>
//                     <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
//                     <p><strong>Status:</strong> {booking.paymentStatus}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };import React, { useEffect, useState } from 'react';


// import { useSearchParams } from 'react-router-dom';
// import { TicketDownloadButton } from '../../components/TicketDownloadButton.jsx'; // Adjust the path
// import axios from 'axios';

// export const BookingDetails = ({ sessionId: propSessionId }) => {
//     const [searchParams] = useSearchParams();
//     const sessionId = propSessionId || searchParams.get('session_id'); // Use prop or fallback to query param
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!sessionId) {
//             setError('Session ID is missing.');
//             setLoading(false);
//             return;
//         }

//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:4000/api/v1/payment/bookings-by-session`,
//                     { params: { session_id: sessionId } }
//                 );

//                 if (response.data.success) {
//                     setBookings(response.data.bookings);
//                 } else {
//                     setError(response.data.message);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch bookings. Please try again.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, [sessionId]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Booking Details</h2>
//             {bookings.length === 0 ? (
//                 <p>No bookings found for this session.</p>
//             ) : (
//                 bookings.map((booking) => (
//                     <div key={booking._id}>
//                         <p><strong>Movie:</strong> {booking.movie.title}</p>
//                         <p><strong>Theater:</strong> {booking.theater.name}</p>
//                         <p><strong>Seats:</strong> {booking.selectedSeats.join(', ')}</p>
//                         <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
//                         <TicketDownloadButton booking={booking} />
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { TicketDownloadButton } from '../../components/TicketDownloadButton.jsx';
// import axios from 'axios';

// export const BookingDetails = ({ sessionId: propSessionId }) => {
//     const [searchParams] = useSearchParams();
//     const sessionId = propSessionId || searchParams.get('session_id'); // Use prop or fallback to query param
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         console.log("Prop Session ID:", propSessionId);
//         console.log("Search Param Session ID:", searchParams.get("session_id"));

//         if (!sessionId) {
//             setError('Session ID is missing. Please ensure it is passed correctly.');
//             setLoading(false);
//             return;
//         }

//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:4000/api/v1/payment/bookings-by-session`,
//                     { params: { session_id: sessionId } }
//                 );

//                 if (response.data.success) {
//                     setBookings(response.data.bookings);
//                 } else {
//                     setError(response.data.message);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch bookings. Please try again.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, [sessionId]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Booking Details</h2>
//             {bookings.length === 0 ? (
//                 <p>No bookings found for this session.</p>
//             ) : (
//                 bookings.map((booking) => (
//                     <div key={booking._id}>
//                         <p><strong>Movie:</strong> {booking.movie.title}</p>
//                         <p><strong>Theater:</strong> {booking.theater.name}</p>
//                         <p><strong>Seats:</strong> {booking.selectedSeats.join(', ')}</p>
//                         <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
//                         <TicketDownloadButton booking={booking} />
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };


// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';
// import { TicketDownloadButton } from '../../components/TicketDownloadButton.jsx';

// export const BookingDetails = ({ sessionId: propSessionId }) => {
//     const [searchParams] = useSearchParams();
//     const sessionId = propSessionId || searchParams.get('session_id');
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//     console.log("Prop Session ID:", propSessionId);
//     console.log("Search Params:", searchParams.toString());
//     console.log("Session ID from URL:", searchParams.get("session_id"));

//     const sessionId = propSessionId || searchParams.get("session_id");

//     if (!sessionId) {
//         setError(
//             'Session ID is missing. Please ensure it is passed as a prop or included in the URL query parameters (session_id).'
//         );
//         setLoading(false);
//         return;
//     }

//     // Fetch bookings if sessionId is valid
//     const fetchBookings = async () => {
//         try {
//             const response = await axios.get(
//                 `http://localhost:4000/api/v1/payment/bookings-by-session/${sessionId}`
//             );
            

//             if (response.data.success) {
//                 setBookings(response.data.bookings);
//             } else {
//                 setError(response.data.message);
//             }
//         } catch (err) {
//             setError('Failed to fetch bookings. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchBookings();
// }, [propSessionId, searchParams]);


//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Booking Details</h2>
//             {bookings.length === 0 ? (
//                 <p>No bookings found for this session.</p>
//             ) : (
//                 bookings.map((booking) => (
//                     <div key={booking._id}>
//                         <p><strong>Movie:</strong> {booking.movie.title}</p>
//                         <p><strong>Theater:</strong> {booking.theater.name}</p>
//                         <p><strong>Seats:</strong> {booking.selectedSeats.join(', ')}</p>
//                         <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
//                         <TicketDownloadButton booking={booking} />
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };


// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';

// export const BookingDetails = ({ sessionId: propSessionId }) => {
//     const [searchParams] = useSearchParams();
//     const sessionId = propSessionId || searchParams.get('session_id');
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         console.log("Final Session ID:", sessionId);

//         if (!sessionId) {
//             setError('Session ID is missing. Please ensure it is passed as a prop or included in the URL query parameters (session_id).');
//             setLoading(false);
//             return;
//         }

//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:4000/api/v1/payment/bookings-by-session`,
//                     { params: { session_id: sessionId } }
//                 );

//                 if (response.data.success) {
//                     setBookings(response.data.bookings);
//                 } else {
//                     setError(response.data.message);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch bookings. Please try again.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBookings();
//     }, [sessionId]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Booking Details</h2>
//             {bookings.length === 0 ? (
//                 <p>No bookings found for this session.</p>
//             ) : (
//                 bookings.map((booking) => (
//                     <div key={booking._id}>
//                         <p><strong>Movie:</strong> {booking.movie.title}</p>
//                         <p><strong>Theater:</strong> {booking.theater.name}</p>
//                         <p><strong>Seats:</strong> {booking.selectedSeats.join(', ')}</p>
//                         <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const BookingDetails = ({ sessionId: propSessionId }) => {
    const [searchParams] = useSearchParams();
    const sessionId = propSessionId || searchParams.get('session_id');
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!sessionId) {
            setError('Session ID is missing. Please ensure it is passed as a prop or included in the URL query parameters (session_id).');
            setLoading(false);
            return;
        }

        const fetchBookings = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/v1/payment/bookings-by-session`,
                    { params: { session_id: sessionId } }
                );

                if (response.data.success) {
                    setBookings(response.data.bookings);
                } else {
                    setError(response.data.message || 'Failed to fetch bookings.');
                }
            } catch (err) {
                setError(`Failed to fetch bookings. Error: ${err.response?.data?.message || err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [sessionId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Booking Details</h2>
            {bookings.length === 0 ? (
                <p>No bookings found for this session.</p>
            ) : (
                bookings.map(({ _id, movie, theater, selectedSeats, totalAmount }) => (
                    <div key={_id}>
                        <p><strong>Movie:</strong> {movie.title}</p>
                        <p><strong>Theater:</strong> {theater.name}</p>
                        <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
                        <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
                    </div>
                ))
            )}
        </div>
    );
};
