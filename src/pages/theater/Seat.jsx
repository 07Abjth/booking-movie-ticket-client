import React from 'react';

export const Seat = ({ seatNumber, status, onSelect, isSelected }) => {
  // Define seat styles based on status using DaisyUI button classes
  const seatStyle = {
    available: 'bg-green-500 hover:bg-green-400 text-white',
    booked: 'bg-red-500 cursor-not-allowed text-white',
    selected: 'bg-blue-500 hover:bg-blue-400 text-white',
  };

  // Apply selected seat style or fallback to default status style
  const appliedStyle = isSelected ? seatStyle['selected'] : seatStyle[status] || 'bg-gray-300 text-black';

  // Handle seat click (only if available)
  const handleClick = () => {
    if (status === 'available') {
      onSelect(seatNumber);
    }
  };

  return (
    <button
      className={`btn btn-sm m-1 rounded-md cursor-pointer ${appliedStyle}`}
      onClick={handleClick}
      disabled={status === 'booked'} // Disable button for booked seats
      title={`Seat ${seatNumber} - ${status}`}
      style={{ width: '10px', height: '10px' }} // Fixed size for each seat
    >
      {seatNumber}
    </button>
  );
};
