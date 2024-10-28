// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation
// import { makePayment } from '../../services/paymentApi.js'; // Adjust the import path accordingly

// // PaymentPage component
// export const PaymentPage = () => {
//     const location = useLocation(); // Use useLocation to access the state
//     const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount } = location.state || {};

//     const [paymentData, setPaymentData] = useState({
//         key: '', // PayU Merchant Key will be populated from the backend
//         txnid: Date.now(), // Use a unique transaction ID
//         amount: totalAmount.toFixed(2), // Ensure amount is formatted to two decimal places
//         productinfo: `${movieDetails.title} - ${theaterDetails.name} - Seats: ${selectedSeats.join(', ')}`, // Concatenate order details
//         firstname: 'John Doe', // Replace with the user's actual name
//         email: 'john@example.com', // Replace with the user's actual email
//         phone: '1234567890', // Replace with the user's actual phone
//         surl: 'https://your-success-url.com', // Success URL
//         furl: 'https://your-failure-url.com', // Failure URL
//         hash: '', // PayU-generated hash
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch payment data including the key and hash
//                 const data = await fetchPaymentData({
//                     transactionId: paymentData.txnid, // Unique transaction ID
//                     amount: paymentData.amount,
//                     productInfo: paymentData.productinfo,
//                     firstname: paymentData.firstname,
//                     email: paymentData.email,
//                     phone: paymentData.phone,
//                 });

//                 if (data) {
//                     console.log("Payment data from backend:", data); // Debug log
//                     setPaymentData(prev => ({
//                         ...prev,
//                         key: data.key, // Set the key from the response
//                         hash: data.hash, // Set the generated hash from the response
//                     }));
//                 }
//             } catch (err) {
//                 console.error("Error generating hash:", err);
//             }
//         };

//         fetchData();
//     }, [paymentData.amount, paymentData.productinfo, paymentData.firstname, paymentData.email, paymentData.phone]);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate the amount
//         if (!paymentData.amount || isNaN(paymentData.amount) || Number(paymentData.amount) <= 0) {
//             alert("Invalid amount. Please enter a valid amount.");
//             return;
//         }

//         console.log("Submitting payment with amount:", paymentData.amount); // Debugging log

//         const form = document.forms.payuForm;
//         form.submit();
//     };

//     return (
//         <form id="payuForm" method="POST" action="https://secure.payu.in/_payment">
//             <input type="hidden" name="key" value={paymentData.key} />
//             <input type="hidden" name="txnid" value={paymentData.txnid} />
//             <input type="hidden" name="amount" value={paymentData.amount} />
//             <input type="hidden" name="productinfo" value={paymentData.productinfo} />
//             <input type="hidden" name="firstname" value={paymentData.firstname} />
//             <input type="hidden" name="email" value={paymentData.email} />
//             <input type="hidden" name="phone" value={paymentData.phone} />
//             <input type="hidden" name="surl" value={paymentData.surl} />
//             <input type="hidden" name="furl" value={paymentData.furl} />
//             <input type="hidden" name="hash" value={paymentData.hash} />
            
//             <button type="submit" onClick={handleSubmit}>
//                 Pay with PayU
//             </button>
//         </form>
//     );
// };



// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { toast } from 'react-hot-toast';
// import { createPaymentIntent } from '../../services/paymentApi'; // Adjust path according to your project

// // Load Stripe.js outside of a component's render to avoid recreating the Stripe object on every render.
// const stripePromise = loadStripe('your_stripe_public_key'); // Replace with your actual Stripe public key

// // PaymentPage component
// export const PaymentPage = () => {
//     const location = useLocation();
//     const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount } = location.state || {};

//     const [clientSecret, setClientSecret] = useState('');
//     const [stripeError, setStripeError] = useState(null);

//     useEffect(() => {
//         // Create Payment Intent when component mounts
//         const fetchPaymentIntent = async () => {
//             try {
//                 const response = await createPaymentIntent({ amount: totalAmount * 100, currency: 'inr' }); // Amount is in smallest currency unit (paise)
//                 setClientSecret(response.clientSecret); // Save the client secret from the backend response
//             } catch (error) {
//                 toast.error('Failed to initiate payment');
//                 setStripeError(error.message);
//             }
//         };

//         fetchPaymentIntent();
//     }, [totalAmount]);

//     const handlePayment = async () => {
//         const stripe = await stripePromise;

//         const { error } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: {
//                     // You can provide an element here for card input if using `Elements` from Stripe
//                     // or use saved payment methods, if applicable.
//                 },
//             },
//         });

//         if (error) {
//             toast.error(`Payment failed: ${error.message}`);
//             setStripeError(error.message);
//         } else {
//             toast.success('Payment successful!');
//             // Redirect or show confirmation here
//         }
//     };

//     if (stripeError) return <div className="text-center text-red-500">{stripeError}</div>;

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
//                 disabled={!clientSecret} // Disable button until clientSecret is available
//             >
//                 Pay with Stripe
//             </button>
//         </div>
//     );
// };







// import   { useState } from 'react';
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
// import { makePayment } from '../../services/paymentApi'; // Adjust path according to your project

// // PaymentPage component
// export const PaymentPage = () => {
//     const location = useLocation();
//     const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount } = location.state || {};

//     const [isLoading, setIsLoading] = useState(false);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true); // Show loading state while processing payment

//             // Check if selectedSeats and selectedShow are defined
//             if (!selectedSeats || !movieDetails || !theaterDetails || !showTime || !totalAmount) {
//                 throw new Error("Invalid selection. Please try again.");
//             }

//             // Call the makePayment function to initiate the Stripe checkout session
//             await makePayment(selectedSeats, { movie: movieDetails, theater: theaterDetails, showTime });

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
//             <p>Selected Seats: {selectedSeats.map(seat => seat.id).join(', ')}</p>
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
// import { makePayment } from '../../services/paymentApi'; // Adjust path according to your project

// // PaymentPage component
// export const PaymentPage = () => {
//     const location = useLocation();
//     const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount } = location.state || {};

//     const [isLoading, setIsLoading] = useState(false);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true); // Show loading state while processing payment

//             // Check if required data is available
//             if (!selectedSeats || !movieDetails || !theaterDetails || !showTime || !totalAmount) {
//                 throw new Error("Invalid selection. Please try again.");
//             }

//             // Call the makePayment function to initiate the payment
//             await makePayment(selectedSeats, { movie: movieDetails, theater: theaterDetails, showTime });

//             // Handle successful payment (e.g., redirect or show success message)
//             toast.success('Payment successful!');
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
//             <p>Selected Seats: {selectedSeats?.map(seat => seat.id).join(', ')}</p>
//             <p>Total Amount: ₹{totalAmount?.toFixed(2)}</p>

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
//     const { selectedSeats, movieTitle, theaterName, showTime, totalAmount } = location.state || {};

//     console.log('Received payment data:', { selectedSeats, movieTitle, theaterName, showTime, totalAmount });

//     const [isLoading, setIsLoading] = useState(false);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true); // Show loading state while processing payment

//             // Check if required data is available
//             if (!selectedSeats || !movieTitle || !theaterName || !showTime || !totalAmount) {
//                 throw new Error("Invalid selection. Please try again.");
//             }

//             // Call the makePayment function to initiate the payment
//             await makePayment(selectedSeats, { movie: movieTitle, theater: theaterName, showTime });

//             // Handle successful payment (e.g., redirect or show success message)
//             toast.success('Payment successful!');
//             console.log('Payment successful for seats:', selectedSeats);
//         } catch (error) {
//             toast.error(`Payment failed: ${error.message}`);
//             console.error('Error during payment:', error);
//         } finally {
//             setIsLoading(false); // Reset loading state
//         }
//     };

//     return (
//         <div className="payment-page-container">
//             <h2>Proceed to Payment</h2>
//             <p>Movie: {movieTitle}</p>
//             <p>Theater: {theaterName}</p>
//             <p>Show Time: {showTime}</p>
//             <p>Selected Seats: {selectedSeats?.map(seat => seat.id).join(', ')}</p>
//             <p>Total Amount: ₹{totalAmount?.toFixed(2)}</p>

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

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { makePayment } from '../../services/paymentApi';

// export const PaymentPage = () => {
//     const location = useLocation();
//     const { selectedSeats, movieTitle, theaterName, showTime, totalAmount } = location.state || {};

//     useEffect(() => {
//         console.log('PaymentPage loaded with initial state:', {
//             selectedSeats, 
//             movieTitle, 
//             theaterName, 
//             showTime, 
//             totalAmount
//         });

//         // Log individual values to see if any are undefined or unexpected
//         console.log('Debug - Selected Seats:', selectedSeats);
//         console.log('Debug - Movie Title:', movieTitle);
//         console.log('Debug - Theater Name:', theaterName);
//         console.log('Debug - Show Time:', showTime);
//         console.log('Debug - Total Amount:', totalAmount);

//         // Check if all required fields are available
//         if (!selectedSeats || !movieTitle || !theaterName || !showTime || totalAmount === undefined) {
//             toast.error("Some data is missing. Please go back and select your options again.");
//             console.warn("Warning: Missing data detected. Redirect or prompt user action.");
//         }
//     }, [selectedSeats, movieTitle, theaterName, showTime, totalAmount]);

//     const [isLoading, setIsLoading] = useState(false);

//     const handlePayment = async () => {
//         try {
//             setIsLoading(true);

//             // Additional validation checks before making payment
//             if (!selectedSeats || !selectedSeats.length) {
//                 throw new Error("No seats selected. Please select at least one seat.");
//             }
//             if (!movieTitle) throw new Error("Movie title is missing.");
//             if (!theaterName) throw new Error("Theater name is missing.");
//             if (!showTime) throw new Error("Show time is missing.");
//             if (totalAmount === undefined || totalAmount <= 0) throw new Error("Total amount is invalid.");

//             console.log('Initiating payment with data:', {
//                 selectedSeats, 
//                 movieTitle, 
//                 theaterName, 
//                 showTime, 
//                 totalAmount
//             });

//             // Initiate the payment
//             await makePayment(selectedSeats, { movie: movieTitle, theater: theaterName, showTime });

//             toast.success('Payment successful!');
//             console.log('Payment completed successfully for seats:', selectedSeats);
//         } catch (error) {
//             toast.error(`Payment failed: ${error.message}`);
//             console.error('Error during payment:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="payment-page-container">
//             <h2>Proceed to Payment</h2>
//             <p>Movie: {movieTitle || "N/A"}</p>
//             <p>Theater: {theaterName || "N/A"}</p>
//             <p>Show Time: {showTime || "N/A"}</p>
//             <p>Selected Seats: {selectedSeats?.map(seat => seat.id).join(', ') || "None selected"}</p>
//             <p>Total Amount: ₹{totalAmount?.toFixed(2) || "0.00"}</p>

//             <button
//                 className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
//                 onClick={handlePayment}
//                 disabled={isLoading}
//             >
//                 {isLoading ? 'Processing...' : 'Pay with Stripe'}
//             </button>
//         </div>
//     );
// };





import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { makePayment } from '../../services/paymentApi';

export const PaymentPage = () => {
    const location = useLocation();
    const { selectedSeats, movieTitle, theaterName, showTime, totalAmount } = location.state || {};

    useEffect(() => {
        console.log('PaymentPage loaded with initial state:', {
            selectedSeats, 
            movieTitle, 
            theaterName, 
            showTime, 
            totalAmount
        });

        // Log individual values to see if any are undefined or unexpected
        console.log('Debug - Selected Seats:', selectedSeats);
        console.log('Debug - Movie Title:', movieTitle);
        console.log('Debug - Theater Name:', theaterName);
        console.log('Debug - Show Time:', showTime);
        console.log('Debug - Total Amount:', totalAmount);

        // Additional debug checks for theater and movie
        if (theaterName) {
            console.log('Debug - Fetching details for Theater:', theaterName);
        } else {
            console.warn('Warning: Theater name is missing.');
        }

        if (movieTitle) {
            console.log('Debug - Fetching details for Movie:', movieTitle);
        } else {
            console.warn('Warning: Movie title is missing.');
        }

        // Check if all required fields are available
        if (!selectedSeats || !movieTitle || !theaterName || !showTime || totalAmount === undefined) {
            toast.error("Some data is missing. Please go back and select your options again.");
            console.warn("Warning: Missing data detected. Redirect or prompt user action.");
        }
    }, [selectedSeats, movieTitle, theaterName, showTime, totalAmount]);

    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setIsLoading(true);

            // Additional validation checks before making payment
            if (!selectedSeats || !selectedSeats.length) {
                throw new Error("No seats selected. Please select at least one seat.");
            }
            if (!movieTitle) throw new Error("Movie title is missing.");
            if (!theaterName) throw new Error("Theater name is missing.");
            if (!showTime) throw new Error("Show time is missing.");
            if (totalAmount === undefined || totalAmount <= 0) throw new Error("Total amount is invalid.");

            console.log('Initiating payment with data:', {
                selectedSeats, 
                movieTitle, 
                theaterName, 
                showTime, 
                totalAmount
            });

            // Initiate the payment
            await makePayment(selectedSeats, { movie: movieTitle, theater: theaterName, showTime });

            toast.success('Payment successful!');
            console.log('Payment completed successfully for seats:', selectedSeats);
        } catch (error) {
            toast.error(`Payment failed: ${error.message}`);
            console.error('Error during payment:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="payment-page-container">
            <h2>Proceed to Payment</h2>
            <p>Movie: {movieTitle || "N/A"}</p>
            <p>Theater: {theaterName || "N/A"}</p>
            <p>Show Time: {showTime || "N/A"}</p>
            <p>Selected Seats: {selectedSeats?.map(seat => seat.id).join(', ') || "None selected"}</p>
            <p>Total Amount: ₹{totalAmount?.toFixed(2) || "0.00"}</p>

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




 