import React from 'react';
import { Seat } from './Seat';

export const SeatRow = ({ seats, onSelect, selectedSeats }) => {
  return (
    <div className="flex justify-center seat-row">
      {seats.map((seat) => (
        <Seat
          key={seat.seatNumber}
          seatNumber={seat.seatNumber}
          status={seat.status}
          onSelect={onSelect}
          isSelected={selectedSeats.includes(seat.seatNumber)}
        />
      ))}
    </div>
  );
};

 