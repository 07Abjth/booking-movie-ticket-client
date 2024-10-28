// components/CheckoutButton.js
 import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('your-stripe-publishable-key');  // Replace with your own key

const CheckOutButton = ({ priceId }) => {

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      // Make an API call to your backend to create the checkout session
      const { data } = await axios.post('/api/v1/payment/create-checkout-session', { priceId });

      // Redirect the customer to Stripe Checkout page
      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error in creating checkout session:", error);
    }
  };

  return (
    <button onClick={handleCheckout} className="checkout-button">
      Buy Ticket
    </button>
  );
};

export default CheckOutButton;
