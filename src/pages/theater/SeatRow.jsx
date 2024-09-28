
import React, { useState } from 'react';
import { Seat } from './Seat';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    { seatNumber: 1, status: 'available' },
    { seatNumber: 2, status: 'booked' },
    { seatNumber: 3, status: 'available' },
  ];

  const handleSelect = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber) // Deselect if already selected
        : [...prev, seatNumber]
    );
  };

  return (
    <div>
      {seats.map((seat) => (
        <Seat
          key={seat.seatNumber}
          seatNumber={seat.seatNumber}
          status={seat.status}
          onSelect={handleSelect}
          isSelected={selectedSeats.includes(seat.seatNumber)}
        />
      ))}
    </div>
  );
};
