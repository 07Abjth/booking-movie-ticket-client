// src/redux/reducer.js

const initialState = {
    selectedSeats: [],
    seatPrices: {},
    movieDetails: {},
    theaterDetails: {},
    showDetails: {},
};

function seatReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_SEAT':
            return {
                ...state,
                selectedSeats: [...state.selectedSeats, action.payload.seatId],
            };
        case 'REMOVE_SEAT':
            return {
                ...state,
                selectedSeats: state.selectedSeats.filter(seat => seat !== action.payload.seatId),
            };
        case 'SET_SEAT_PRICE':
            return {
                ...state,
                seatPrices: { ...state.seatPrices, [action.payload.seatId]: action.payload.price },
            };
        case 'SET_MOVIE_DETAILS':
            return {
                ...state,
                movieDetails: action.payload,
            };
        case 'SET_THEATER_DETAILS':
            return {
                ...state,
                theaterDetails: action.payload,
            };
        case 'SET_SHOW_DETAILS':
            return {
                ...state,
                showDetails: action.payload,
            };
        default:
            return state;
    }
}
