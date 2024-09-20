import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSeats, reserveSeats } from '../../services/seatApi.js';

export const SeatsSelectionPage = () => {
  const { showId } = useParams();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      const seatData = await getSeats(showId);
      setSeats(seatData);
    };
    fetchSeats();
  }, [showId]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat._id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat._id));
    } else {
      setSelectedSeats([...selectedSeats, seat._id]);
    }
  };

  const handleReserveSeats = async () => {
    const reservationData = { seats: selectedSeats, showId };
    const response = await reserveSeats(showId, reservationData);
    if (response.success) {
      console.log('Seats reserved successfully');
    } else {
      console.error('Reservation failed:', response.error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Select Seats for Show</h1>

      {/* Seat Grid */}
      <div className="grid grid-cols-10 gap-4 mb-6">
        {seats.map((seat) => (
          <button
            key={seat._id}
            onClick={() => handleSeatSelection(seat)}
            className={`btn seat-btn ${selectedSeats.includes(seat._id) ? 'bg-yellow-500' : seat.reserved ? 'bg-red-500' : 'bg-green-500'} text-white p-4 rounded-lg`}
            disabled={seat.reserved}
          >
            {seat.number}
          </button>
        ))}
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserveSeats}
        disabled={selectedSeats.length === 0}
        className="btn btn-primary"
      >
        Reserve {selectedSeats.length} Seat(s)
      </button>

      {/* Legend */}
      <div className="mt-6 flex justify-around">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 mr-2 rounded"></div> Available
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-500 mr-2 rounded"></div> Selected
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 mr-2 rounded"></div> Reserved
        </div>
      </div>
    </div>
  );
};
