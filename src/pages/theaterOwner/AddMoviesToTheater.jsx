import React, { useState, useEffect } from 'react';
import { getAllMovies } from '../api/movieService';
import { addMoviesToTheater } from '../api/theaterService';

const AddMoviesToTheater = ({ theaterId }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch all available movies when component loads
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getAllMovies();
        setMovies(result.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  // Handle movie selection
  const handleSelectMovie = (movieId) => {
    setSelectedMovies((prevSelected) => {
      if (prevSelected.includes(movieId)) {
        return prevSelected.filter((id) => id !== movieId);
      } else {
        return [...prevSelected, movieId];
      }
    });
  };

  const handleAddMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await addMoviesToTheater(theaterId, selectedMovies);
      setSuccess(result.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Add Movies to Theater</h3>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <div key={movie._id}>
              <label>
                <input
                  type="checkbox"
                  value={movie._id}
                  onChange={() => handleSelectMovie(movie._id)}
                  checked={selectedMovies.includes(movie._id)}
                />
                {movie.title}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies available to add</p>
      )}

      <button onClick={handleAddMovies} disabled={loading}>
        {loading ? 'Adding...' : 'Add Movies'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddMoviesToTheater;
