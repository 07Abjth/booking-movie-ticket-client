// PaymentPage.jsx
 import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate if you need to redirect after payment
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {CheckOutForm} from './CheckOutForm.jsx';  

const stripePromise = loadStripe('your-stripe-public-key'); // Replace with your actual Stripe public key

export const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSeats, totalPrice } = location.state || { selectedSeats: [], totalPrice: 0 };

  if (selectedSeats.length === 0) {
    return <div className="text-center mt-10">No seats selected. Please select seats first.</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Payment Page</h1>
      <div className="text-center mb-4">
        <p>You have selected {selectedSeats.length} seats.</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>
      <div className="flex justify-center">
        <Elements stripe={stripePromise}>
          <CheckOutForm selectedSeats={selectedSeats} totalPrice={totalPrice} navigate={navigate} />
        </Elements>
      </div>
    </div>
  );
};
