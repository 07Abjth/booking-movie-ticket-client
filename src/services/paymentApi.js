 import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../config/axiosInstance.js";
  import { toast } from "react-hot-toast";


export const makePayment = async (products) => {
  try {
    const response = await axiosInstance.post(
      "/payment/create-checkout-session",
      { products },
      { withCredentials: true }
    );

    const sessionId = response?.data?.sessionId;
    console.log("Received session ID from backend:", sessionId);

    if (!sessionId) {
      throw new Error("Session ID is undefined");
    }

      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
    return stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error("Payment error:", error);
    toast.error("Payment failed, please try again.");
    throw error;
  }
};

