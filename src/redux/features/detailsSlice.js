import { createSlice } from '@reduxjs/toolkit';

// Initial state for movie, theater, and show details
const initialState = {
  movie: null,
  theater: null,
  show: null,
};

// Create a slice for details
const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setMovieDetails: (state, action) => {
      state.movie = action.payload;
    },
    setTheaterDetails: (state, action) => {
      state.theater = action.payload;
    },
    setShowDetails: (state, action) => {
      state.show = action.payload;
    },
  },
});

// Export actions for use in components
export const { setMovieDetails, setTheaterDetails, setShowDetails } = detailsSlice.actions;

// Export the reducer to be used in the store
export default detailsSlice.reducer;
