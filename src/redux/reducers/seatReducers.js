// // store/reducers/seatReducers.js
// import { createSlice } from '@reduxjs/toolkit';

// const seatSlice = createSlice({
//   name: 'seats',
//   initialState: {
//     selectedSeats: [],
//     seatPrices: [],
//   },
//   reducers: {
//     selectSeat: (state, action) => {
//       const seatId = action.payload;
//       state.selectedSeats = state.selectedSeats.includes(seatId)
//         ? state.selectedSeats.filter((seat) => seat !== seatId)
//         : [...state.selectedSeats, seatId];
//     },
//     addSeatPrice: (state, action) => {
//       state.seatPrices.push(action.payload);
//     },
//     clearSeats: (state) => {
//       state.selectedSeats = [];
//       state.seatPrices = [];
//     },
//   },
// });

// // Export actions
// export const { selectSeat, addSeatPrice, clearSeats } = seatSlice.actions;

// // Export the reducer
// export default seatSlice.reducer;

// store/reducers/seatReducers.js
const initialState = {
    selectedSeats: [],
    seatPrices: [],
  };
  
  export const seatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'seats/selectSeat':
        const seatId = action.payload;
        return {
          ...state,
          selectedSeats: state.selectedSeats.includes(seatId)
            ? state.selectedSeats.filter((seat) => seat !== seatId)
            : [...state.selectedSeats, seatId],
        };
      case 'seats/addSeatPrice':
        return {
          ...state,
          seatPrices: [...state.seatPrices, action.payload],
        };
      case 'seats/clearSeats':
        return {
          ...state,
          selectedSeats: [],
          seatPrices: [],
        };
      default:
        return state; // Return the current state if no action matches
    }
  };
  