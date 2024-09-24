//  import React from 'react';

// export const Seat = ({ seatNumber, status }) => {
//   const statusClasses = {
//     available: 'bg-green-500 hover:bg-green-600',
//     reserved: 'bg-yellow-500 hover:bg-yellow-600',
//     booked: 'bg-red-500 hover:bg-red-600',
//   };

//   return (
//     <div
//       className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded ${statusClasses[status]}`}
//       title={seatNumber}
//     >
//       {seatNumber}
//     </div>
//   );
// };

 
// // Seat.jsx
// import React from 'react';

// export const Seat = ({ seatNumber, status, onClick }) => {
//   const getSeatClass = () => {
//     if (status === 'available') return 'bg-green-500';
//     if (status === 'reserved') return 'bg-red-500';
//     return 'bg-gray-400'; // or some default for unavailable
//   };

//   return (
//     <div
//       className={`m-2 p-4 text-center ${getSeatClass()} cursor-pointer`}
//       onClick={status === 'available' ? () => onClick(seatNumber) : undefined}
//     >
//       {seatNumber}
//     </div>
//   );
// };


// // Seat.jsx
// import React from 'react';

// export const Seat = ({ seatNumber, status, onSelect }) => {
//   const handleClick = () => {
//     if (status === 'available') { // Check if the seat is available
//       onSelect(seatNumber); // Notify the parent component
//     }
//   };

//   return (
//     <div 
//       className={`seat ${status}`} 
//       onClick={handleClick} 
//       role="button"
//       tabIndex={0}
//     >
//       {seatNumber}
//     </div>
//   );
// };

// Seat.jsx
import React from 'react';

export const Seat = ({ seatNumber, status, onSelect }) => {
  // Define seat styles based on status
  const seatStyle = {
    available: 'bg-green-500 hover:bg-green-400',
    booked: 'bg-red-500 cursor-not-allowed',
    selected: 'bg-blue-500 hover:bg-blue-400'
  };

  // Handle seat click
  const handleClick = () => {
    if (status === 'available') {
      onSelect(seatNumber);
    }
  };

  return (
    <div
      className={`m-2 p-2 rounded-md cursor-pointer ${seatStyle[status]}`}
      onClick={handleClick}
      title={`Seat ${seatNumber} - ${status}`}
    >
      {seatNumber}
    </div>
  );
};
