// features/payment/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    paymentStatus: null,
    error: null,
  },
  reducers: {
    initiatePayment: (state) => {
      state.paymentStatus = 'pending';
    },
    paymentSuccess: (state) => {
      state.paymentStatus = 'success';
    },
    paymentFailure: (state, action) => {
      state.paymentStatus = 'failure';
      state.error = action.payload;
    },
  },
});

export const { initiatePayment, paymentSuccess, paymentFailure } = paymentSlice.actions;
export default paymentSlice.reducer;
