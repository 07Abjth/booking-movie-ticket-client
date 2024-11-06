// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance";

// // Make Payment Function
// export const makePayment = async (selectedSeats, selectedShow) => {
//     try {
//       const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
      
//       // Ensure selectedSeats is not empty
//       if (!selectedSeats || selectedSeats.length === 0) {
//         throw new Error("No seats selected");
//       }
  
//       // Create an array of products where each seat has its own price
//       const products = selectedSeats.map((seat, index) => {
//         // Debugging log for seat
//         console.log(`Processing seat ${index + 1}:`, seat);
        
//         // Check if price is defined
//         if (seat.price === undefined) {
//           console.error(`Seat price is undefined for seat:`, seat);
//         }
  
//         return {
//           name: `${selectedShow.movie.title} - ${selectedShow.theater.name} (Seat: ${seat.number || 'Unknown'})`,
//           image: selectedShow.movie.image,
//           price: seat.price || 0, // Assign a default price if undefined
//           quantity: 1,
//         };
//       });
  
//       console.log("Products being sent:", products); // Debug log
  
//       // Check if any products have invalid prices
//       const invalidProducts = products.filter(product => product.price <= 0);
//       if (invalidProducts.length > 0) {
//         console.error("Invalid products detected:", invalidProducts);
//         throw new Error("One or more products have invalid prices");
//       }
  
//       const response = await axiosInstance({
//         url: "/payment/create-checkout-session",
//         method: "POST",
//         data: { products },
//       });
  
//       const sessionId = response?.data?.sessionId;
//       const result = await stripe.redirectToCheckout({ sessionId });
  
//       if (result.error) {
//         console.error(result.error.message);
//       }
//     } catch (error) {
//       console.error("Payment failed:", error);
//     }
//   };
  


// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance";
// import { useNavigate } from "react-router-dom";

// export const makePayment = async (selectedSeats, seatPrices) => {
//     const seatPriceMap = seatPrices.reduce((acc, seat) => {
//         acc[seat.seatId] = seat.price;
//         return acc;
//     }, {});

//     let totalAmount = 0;
//     for (const seat of selectedSeats) {
//         const price = seatPriceMap[seat];
//         if (price === undefined) {
//             console.error(`Seat price is undefined for seat: ${seat}`);
//             throw new Error(`Seat price is undefined for seat: ${seat}`);
//         }
//         totalAmount += price;
//         console.log(`Processing seat ${seat}: Price - ₹${price}`);
//     }

//     console.log(`Total Amount for payment: ₹${totalAmount}`);

//     const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
//     if (!stripe) throw new Error("Stripe failed to initialize.");

//     try {
//         const response = await axiosInstance.post("/payment/create-checkout-session", { amount: totalAmount });
//         const { clientSecret } = response.data;

//         const { error } = await stripe.redirectToCheckout({ clientSecret });
//         if (error) {
//             console.error("Stripe checkout error:", error);
//             throw new Error("Payment failed, please try again.");
//         }

//     } catch (error) {
//         console.error("Payment error:", error);
//         throw new Error("Payment failed, please try again.");
//     }
// };












// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance";

// export const makePayment = async (selectedSeats, seatPrices) => {
//     const seatPriceMap = seatPrices.reduce((acc, seat) => {
//         acc[seat.seatId] = seat.price;
//         return acc;
//     }, {});

//     const products = selectedSeats.map(seatId => {
//         const price = seatPriceMap[seatId];
//         if (price === undefined) {
//             console.error(`Seat price is undefined for seat: ${seatId}`);
//             throw new Error(`Seat price is undefined for seat: ${seatId}`);
//         }
//         return { id: seatId, price };
//     });

//     console.log("Products for payment:", products);

//     const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
//     if (!stripe) throw new Error("Stripe failed to initialize.");

//     try {
//         const response = await axiosInstance.post("/payment/create-checkout-session", { products });
//         const { id } = response.data;

//         const { error } = await stripe.redirectToCheckout({ sessionId: id });
//         if (error) {
//             console.error("Stripe checkout error:", error);
//             throw new Error("Payment failed, please try again.");
//         }
//     } catch (error) {
//         console.error("Payment error:", error);
//         throw new Error("Payment failed, please try again.");
//     }
// };




// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance.js";

// export const makePayment = async (selectedSeats, seatPrices) => {
//     // Create a map of seat prices for quick lookup
//     const seatPriceMap = seatPrices.reduce((acc, seat) => {
//         acc[seat.seatId] = seat.price;
//         return acc;
//     }, {});

//     console.log("Seat price map:", JSON.stringify(seatPriceMap, null, 2));  // Log the seat price map

//     // Create the products array to send to the backend
//     const products = selectedSeats.map(seatId => {
//         const price = seatPriceMap[seatId];
//         if (price === undefined) {
//             console.error(`Seat price is undefined for seat: ${seatId}`);
//             throw new Error(`Seat price is undefined for seat: ${seatId}`);
//         }
//         return { id: seatId, price };
//     });

//     console.log("Products for payment:", JSON.stringify(products, null, 2));  // Log the products being passed

//     // Load the Stripe script and create a Stripe instance
//     const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
//     if (!stripe) {
//         console.error("Stripe failed to initialize.");
//         throw new Error("Stripe failed to initialize.");
//     }

//     try {
//         // Call the backend to create a Stripe checkout session
//         const response = await axiosInstance.post("/payment/create-checkout-session", { products });
//         const { id } = response.data;

//         console.log("Received session ID from backend:", id);  // Log the session ID received from the backend

//         // Redirect the user to Stripe's checkout page
//         const { error } = await stripe.redirectToCheckout({ sessionId: id });
//         if (error) {
//             console.error("Stripe checkout error:", error);
//             throw new Error("Payment failed, please try again guys.");
//         }
//     } catch (error) {
//         console.error("Payment error:", error);
//         throw new Error("Payment failed, please try again.");
//     }
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







// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance";

// export const makePayment = async (selectedSeats, selectedShow) => {
//     try {
//         console.log("selectedSeats:", selectedSeats);
//         console.log("selectedShow:", selectedShow);

//         const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
//         console.log("Stripe Publishable Key:", import.meta.env.VITE_STRIPE_Publishable_key);

//         if (!stripe) throw new Error("Stripe failed to initialize.");

//         const products = selectedSeats.map(seat => ({
//             name: `${selectedShow.movie.title} - ${selectedShow.theater.name}`,
//             image: selectedShow.movie.image,
//             price: seat.price * 100, // Ensure price is in cents
//             quantity: 1,
//         }));
//         console.log("Products array:", products);

//         const response = await axiosInstance.post("/payment/create-checkout-session", { products });
//         const sessionId = response?.data?.sessionId;

//         if (!sessionId) throw new Error("Failed to create checkout session.");

//         const result = await stripe.redirectToCheckout({ sessionId });

//         if (result.error) console.error(result.error.message);
//     } catch (error) {
//         console.error("Payment failed:", error.message);
//         throw error;
//     }
// };

// export const makePayment = async ()=>{

// try {
//         const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);
// const response = await axiosInstance({
//     url:"/payment/create-checkout-session",
//     method:"POST",
//     data: {products},
// })

// const sessionId = response.data?.sessionId;

// console.log(session, "=======session");
// const result = stripe.redirectToCheckout({
//     sessionId:  sessionId,
// });
    
// } catch (error) {
//     console.log(error);
    
// }


// }


// import { loadStripe } from "@stripe/stripe-js";
// import { axiosInstance } from "../config/axiosInstance";

// export const makePayment = async (products) => {
//     try {
//         const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

//         const response = await axiosInstance({
//             url: "/payment/create-checkout-session",
//             method: "POST",
//             data: { products },
//         });

//         const sessionId = response.data?.sessionId;

//         console.log(sessionId, "======= sessionId");

//         if (stripe) {
//             const result = await stripe.redirectToCheckout({
//                 sessionId: sessionId,
//             });

//             if (result.error) {
//                 console.error("Stripe checkout error:", result.error.message);
//             }
//         }
//     } catch (error) {
//         console.error("Error during makePayment:", error);
//     }
// };





// Frontend - Payment API Service
import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../config/axiosInstance";

export const makePayment = async (products) => {
    try {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

        const response = await axiosInstance({
            url: "/payment/create-checkout-session",
            method: "POST",
            data: { products },
        });

        const sessionId = response.data?.sessionId;

        console.log(sessionId, "======= sessionId");

        if (stripe) {
            const result = await stripe.redirectToCheckout({ sessionId });

            if (result.error) {
                console.error("Stripe checkout error:", result.error.message);
            }
        }
    } catch (error) {
        console.error("Error during makePayment:", error);
    }
};
