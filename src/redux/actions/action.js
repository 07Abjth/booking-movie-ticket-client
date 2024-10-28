// Action Types
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const SET_THEATER_DETAILS = 'SET_THEATER_DETAILS';
export const SET_SHOW_DETAILS = 'SET_SHOW_DETAILS';
export const SELECT_SEAT = 'SELECT_SEAT';
export const REMOVE_SEAT = 'REMOVE_SEAT';
export const SET_SEAT_PRICE = 'SET_SEAT_PRICE';

// Action Creators
export const setMovieDetails = (movie) => ({
    type: SET_MOVIE_DETAILS,
    payload: movie,
});

export const setTheaterDetails = (theater) => ({
    type: SET_THEATER_DETAILS,
    payload: theater,
});

export const setShowDetails = (show) => ({
    type: SET_SHOW_DETAILS,
    payload: show,
});

export const selectSeat = (seatId) => ({
    type: SELECT_SEAT,
    payload: { seatId },
});

export const removeSeat = (seatId) => ({
    type: REMOVE_SEAT,
    payload: { seatId },
});

export const setSeatPrice = (seatId, price) => ({
    type: SET_SEAT_PRICE,
    payload: { seatId, price },
});
