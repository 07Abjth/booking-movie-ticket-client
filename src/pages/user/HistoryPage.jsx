 
export const HistoryPage = () => {
  // Placeholder data for history; replace with actual data from your backend
  const bookingHistory = [
    {
      id: 1,
      movie: 'Inception',
      theater: 'ABC Cinemas',
      showTime: '2024-09-01 18:30',
      seats: 'A1, A2',
      status: 'Confirmed',
    },
    {
      id: 2,
      movie: 'The Dark Knight',
      theater: 'XYZ Multiplex',
      showTime: '2024-08-25 20:00',
      seats: 'C4, C5',
      status: 'Cancelled',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      <div className="bg-white p-4 rounded shadow-md">
        {bookingHistory.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-700">
                <th className="py-2">Movie</th>
                <th className="py-2">Theater</th>
                <th className="py-2">Show Time</th>
                <th className="py-2">Seats</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingHistory.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="py-2">{booking.movie}</td>
                  <td className="py-2">{booking.theater}</td>
                  <td className="py-2">{booking.showTime}</td>
                  <td className="py-2">{booking.seats}</td>
                  <td className={`py-2 ${booking.status === 'Cancelled' ? 'text-red-500' : 'text-green-500'}`}>
                    {booking.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No booking history available.</p>
        )}
      </div>
    </div>
  );
};
