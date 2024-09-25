 // // SeatsSelectionPage.jsx
// import { useState } from 'react';
// import { useParams } from 'react-router-dom'; 
// import { SeatsGrid } from './SeatsGrid.jsx';

// export const SeatsSelectionPage = () => {
//   const { showId } = useParams();  
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatSelect = (seatNumber) => {
//     setSelectedSeats((prev) => {
//       if (prev.includes(seatNumber)) {
//         return prev.filter((seat) => seat !== seatNumber);
//       }
//       return [...prev, seatNumber];
//     });
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
//       <SeatsGrid showId={showId} onSeatSelect={handleSeatSelect} /> {/* Pass correct function */}
//       <div className="mt-4 text-center">
//         <h2 className="text-xl">Selected Seats:</h2>
//         <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
//         <button
//           className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
//           disabled={selectedSeats.length === 0}
//         >
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// };


// SeatsSelectionPage.jsx
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom'; 
import { SeatsGrid } from './SeatsGrid.jsx';

export const SeatsSelectionPage = () => {
  const { showId } = useParams();  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate


  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatNumber)) {
        return prev.filter((seat) => seat !== seatNumber);
      }
      return [...prev, seatNumber];
    });
  };
  const handleProceedToPayment = () => {
    if (selectedSeats.length > 0) {
      navigate(`/user/payment`, { state: { selectedSeats, showId } }); // Navigate to payment page with selected seats and showId
    }
  };
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Select Your Seats</h1>
      <SeatsGrid showId={showId} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} /> {/* Pass selectedSeats */}
      <div className="mt-4 text-center">
        <h2 className="text-xl">Selected Seats:</h2>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</p>
        <button
          className={`mt-2 p-2 rounded ${selectedSeats.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
          disabled={selectedSeats.length === 0}
          onClick={handleProceedToPayment} // Add onClick handler

        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};
