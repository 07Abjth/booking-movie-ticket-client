// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import {seatReducer} from './reducers/seatReducers.js';
import {paymentReducer} from './reducers/paymentReducers.js';

export const store = configureStore({
  reducer: {
    seats: seatReducer,
    payment: paymentReducer,
  },
});

 