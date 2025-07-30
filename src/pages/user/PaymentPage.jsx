


// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { makePayment } from '../../services/paymentApi'; // Adjust path according to your project

// // PaymentPage component
// export const PaymentPage = () => {
//     const location = useLocation();
//     const {
//         selectedSeats = [], // Default to empty array if undefined
//         movieDetails: { data: movieDetails } = {},
//         theaterDetails: { data: theaterDetails } = {},
//         showTime = 'N/A', // Default to 'N/A' if undefined
//         totalAmount = 0 // Default to 0 if undefined
//     } = location.state || {};

//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         console.log('PaymentPage loaded with initial state:', {
//             selectedSeats, 
//             movieDetails, 
//             theaterDetails, 
//             showTime, 
//             totalAmount
//         });

//         // Check for missing data
//         if (!selectedSeats.length || !movieDetails || !theaterDetails || !showTime || totalAmount <= 0) {
//             toast.error("Some data is missing. Please go back and select your options again.");
//             console.warn("Warning: Missing data detected. Redirect or prompt user action.");
//         }
//     }, [selectedSeats, movieDetails, theaterDetails, showTime, totalAmount]);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true); // Show loading state while processing payment

//             // Prepare selected show details
//             const selectedShow = {
//                 movie: movieDetails,
//                 theater: theaterDetails,
//                 showTime,
//             };

//             // Call the makePayment function to initiate the Stripe checkout session
//             await makePayment(selectedSeats, selectedShow);

//             // Stripe will handle the redirect, so no need for additional logic here
//             toast.success('Payment successful!'); // Notify user of successful payment
//         } catch (error) {
//             toast.error(`Payment failed: ${error.message}`);
//         } finally {
//             setIsLoading(false); // Reset loading state
//         }
//     };

//     return (
//         <div className="payment-page-container p-5">
//             <h2 className="text-2xl font-bold">Proceed to Payment</h2>
//             <p><strong>Movie:</strong> {movieDetails?.title || "N/A"}</p>
//             <p><strong>Theater:</strong> {theaterDetails?.name || "N/A"}</p>
//             <p><strong>Show Time:</strong> {showTime}</p>
//             <p><strong>Selected Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : "None selected"}</p>
//             <p><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>

//             <button
//                 className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
//                 onClick={handlePayment}
//                 disabled={isLoading} // Disable button while loading
//             >
//                 {isLoading ? 'Processing...' : 'Pay with Stripe'}
//             </button>
//         </div>
//     );
// };





// // PaymentPage.jsx
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { makePayment } from '../../services/paymentApi'; // Adjust path according to your project

// export const PaymentPage = () => {
//     const location = useLocation();
//     const {
//         selectedSeats = [],
//         movieDetails: { data: movieDetails } = {},
//         theaterDetails: { data: theaterDetails } = {},
//         showDetails = {},
//         totalAmount = 0
//     } = location.state || {};

//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         console.log('PaymentPage loaded with initial state:', {
//             selectedSeats,
//             movieDetails,
//             theaterDetails,
//             showDetails,
//             totalAmount
//         });

//         // Check for missing data
//         if (!selectedSeats.length || !movieDetails || !theaterDetails || !showDetails || totalAmount <= 0) {
//             toast.error("Some data is missing. Please go back and select your options again.");
//             console.warn("Warning: Missing data detected. Redirect or prompt user action.");
//         }
//     }, [selectedSeats, movieDetails, theaterDetails, showDetails, totalAmount]);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true); // Show loading state while processing payment

//             // Prepare selected show details
//             const selectedShow = {
//                 movie: movieDetails,
//                 theater: theaterDetails,
//                 showTime: showDetails.time || 'N/A', // Use the time from showDetails
//             };

//             // Call the makePayment function to initiate the Stripe checkout session
//             await makePayment(selectedSeats, selectedShow);

//             // Stripe will handle the redirect, so no need for additional logic here
//             toast.success('Payment successful!'); // Notify user of successful payment
//         } catch (error) {
//             toast.error(`Payment failed: ${error.message}`);
//         } finally {
//             setIsLoading(false); // Reset loading state
//         }
//     };

//     return (
//         <div className="payment-page-container p-5">
//             <h2 className="text-2xl font-bold">Proceed to Payment</h2>
//             <p><strong>Movie:</strong> {movieDetails?.title || "N/A"}</p>
//             <p><strong>Theater:</strong> {theaterDetails?.name || "N/A"}</p>
//             <p><strong>Show Time:</strong> {showDetails.time || 'N/A'}</p>
//             <p><strong>Selected Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : "None selected"}</p>
//             <p><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>

//             <button
//                 className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
//                 onClick={handlePayment}
//                 disabled={isLoading} // Disable button while loading
//             >
//                 {isLoading ? 'Processing...' : 'Pay with Stripe'}
//             </button>
//         </div>
//     );
// };

 



// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { makePayment } from '../../services/paymentApi'; // Adjust path according to your project

// // PaymentPage component
// export const PaymentPage = () => {
//     const location = useLocation();
//     const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount } = location.state || {};

//     const [isLoading, setIsLoading] = useState(false);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true); // Show loading state while processing payment

//             // Prepare selected show details
//             const selectedShow = {
//                 movie: movieDetails,
//                 theater: theaterDetails,
//                 showTime,
//             };

//             // Check if selectedSeats and selectedShow are defined
//             if (!selectedSeats || !selectedShow) {
//                 throw new Error("Invalid selection. Please try again.");
//             }

//             // Call the makePayment function to initiate the Stripe checkout session
//             await makePayment(selectedSeats, selectedShow);

//             // Stripe will handle the redirect, so no need for additional logic here
//         } catch (error) {
//             toast.error(`Payment failed: ${error.message}`);
//         } finally {
//             setIsLoading(false); // Reset loading state
//         }
//     };

//     return (
//         <div className="payment-page-container">
//             <h2>Proceed to Payment</h2>
//             <p>Movie: {movieDetails?.title}</p>
//             <p>Theater: {theaterDetails?.name}</p>
//             <p>Show Time: {showTime}</p>
//             <p>Selected Seats: {selectedSeats.join(', ')}</p>
//             <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>

//             <button
//                 className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
//                 onClick={handlePayment}
//                 disabled={isLoading} // Disable button while loading
//             >
//                 {isLoading ? 'Processing...' : 'Pay with Stripe'}
//             </button>
//         </div>
//     );
// };










// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { makePayment } from '../../services/paymentApi.js';

// export const PaymentPage = () => {
//     const location = useLocation();
//     const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount, seatPrices } = location.state || {};
//     const [isLoading, setIsLoading] = useState(false);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true);
    
//             if (!selectedSeats || !seatPrices || selectedSeats.length === 0) {
//                 throw new Error("Invalid selection. Please try again.");
//             }
    
//             console.log("Initiating Payment with:", { selectedSeats, seatPrices, totalAmount });
    
//             const paymentResult = await makePayment(selectedSeats, seatPrices);
    
//             console.log("Payment Result:", paymentResult);
    
//             toast.success("Payment successful! Redirecting...");
//         } catch (error) {
//             console.error("Payment Error:", error);
//             toast.error(`Payment failed: ${error.message}`);
//         } finally {
//             setIsLoading(false);
//         }
//     };
    
//     return (
//         <div className="payment-page-container">
//             <h2>Proceed to Payment</h2>
//             <p>Movie: {movieDetails?.title}</p>
//             <p>Theater: {theaterDetails?.name}</p>
//             <p>Show Time: {showTime}</p>
//             <p>Selected Seats: {selectedSeats.join(', ')}</p>
//             <p>Total Amount: ₹{totalAmount > 0 ? totalAmount.toFixed(2) : '0.00'}</p>

//             <button
//                 className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
//                 onClick={handlePayment}
//                 disabled={isLoading} // Disable button while loading
//             >
//                 {isLoading ? 'Processing...' : 'Pay with Stripe'}
//             </button>
//         </div>
//     );
// };




// Frontend - Payment Page Component
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { makePayment } from '../../services/paymentApi';

export const PaymentPage = () => {
    const location = useLocation();
    const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount, showId } = location.state || {};
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);

        const products = selectedSeats.map((seat) => ({
            movieTitle: movieDetails?.title,
            theaterName: theaterDetails?.name,
            showTime,
            name: `Seat ${seat}`,
            price: totalAmount / selectedSeats.length,
            quantity: 1,
            image: movieDetails?.image || '',
            seatId: seat,
            movieId: movieDetails?.id,
            theaterId: theaterDetails?.id,
            showId: showId, // ✅ Now this exists
        }));

        try {
            await makePayment(products); // Pass products to makePayment
            toast.success("Redirecting to payment...");
        } catch (error) {
            console.error("Error during payment:", error);
            toast.error(`Payment failed: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="payment-page-container">
            <h2>Proceed to Payment</h2>
            <p>Movie: {movieDetails?.title}</p>
            <p>Theater: {theaterDetails?.name}</p>
            <p>Show Time: {showTime}</p>
            <p>Selected Seats: {selectedSeats.join(', ')}</p>
            <p>Total Amount: ₹{totalAmount > 0 ? totalAmount.toFixed(2) : '0.00'}</p>

            <button
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
                onClick={handlePayment}
                disabled={isLoading}
            >
                {isLoading ? 'Processing...' : 'Pay with Stripe'}
            </button>
        </div>
    );
};
