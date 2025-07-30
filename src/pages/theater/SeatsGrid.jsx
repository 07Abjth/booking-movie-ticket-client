 

import { useEffect, useState } from "react";
import { getSeatsForTheater } from "../../services/seatApi.js";

export const SeatsGrid = ({ theaterId, onSeatSelect, selectedSeats }) => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await getSeatsForTheater(theaterId);
        console.log("Fetched Seats Data:", response);

        // Create unique seat objects
        const uniqueSeats = Array.from(
          new Set(response.seats.map((seat) => seat.seatNumber))
        ).map((seatNumber) =>
          response.seats.find((seat) => seat.seatNumber === seatNumber)
        );

        setSeats(uniqueSeats);
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };

    fetchSeats();
  }, [theaterId]);

  const groupSeatsByRow = () => {
    return seats.reduce((rows, seat) => {
      const { row } = seat;
      if (!rows[row]) {
        rows[row] = [];
      }
      rows[row].push(seat);
      return rows;
    }, {});
  };

  const seatRows = groupSeatsByRow();

  const splitRow = (rowSeats, blockSize) => {
    const leftBlock = rowSeats.slice(0, blockSize);
    const rightBlock = rowSeats.slice(blockSize);
    return [leftBlock, rightBlock];
  };

  return (
    <div className="p-4 bg-gray-800">
      {Object.keys(seatRows).length > 0 ? (
        <div className="space-y-4">
          {/* Reverse the row order here */}
          {Object.keys(seatRows)
            .reverse() // Reverses the order of the rows (A at bottom, G at top)
            .map((row) => {
              const rowSeats = seatRows[row];
              const [leftBlock, rightBlock] = splitRow(
                rowSeats,
                Math.ceil(rowSeats.length / 2)
              );

              return (
                <div key={row} className="flex flex-col items-center space-y-2">
                  <div className="flex justify-center space-x-2">
                    <span className="font-bold text-white">{row}</span>
                    <div className="flex gap-1">
                      {leftBlock.map((seat) => {
                        const seatNumber = seat.seatNumber.replace(/[A-Za-z]/g, ""); // Remove alphabets
                        return (
                          <button
                            key={seat.seatNumber}
                            className={`w-8 h-8 sm:w-6 sm:h-6 rounded border-2 transition duration-200 text-xs ${
                              selectedSeats.includes(seat.seatNumber)
                                ? "bg-blue-600 text-white border-blue-800"
                                : seat.type === "Luxury"
                                ? "bg-yellow-500 hover:bg-yellow-400 border-yellow-700"
                                : seat.type === "Premium"
                                ? "bg-green-500 hover:bg-green-400 border-green-700"
                                : "bg-gray-300 hover:bg-gray-200 border-gray-600 hover:border-gray-500"
                            }`}
                            onClick={() => onSeatSelect(seat.seatNumber)}
                          >
                            {seatNumber} {/* Display only the number part */}
                          </button>
                        );
                      })}
                    </div>
                    <div className="w-8"></div>
                    <div className="flex gap-1">
                      {rightBlock.map((seat) => {
                        const seatNumber = seat.seatNumber.replace(/[A-Za-z]/g, ""); // Remove alphabets
                        return (
                          <button
                            key={seat.seatNumber}
                            className={`w-8 h-8 sm:w-6 sm:h-6 rounded border-2 transition duration-200 text-xs ${
                              selectedSeats.includes(seat.seatNumber)
                                ? "bg-blue-600 text-white border-blue-800"
                                : seat.type === "Luxury"
                                ? "bg-yellow-500 hover:bg-yellow-400 border-yellow-700"
                                : seat.type === "Premium"
                                ? "bg-green-500 hover:bg-green-400 border-green-700"
                                : "bg-gray-300 hover:bg-gray-200 border-gray-600 hover:border-gray-500"
                            }`}
                            onClick={() => onSeatSelect(seat.seatNumber)}
                          >
                            {seatNumber} {/* Display only the number part */}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <p className="text-white">No seats available.</p>
      )}
    </div>
  );
};
