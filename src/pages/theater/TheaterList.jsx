// import { useEffect } from 'react';
// import { getTheaters } from '../../services/theaterApi.js';

// export const TheaterList = ({ theaters }) => {  // use theaters as prop

//   const fetchTheaterData = async () => {
//     try {
//       const data = await getTheaters(theaters);
//       console.log(data);  // Process data here
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTheaterData();
//   }, [theaters]);

//   return (
//     <div>
//       {/* Display the theaters or a message if none available */}
//       {theaters?.length > 0 ? (
//         theaters.map((theater) => <p key={theater._id}>{theater.name}</p>)
//       ) : (
//         <p>No theaters available</p>
//       )}
//     </div>
//   );
// };


// // import { useEffect, useState } from 'react';
// // import { getTheaters } from '../../services/theaterApi.js';

// // export const TheaterList = ({ theaters, movieId }) => {
// //   const [filteredTheaters, setFilteredTheaters] = useState([]); // Rename state

// //   useEffect(() => {
// //     const fetchTheaterData = async () => {
// //       try {
// //         const { data } = await getTheaters();  // Fetch all theaters
// //         const filteredData = data.filter(theater => 
// //           theater.movies.includes(movieId)  // Filter theaters that have the movie
// //         );
// //         setFilteredTheaters(filteredData);  // Update state with filtered theaters
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchTheaterData();
// //   }, [movieId]);  // Fetch theaters when movieId changes

// //   return (
// //     <div>
// //       {filteredTheaters.length > 0 ? (  // Use the filtered theaters here
// //         filteredTheaters.map((theater) => (
// //           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
// //             <h3 className="text-xl font-semibold">{theater.name}</h3>
// //             <p className="text-gray-600">{theater.location}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No theaters available for this movie</p>
// //       )}
// //     </div>
// //   );
// // };



// import { useEffect, useState } from 'react';
// import { getTheaters } from '../../services/theaterApi.js';

// export const TheaterList = ({ theaters, movieId }) => {
//   const [filteredTheaters, setFilteredTheaters] = useState([]); // State to hold filtered theaters
//   const [allTheaters, setAllTheaters] = useState([]); // State to hold all fetched theaters

//   // Fetch all theaters from the backend
//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const { data } = await getTheaters();  // Fetch all theaters
//         setAllTheaters(data);  // Store all fetched theaters
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchTheaterData();
//   }, []);  // Fetch theaters when component mounts

//   // Function to filter theaters by movieId on button click
//   const handleFilterTheaters = () => {
//     const filtered = allTheaters.filter(theater =>
//       theater.movies.includes(movieId)  // Check if the theater has the movie
//     );
//     setFilteredTheaters(filtered);  // Set filtered theaters
//   };

//   return (
//     <div>
//       <h2>All Theaters</h2>
//       {/* Show all theaters initially */}
//       {allTheaters.length > 0 ? (
//         allTheaters.map((theater) => (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{theater.name}</h3>
//             <p className="text-gray-600">{theater.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No theaters available</p>
//       )}

//       <button onClick={handleFilterTheaters} className="mt-4 p-2 bg-blue-500 text-white rounded">
//         Show Theaters Playing This Movie
//       </button>

//       {/* Display the filtered theaters when the button is clicked */}
//       {filteredTheaters.length > 0 && (
//         <>
//           <h2 className="mt-6">Filtered Theaters Playing This Movie</h2>
//           {filteredTheaters.map((theater) => (
//             <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//               <h3 className="text-xl font-semibold">{theater.name}</h3>
//               <p className="text-gray-600">{theater.location}</p>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// import { useEffect, useState } from 'react';
// import { getTheaters } from '../../services/theaterApi.js';

// export const TheaterList = ({ movieId }) => {
//   const [filteredTheaters, setFilteredTheaters] = useState([]); // State to hold filtered theaters

//   // Fetch and filter theaters by movieId
//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const { data } = await getTheaters();  // Fetch all theaters
//         console.log("Fetched theaters:", data);  // Log all theaters
  
//         const filtered = data.filter(theater => {
//           console.log("Checking Theater:", theater.name);
//           console.log("Theater Movies (IDs):", theater.movies);
//           console.log("Movie ID to Match:", movieId);
  
//           return theater.movies.includes(String(movieId));  // Ensure both are strings for comparison
//         });
  
//         console.log("Filtered Theaters:", filtered);  // Log the result of the filter operation
//         setFilteredTheaters(filtered);  // Set filtered theaters
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     fetchTheaterData();
//   }, [movieId]);  // Re-fetch theaters when movieId changes
  
  

//   return (
//     <div>
//       <h2>Theaters Playing This Movie</h2>
//       {/* Show filtered theaters */}
//       {filteredTheaters.length > 0 ? (
//         filteredTheaters.map((theater) => (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{theater.name}</h3>
//             <p className="text-gray-600">{theater.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No theaters available for this movie</p>
//       )}
//     </div>
//   );
// };




// import { useEffect, useState } from 'react';
// import { getTheaters } from '../../services/theaterApi.js';

// export const TheaterList = ({ theaters, movieId }) => {
//   const [filteredTheaters, setFilteredTheaters] = useState([]); // State to hold filtered theaters
//   const [allTheaters, setAllTheaters] = useState([]); // State to hold all fetched theaters

//   // Fetch all theaters from the backend
//   useEffect(() => {
//     const fetchTheaterData = async () => {
//       try {
//         const { data } = await getTheaters();  // Fetch all theaters
//         console.log('Fetched theaters:', data); // Debugging line
//         setAllTheaters(data);  // Store all fetched theaters
//       } catch (error) {
//         console.log('Error fetching theaters:', error);
//       }
//     };

//     fetchTheaterData();
//   }, []);  // Fetch theaters when component mounts

//   // Function to filter theaters by movieId
//   useEffect(() => {
//     if (movieId) {
//       // Only filter if movieId is defined
//       const filtered = allTheaters.filter(theater =>
//         theater.movies && theater.movies.includes(movieId)  // Check if the theater has the movie
//       );
//       console.log('Filtered Theaters:', filtered); // Debugging line
//       setFilteredTheaters(filtered);  // Set filtered theaters
//     } else {
//       // If no movieId is provided, clear the filtered theaters
//       setFilteredTheaters([]);
//     }
//   }, [movieId, allTheaters]);  // Re-run filtering when movieId or allTheaters changes

//   return (
//     <div>
//       {/* Display filtered theaters when a movieId is provided */}
//       {filteredTheaters.length > 0 ? (
//         filteredTheaters.map((theater) => (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{theater.name}</h3>
//             <p className="text-gray-600">{theater.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No theaters available for this movie</p>
//       )}
//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { getMovieDetails } from '../../services/movieApi.js';

// export const TheaterList = ({ theaters, movieId }) => {
//   const [filteredTheaters, setFilteredTheaters] = useState([]);

//   useEffect(() => {
//     if (movieId) {
//       const filtered = theaters.filter(theater =>
//         theater.movies && theater.movies.includes(movieId.toString()) // Ensure both are strings
//       );
//       setFilteredTheaters(filtered);
//     } else {
//       setFilteredTheaters([]);
//     }
//   }, [theaters, movieId]);

//   return (
//     <div>
//       {filteredTheaters.length > 0 ? (
//         filteredTheaters.map((theater) => (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{theater.name}</h3>
//             <p className="text-gray-600">{theater.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No theaters available for this movie</p>
//       )}
//     </div>
//   );
// };


// import { useState, useEffect } from 'react';
// import { getTheaters } from '../../services/theaterApi.js';

// export const TheaterList = ({ shows }) => {
//   const [filteredTheaters, setFilteredTheaters] = useState([]);

//   useEffect(() => {
//     const theaterIds = shows.map(show => show.theaterId); // Extract theater IDs from shows

//     const fetchTheaters = async () => {
//       try {
//         const { data: allTheaters } = await getTheaters(); // Fetch all theaters
//         // Filter the theaters based on matching theaterIds from shows
//         const filtered = allTheaters.filter(theater => theaterIds.includes(theater._id.toString())); // Convert to string if necessary
//         setFilteredTheaters(filtered); // Set the filtered theaters
//       } catch (error) {
//         console.log('Error fetching theaters:', error);
//       }
//     };

//     if (theaterIds.length > 0) {
//       fetchTheaters(); // Only fetch if there are shows
//     } else {
//       setFilteredTheaters([]); // If no shows, clear filtered theaters
//     }
//   }, [shows]);

//   return (
//     <div>
//       {filteredTheaters.length > 0 ? (
//         filteredTheaters.map((theater) => (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{theater.name}</h3>
//             <p className="text-gray-600">{theater.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No theaters available for this movie</p>
//       )}
//     </div>
//   );
// };

// import { useState, useEffect } from 'react';
// import { getShowsByMovieId } from '../../services/showApi.js';
// import { getTheatersByIds } from '../../services/theaterApi.js';

// export const TheaterList = ({ movieId }) => {
//   const [filteredTheaters, setFilteredTheaters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTheatersForMovie = async () => {
//       try {
//         const { data: shows } = await getShowsByMovieId(movieId);
//         if (shows && shows.length > 0) {
//           const theaterIds = [...new Set(shows.map(show => show.theaterId))];
//           const { data: theaters } = await getTheatersByIds(theaterIds);
//           setFilteredTheaters(theaters);
//         } else {
//           setFilteredTheaters([]);
//         }
//       } catch (error) {
//         console.error('Error fetching theaters:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (movieId) {
//       fetchTheatersForMovie();
//     }
//   }, [movieId]);

//   if (loading) {
//     return <p>Loading theaters...</p>;
//   }

//   return (
//     <div>
//       {filteredTheaters.length > 0 ? (
//         filteredTheaters.map((theater) => (
//           <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <h3 className="text-xl font-semibold">{theater.name}</h3>
//             <p className="text-gray-600">{theater.location}</p>
//           </div>
//         ))
//       ) : (
//         <p>No theaters available for this movie</p>
//       )}
//     </div>
//   );
// };


import { useState, useEffect } from 'react';

export const TheaterList = ({ theaters }) => {
  if (!theaters.length) {
    return <p>No theaters available for this movie</p>;
  }

  return (
    <div>
      {theaters.map((theater) => (
        <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
          <h3 className="text-xl font-semibold">{theater.name}</h3>
          <p className="text-gray-600">{theater.location}</p>
        </div>
      ))}
    </div>
  );
};
