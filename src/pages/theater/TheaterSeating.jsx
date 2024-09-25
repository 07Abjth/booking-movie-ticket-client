import React from 'react';
import SeatRow from './SeatRow';

const TheaterSeating = () => {
  const seatsData = [
    { seatNumber: 'R1-S1', status: 'available' },
    { seatNumber: 'R1-S2', status: 'available' },
    { seatNumber: 'R1-S3', status: 'booked' },
    // ... more seats for this row
  ];

  const handleSelect = (seatNumber) => {
    console.log(`Seat selected: ${seatNumber}`);
  };

  return (
    <div className="theater-seating my-10">
      {/* Repeat SeatRow for each row of seats */}
      <SeatRow seats={seatsData} onSelect={handleSelect} selectedSeats={[]} />
      {/* Add more SeatRow components as needed for additional rows */}
    </div>
  );
};

export default TheaterSeating;
