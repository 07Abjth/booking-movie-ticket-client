// store/reducers/paymentReducers.js

const initialState = {
    paymentStatus: null,
    error: null,
  };
  
  export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'payment/initiatePayment':
        return {
          ...state,
          paymentStatus: 'pending',
          error: null, // Reset error when initiating payment
        };
      case 'payment/paymentSuccess':
        return {
          ...state,
          paymentStatus: 'success',
          error: null, // Reset error on success
        };
      case 'payment/paymentFailure':
        return {
          ...state,
          paymentStatus: 'failure',
          error: action.payload, // Set error from action payload
        };
      default:
        return state; // Return the current state if no action matches
    }
  };
  