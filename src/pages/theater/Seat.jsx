 

// // Seat.jsx
// import React from 'react';

// export const Seat = ({ seatNumber, status, onSelect, isSelected }) => {
//   // Define seat styles based on status
//   const seatStyle = {
//     available: 'bg-green-500 hover:bg-green-400',
//     booked: 'bg-red-500 cursor-not-allowed',
//     selected: 'bg-blue-500 hover:bg-blue-400',
//   };


// // Determine if the seat is selected and apply a different class
// const appliedStyle = isSelected ? 'bg-blue-500 hover:bg-blue-400' : seatStyle[status] || 'bg-gray-300' ;



//   // Handle seat click
//   const handleClick = () => {
//     if (status === 'available') {
//       onSelect(seatNumber);
//     }
//   };

//   return (
//     <div
//       className={`m-2 p-2 rounded-md cursor-pointer ${appliedStyle}`}
//       onClick={handleClick}
//       title={`Seat ${seatNumber} - ${status}`}
//     >
//       {seatNumber}
//     </div>
//   );
// };


import React from 'react';

export const Seat = ({ seatNumber, status, onSelect, isSelected }) => {
  // Define seat styles based on status
  const seatStyle = {
    available: 'bg-green-500 hover:bg-green-400',
    booked: 'bg-red-500 cursor-not-allowed',
    selected: 'bg-blue-500 hover:bg-blue-400',
  };

  // Determine if the seat is selected and apply a different class
  const appliedStyle = isSelected ? 'bg-blue-500 hover:bg-blue-400' : seatStyle[status] || 'bg-gray-300';

  // Handle seat click
  const handleClick = () => {
    if (status === 'available') {
      onSelect(seatNumber);
    }
  };

  return (
    <div
      className={`flex items-center justify-center m-2 p-4 rounded-md cursor-pointer ${appliedStyle} text-center text-sm`} // Updated padding for a better appearance
      onClick={handleClick}
      title={`Seat ${seatNumber} - ${status}`}
      style={{ width: '60px', height: '60px' }} // Set uniform width and height for all seats
    >
      {seatNumber}
    </div>
  );
};
