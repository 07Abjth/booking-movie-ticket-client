// // src/context/BookingContext.jsx
// import React, { createContext, useContext, useState } from 'react';

// const BookingContext = createContext();

// export const BookingProvider = ({ children }) => {
//     const [bookingDetails, setBookingDetails] = useState({});
  
//     return (
//         <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
//             {children}
//         </BookingContext.Provider>
//     );
// };

//  export const useBooking = () => useContext(BookingContext); 


// src/context/BookingContext.jsx
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [bookingDetails, setBookingDetails] = useState({
        selectedSeats: [],
        movieDetails: {},
        theaterDetails: {},
        totalAmount: 0,
    });

    return (
        <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBookingContext = () => {
    return useContext(BookingContext);
};
