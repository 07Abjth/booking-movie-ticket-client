import React, { useState } from 'react';
import { createShow } from '../../services/showApi'; // Import your API service

const AddShowForm = () => {
  const [movieId, setMovieId] = useState('');
  const [theaterId, setTheaterId] = useState('');
  const [rows, setRows] = useState(1);
  const [seatsPerRow, setSeatsPerRow] = useState(10);
  const [showTime, setShowTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createShow({ movieId, theaterId, rows, seatsPerRow, showTime });
    if (response.success) {
      alert('Show created successfully!');
    } else {
      alert('Failed to create show.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="movieId" className="block text-sm font-medium">Movie ID</label>
        <input
          type="text"
          id="movieId"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="theaterId" className="block text-sm font-medium">Theater ID</label>
        <input
          type="text"
          id="theaterId"
          value={theaterId}
          onChange={(e) => setTheaterId(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rows" className="block text-sm font-medium">Number of Rows</label>
        <input
          type="number"
          id="rows"
          value={rows}
          onChange={(e) => setRows(e.target.value)}
          min="1"
          required
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="seatsPerRow" className="block text-sm font-medium">Seats per Row</label>
        <input
          type="number"
          id="seatsPerRow"
          value={seatsPerRow}
          onChange={(e) => setSeatsPerRow(e.target.value)}
          min="1"
          required
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="showTime" className="block text-sm font-medium">Show Time</label>
        <input
          type="datetime-local"
          id="showTime"
          value={showTime}
          onChange={(e) => setShowTime(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="mt-2 bg-blue-600 text-white py-2 px-4 rounded">
        Create Show
      </button>
    </form>
  );
};

export default AddShowForm;
