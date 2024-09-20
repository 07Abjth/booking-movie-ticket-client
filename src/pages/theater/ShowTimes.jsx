import React, { useState } from 'react';

export const ShowTimes = ({ theater, showTimes }) => {
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  const handleShowtimeClick = (showtime) => {
    setSelectedShowtime(showtime);
    // Handle seat selection and booking logic here
  };

  return (
    <div>
      {showTimes.length > 0 ? (
        showTimes.map((showtime) => (
          <div key={showtime._id} className="mt-2">
            <button
              className={`px-4 py-2 rounded-md ${selectedShowtime === showtime ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleShowtimeClick(showtime)}
            >
              {showtime.time}
            </button>
          </div>
        ))
      ) : (
        <div>No showtimes available</div>
      )}
      {selectedShowtime && (
        <div className="mt-4">
          {/* Display seat availability and booking options here */}
        </div>
      )}
    </div>
  );
};
