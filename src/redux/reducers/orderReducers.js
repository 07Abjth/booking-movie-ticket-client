// Initial state for the order
const initialState = {
    selectedSeats: [], // Array of selected seat numbers
    totalAmount: 0,    // Total price of the selected seats
    movieDetails: {},  // Movie details (title, language, etc.)
    theaterDetails: {}, // Theater details
    showTime: ''        // Show time
  };
  
  // Reducer function
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ORDER_SUMMARY':
        return {
          ...state,
          selectedSeats: action.payload.selectedSeats,
          totalAmount: action.payload.totalAmount,
          movieDetails: action.payload.movieDetails,
          theaterDetails: action.payload.theaterDetails,
          showTime: action.payload.showTime,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  