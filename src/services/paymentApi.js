//  import { loadStripe } from "@stripe/stripe-js";
//  import { axiosInstance } from "../config/axiosInstance";
 
 
 


// // Make Payment Function 

// export const makePayment = async (selectedSeats, selectedShow) => {
//   try {
//     const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    
//     const products = selectedSeats.map(seat => ({
//       name: `${selectedShow.movie.title} - ${selectedShow.theater.name}`,
//       image: selectedShow.movie.image,
//       price: seat.price,
//       quantity: 1,  // Assuming each seat is one quantity
//     }));

//     const response = await axiosInstance({
//       url: "/payment/create-checkout-session",
//       method: "POST",
//       data: { products },  // Send selected show and seat details
//     });

//     const sessionId = response?.data?.sessionId;
//     const result = await stripe.redirectToCheckout({ sessionId });

//     if (result.error) {
//       console.error(result.error.message);
//     }
//   } catch (error) {
//     console.error("Payment failed:", error);
//   }
// };




// // Function to create a payment intent
// export const createPaymentIntent = async (paymentData) => {
//   try {
//     // Make a POST request to your backend API to create a payment intent
//     const response = await axiosInstance.post('payment/create-intent', paymentData);

//     // Return the response data from the server
//     return response.data;
//   } catch (error) {
//     // Handle errors appropriately
//     console.error('Error creating payment intent:', error);
//     throw error; // Rethrow the error for further handling in your component
//   }
// };

// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance";

// // Make Payment Function
// // Make Payment Function
// export const makePayment = async (selectedSeats, selectedShow) => {
//   try {
//       const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

//       if (!stripe) {
//           throw new Error("Stripe failed to initialize. Please check the key.");
//       }

//       // Log selected seats to verify their structure
//       console.log("Selected Seats:", selectedSeats);

//       // Prepare the products based on selected seats and selected show
//       const products = selectedSeats.map(seat => {
//           // Assuming each seat has a price attribute
//           const seatPrice = seat.price; // Adjust this if necessary to fetch the correct price

//           // if (seatPrice === null || seatPrice === undefined) {
//           //     throw new Error(`Invalid price for seat ID: ${seat.id}`);
//           // }

//           return {
//               name: `${selectedShow.movie.title} - ${selectedShow.theater.name}`,
//               image: selectedShow.movie.image, // Ensure this is defined
//               price: seatPrice * 100, // Price in cents
//               quantity: 1, // Assuming each seat is one quantity
//           };
//       });

//       // Check if all products have valid prices
//       for (const product of products) {
//           if (product.price <= 0) {
//               throw new Error(`Invalid price for product: ${product.name}`);
//           }
//       }

//       // Proceed to create a checkout session
//       const response = await axiosInstance.post("/payment/create-checkout-session", { products });
//       const sessionId = response?.data?.sessionId;

//       if (!sessionId) {
//           throw new Error("Failed to create checkout session.");
//       }

//       const result = await stripe.redirectToCheckout({ sessionId });

//       if (result.error) {
//           console.error(result.error.message);
//       }
//   } catch (error) {
//       console.error("Payment failed:", error.message);
//       throw error; // Optionally re-throw error for further handling
//   }
// };







import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../config/axiosInstance";

export const makePayment = async (selectedSeats, selectedShow) => {
    try {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

        if (!stripe) {
            throw new Error("Stripe failed to initialize.");
        }

        const products = selectedSeats.map(seat => ({
            name: `${selectedShow.movie.title} - ${selectedShow.theater.name}`,
            image: selectedShow.movie.image,
            price: seat.price * 100, // Ensure price is in cents
            quantity: 1,
        }));

        const response = await axiosInstance.post("/payment/create-checkout-session", { products });
        const sessionId = response?.data?.sessionId;

        if (!sessionId) {
            throw new Error("Failed to create checkout session.");
        }

        const result = await stripe.redirectToCheckout({ sessionId });

        if (result.error) {
            console.error(result.error.message);
        }
    } catch (error) {
        console.error("Payment failed:", error.message);
        throw error;
    }
};
