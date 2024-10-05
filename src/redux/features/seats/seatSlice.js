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
//     addSeatPrice: (state, action) => {  // Added action
//       state.seatPrices.push(action.payload); // Pushing to the seatPrices array
//     },
//     clearSeats: (state) => {
//       state.selectedSeats = [];
//       state.seatPrices = [];
//     },
//   },
// });

// export const { selectSeat, addSeatPrice, clearSeats } = seatSlice.actions; // Export the new action
// export default seatSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const seatSlice = createSlice({
  name: 'seats',
  initialState: {
    selectedSeats: [],
    seatPrices: [],
  },
  reducers: {
    selectSeat: (state, action) => {
      const seatId = action.payload;
      state.selectedSeats = state.selectedSeats.includes(seatId)
        ? state.selectedSeats.filter((seat) => seat !== seatId)
        : [...state.selectedSeats, seatId];
    },
    addSeatPrice: (state, action) => {
      state.seatPrices.push(action.payload); // Assuming this is intended
    },
    clearSeats: (state) => {
      state.selectedSeats = [];
      state.seatPrices = [];
    },
  },
});

export const { selectSeat, addSeatPrice, clearSeats } = seatSlice.actions; // Exporting the defined actions
export default seatSlice.reducer;
