import React, { useEffect } from 'react';
import { axiosInstance } from './config/axiosInstance.js'; // Adjust the import path as needed

const TestComponent = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movie/upcoming'); // Change the endpoint if necessary
        console.log('API Response:', response.data); // Log the response data
      } catch (error) {
        console.error('Error fetching movies:', error); // Log any errors
      }
    };

    fetchMovies();
  }, []);

  return <div>Check the console for API response.</div>;
};

export default TestComponent;
