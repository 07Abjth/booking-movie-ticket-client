// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { createPaymentOrder } from '../../services/paymentApi';  // Your API function to handle payment

// export const PaymentPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Destructure the state received from the previous page
//     const { selectedSeats, totalAmount } = location.state || {};

//     // State to manage payment status
//     const [paymentStatus, setPaymentStatus] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handlePayment = async () => {
//         setLoading(true);
//         setError(null);  // Reset any previous errors

//         try {
//             const paymentResponse = await createPaymentOrder({
//                 amount: totalAmount,
//                 currency: 'INR',
//                 seats: selectedSeats,
//             });

//             if (paymentResponse.success) {
//                 // Payment success logic here (e.g., navigating to a success page)
//                 setPaymentStatus('success');
//                 navigate('/user/payment-success', { state: { selectedSeats, totalAmount } });
//             } else {
//                 // Handle payment failure
//                 setError(paymentResponse.message || 'Payment failed. Please try again.');
//                 setPaymentStatus('failure');
//             }
//         } catch (err) {
//             console.error('Payment error:', err);
//             setError('Error processing payment. Please try again later.');
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="payment-page p-5">
//             <h1 className="text-2xl font-bold text-center">Complete Your Payment</h1>
//             <div className="mt-4 text-center">
//                 <p>You have selected {selectedSeats?.length || 0} seats.</p>
//                 <p>Total Price: ₹{totalAmount || 0}</p>
//             </div>

//             {error && <div className="text-red-500 mt-2">{error}</div>}
//             {paymentStatus === 'failure' && (
//                 <div className="text-red-500 mt-2">Payment failed. Please try again.</div>
//             )}

//             <button
//                 onClick={handlePayment}
//                 disabled={loading}
//                 className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded ${
//                     loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//             >
//                 {loading ? 'Processing...' : `Pay ₹${totalAmount}`}
//             </button>
//         </div>
//     );
// };



// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { createPaymentOrder } from '../../services/paymentApi';

// export const PaymentPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     const { selectedSeats, totalAmount } = location.state || {};
//     const [paymentMethod, setPaymentMethod] = useState('upi');
//     const [paymentStatus, setPaymentStatus] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Contact details state
//     const [contactDetails, setContactDetails] = useState({
//         email: '',
//         phone: '',
//     });

//     // UPI and card payment details state
//     const [upiId, setUpiId] = useState('');
//     const [cardDetails, setCardDetails] = useState({
//         cardNumber: '',
//         expiry: '',
//         cvv: '',
//     });

//     const handlePayment = async () => {
//         setLoading(true);
//         setError(null);

//         // Validate form inputs based on payment method
//         if (paymentMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv)) {
//             setError('Please fill in all card details.');
//             setLoading(false);
//             return;
//         }
//         if (paymentMethod === 'upi' && !upiId) {
//             setError('Please provide a valid UPI ID.');
//             setLoading(false);
//             return;
//         }
//         if (!contactDetails.email || !contactDetails.phone) {
//             setError('Please provide contact details.');
//             setLoading(false);
//             return;
//         }

//         try {
//             const paymentData = {
//                 amount: totalAmount,
//                 currency: 'INR',
//                 seats: selectedSeats,
//                 method: paymentMethod,
//                 contact: contactDetails,
//                 ...(paymentMethod === 'card' && { cardDetails }),
//                 ...(paymentMethod === 'upi' && { upiId }),
//             };

//             const paymentResponse = await createPaymentOrder(paymentData);

//             if (paymentResponse.success) {
//                 setPaymentStatus('success');
//                 navigate('/user/payment-success', { state: { selectedSeats, totalAmount } });
//             } else {
//                 setError(paymentResponse.message || 'Payment failed. Please try again.');
//                 setPaymentStatus('failure');
//             }
//         } catch (err) {
//             console.error('Payment error:', err);
//             setError('Error processing payment. Please try again later.');
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="payment-page p-5">
//             <h1 className="text-2xl font-bold text-center">Complete Your Payment</h1>

//             {/* Contact Details */}
//             <div className="mt-4">
//                 <h2 className="text-lg font-semibold">Share Your Contact Details</h2>
//                 <input
//                     type="email"
//                     className="border p-2 w-full mb-3"
//                     placeholder="Email Address"
//                     value={contactDetails.email}
//                     onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
//                 />
//                 <input
//                     type="tel"
//                     className="border p-2 w-full mb-3"
//                     placeholder="+91 Phone Number"
//                     value={contactDetails.phone}
//                     onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
//                 />
//             </div>

//             {/* Payment Options */}
//             <div className="mt-6">
//                 <h2 className="text-lg font-semibold">Payment Options</h2>

//                 {/* Payment Methods */}
//                 <div className="mt-3">
//                     <label className="inline-flex items-center mr-4">
//                         <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="upi"
//                             checked={paymentMethod === 'upi'}
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="form-radio"
//                         />
//                         <span className="ml-2">Pay with UPI App</span>
//                     </label>
//                     <label className="inline-flex items-center mr-4">
//                         <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="card"
//                             checked={paymentMethod === 'card'}
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="form-radio"
//                         />
//                         <span className="ml-2">Debit/Credit Card</span>
//                     </label>
//                 </div>

//                 {/* Payment Details for Card */}
//                 {paymentMethod === 'card' && (
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold">Card Details</h3>
//                         <div className="mt-2">
//                             <input
//                                 type="text"
//                                 className="border p-2 w-full mb-3"
//                                 placeholder="Card Number"
//                                 value={cardDetails.cardNumber}
//                                 onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
//                             />
//                             <div className="flex space-x-4">
//                                 <input
//                                     type="text"
//                                     className="border p-2 w-1/2"
//                                     placeholder="Expiry Date (MM/YY)"
//                                     value={cardDetails.expiry}
//                                     onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border p-2 w-1/2"
//                                     placeholder="CVV"
//                                     value={cardDetails.cvv}
//                                     onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Payment Details for UPI */}
//                 {paymentMethod === 'upi' && (
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold">UPI Payment</h3>
//                         <input
//                             type="text"
//                             className="border p-2 w-full mb-3"
//                             placeholder="Enter UPI ID"
//                             value={upiId}
//                             onChange={(e) => setUpiId(e.target.value)}
//                         />
//                         <p className="text-sm text-gray-600">Or scan a QR code with your UPI app.</p>
//                     </div>
//                 )}

//                 {/* Other Payment Options */}
//                 <div className="mt-4">
//                     <h3 className="text-lg font-semibold">Other Payment Methods</h3>
//                     <ul className="list-disc list-inside text-gray-700">
//                         <li>Pay by Net Banking</li>
//                         <li>Mobile Wallets (Paytm, PhonePe, etc.)</li>
//                         <li>Gift Voucher</li>
//                         <li>Redeem Points</li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Order Summary */}
//             <div className="mt-6">
//                 <h2 className="text-lg font-semibold">Order Summary</h2>
//                 <div className="mt-3">
//                     <p><strong>Movie:</strong> Joker: Folie à Deux (A)</p>
//                     <p><strong>Language:</strong> English, 2D</p>
//                     <p><strong>Theater:</strong> Cinephile HSR Layout (Screen 4)</p>
//                     <p><strong>Seats:</strong> {selectedSeats?.join(', ') || 'None'}</p>
//                     <p><strong>Date & Time:</strong> Sat, 5 Oct, 2024, 10:30 PM</p>
//                     <p><strong>Tickets:</strong> ₹500.00</p>
//                     <p><strong>Convenience Fee:</strong> ₹84.96</p>
//                     <p><strong>Amount Payable:</strong> ₹584.96</p>
//                 </div>
//             </div>

//             {/* Payment Button */}
//             <div className="mt-6">
//                 {error && <div className="text-red-500 mb-2">{error}</div>}
//                 <button
//                     onClick={handlePayment}
//                     disabled={loading}
//                     className={`bg-blue-500 text-white py-2 px-4 rounded ${
//                         loading ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                 >
//                     {loading ? 'Processing...' : 'Make Payment'}
//                 </button>
//                 <p className="mt-2 text-sm text-gray-600">
//                     By clicking "Make Payment", you agree to the terms and conditions.
//                 </p>
//             </div>
//         </div>
//     );
// };




// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { createPaymentOrder } from '../../services/paymentApi';

// export const PaymentPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Safely access location.state and provide default values if missing
//     const { selectedSeats = [], movieDetails = {}, theaterDetails = {}, showTime = '', totalAmount = 0 } = location.state || {};
    
//     const [paymentMethod, setPaymentMethod] = useState('upi');
//     const [paymentStatus, setPaymentStatus] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Contact details state
//     const [contactDetails, setContactDetails] = useState({
//         email: '',
//         phone: '',
//     });

//     // UPI and card payment details state
//     const [upiId, setUpiId] = useState('');
//     const [cardDetails, setCardDetails] = useState({
//         cardNumber: '',
//         expiry: '',
//         cvv: '',
//     });

//     const handlePayment = async () => {
//         setLoading(true);
//         setError(null);

//         if (!contactDetails.email || !contactDetails.phone) {
//             setError('Please provide contact details.');
//             setLoading(false);
//             return;
//         }

//         try {
//             const paymentData = {
//                 amount: totalAmount,
//                 currency: 'INR',
//                 seats: selectedSeats,
//                 method: paymentMethod,
//                 contact: contactDetails,
//                 ...(paymentMethod === 'card' && { cardDetails }),
//                 ...(paymentMethod === 'upi' && { upiId }),
//             };

//             const paymentResponse = await createPaymentOrder(paymentData);

//             if (paymentResponse.success) {
//                 setPaymentStatus('success');
//                 navigate('/user/payment-success', { state: { selectedSeats, totalAmount } });
//             } else {
//                 setError(paymentResponse.message || 'Payment failed. Please try again.');
//                 setPaymentStatus('failure');
//             }
//         } catch (err) {
//             console.error('Payment error:', err);
//             setError('Error processing payment. Please try again later.');
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="payment-page p-5 max-w-4xl mx-auto">
//             <h1 className="text-2xl font-bold text-center mb-5">Complete Your Payment</h1>

//             {/* Contact Details */}
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Share Your Contact Details</h2>
//                 <div className="flex flex-col space-y-3">
//                     <input
//                         type="email"
//                         className="input input-bordered w-full"
//                         placeholder="Email Address"
//                         value={contactDetails.email}
//                         onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
//                     />
//                     <input
//                         type="tel"
//                         className="input input-bordered w-full"
//                         placeholder="+91 Phone Number"
//                         value={contactDetails.phone}
//                         onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
//                     />
//                 </div>
//             </div>

//             {/* Payment Options */}
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Payment Options</h2>

//                 {/* Payment Methods */}
//                 <div className="flex space-x-4">
//                     <label className="label cursor-pointer">
//                         <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="upi"
//                             checked={paymentMethod === 'upi'}
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="radio radio-primary"
//                         />
//                         <span className="label-text ml-2">Pay with UPI App</span>
//                     </label>
//                     <label className="label cursor-pointer">
//                         <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="card"
//                             checked={paymentMethod === 'card'}
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                             className="radio radio-primary"
//                         />
//                         <span className="label-text ml-2">Debit/Credit Card</span>
//                     </label>
//                 </div>

//                 {/* Payment Details for Card */}
//                 {paymentMethod === 'card' && (
//                     <div className="mt-4 space-y-3">
//                         <h3 className="text-lg font-semibold">Card Details</h3>
//                         <input
//                             type="text"
//                             className="input input-bordered w-full"
//                             placeholder="Card Number"
//                             value={cardDetails.cardNumber}
//                             onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
//                         />
//                         <div className="flex space-x-4">
//                             <input
//                                 type="text"
//                                 className="input input-bordered w-1/2"
//                                 placeholder="Expiry Date (MM/YY)"
//                                 value={cardDetails.expiry}
//                                 onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
//                             />
//                             <input
//                                 type="text"
//                                 className="input input-bordered w-1/2"
//                                 placeholder="CVV"
//                                 value={cardDetails.cvv}
//                                 onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
//                             />
//                         </div>
//                     </div>
//                 )}

//                 {/* Payment Details for UPI */}
//                 {paymentMethod === 'upi' && (
//                     <div className="mt-4 space-y-3">
//                         <h3 className="text-lg font-semibold">UPI Payment</h3>
//                         <input
//                             type="text"
//                             className="input input-bordered w-full"
//                             placeholder="Enter UPI ID"
//                             value={upiId}
//                             onChange={(e) => setUpiId(e.target.value)}
//                         />
//                         <p className="text-sm text-gray-600">Or scan a QR code with your UPI app.</p>
//                     </div>
//                 )}

//                 {/* Other Payment Options */}
//                 <div className="mt-4">
//                     <h3 className="text-lg font-semibold">Other Payment Methods</h3>
//                     <ul className="list-disc list-inside text-gray-700">
//                         <li>Pay by Net Banking</li>
//                         <li>Mobile Wallets (Paytm, PhonePe, etc.)</li>
//                         <li>Gift Voucher</li>
//                         <li>Redeem Points</li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Order Summary */}
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Order Summary</h2>
//                 <div className="bg-base-200 p-4 rounded-lg">
//                     <p><strong>Movie:</strong> {movieDetails.title || 'Unknown Movie'}</p>
//                     <p><strong>Language:</strong> {movieDetails.language || 'Unknown Language'}</p>
//                     <p><strong>Theater:</strong> {theaterDetails.name || 'Unknown Theater'} ({theaterDetails.location || 'Unknown Location'})</p>
//                     <p><strong>Screen:</strong> {theaterDetails.screen || 'Unknown Screen'}</p>
//                     <p><strong>Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
//                     <p><strong>Date & Time:</strong> {showTime || 'Unknown Date & Time'}</p>
//                     <p><strong>Tickets:</strong> ₹{movieDetails.price || 0}</p>
//                     <p><strong>Convenience Fee:</strong> ₹{movieDetails.convenienceFee || 0}</p>
//                     <p><strong>Amount Payable:</strong> ₹{totalAmount || 0}</p>
//                 </div>
//             </div>

//             {/* Payment Button */}
//             <div className="mt-6">
//                 {error && <div className="text-red-500 mb-2">{error}</div>}
//                 <button
//                     onClick={handlePayment}
//                     disabled={loading}
//                     className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
//                 >
//                     {loading ? 'Processing...' : 'Make Payment'}
//                 </button>
//                 <p className="mt-2 text-sm text-gray-600">
//                     By clicking "Make Payment", you agree to the terms and conditions.
//                 </p>
//             </div>
//         </div>
//     );
// };


// src/pages/PaymentPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingContext } from '../../context/BookingContext';

export const PaymentPage = () => {
    const navigate = useNavigate();
    const { bookingDetails } = useBookingContext();
    const { selectedSeats, movieDetails, theaterDetails, totalAmount } = bookingDetails;

    return (
        <div className="payment-page p-5 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-center mb-5">Complete Your Payment</h1>
            <div className="mb-6">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                <div className="bg-base-200 p-4 rounded-lg">
                    <p><strong>Movie:</strong> {movieDetails.title || 'Unknown Movie'}</p>
                    <p><strong>Theater:</strong> {theaterDetails.name || 'Unknown Theater'}</p>
                    <p><strong>Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
                    <p><strong>Amount Payable:</strong> ₹{totalAmount || 0}</p>
                </div>
            </div>
            {/* Payment Button and Logic */}
        </div>
    );
};
