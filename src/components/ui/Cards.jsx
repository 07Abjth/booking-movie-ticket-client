// import { Link } from 'react-router-dom';
 

// export const MovieCard = ({ movie }) => {
//   return (
//     <div className="card card-compact bg-base-100 w-96 shadow-xl h-full">
//       <figure className="h-60">
//         <img
//           src={movie?.image}
//           alt={movie.title}
//           className="w-full h-full object-cover"
//         />
//       </figure>
//       <div className="card-body flex flex-col justify-between">
//         <div>
//           <h2 className="card-title text-xl font-bold">{movie.title}</h2>

//           {/* Tailwind for truncating long text */}
//           <p className="text-sm text-gray-700 line-clamp-3">
//             {movie?.description}
//           </p>
//         </div>
//         <div className="card-actions justify-end">
//           <Link to={`/user/movie-info-and-booking/${movie._id}`}>
//           {/* <Link to={`/login`}> */}
          
//           <button className="btn btn-primary">Book Ticket</button>
//           </Link>

          
//           {/* </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };


//  import { useNavigate } from 'react-router-dom';

// export const MovieCard = ({ movie }) => {
//   const navigate = useNavigate();

//   const handleBookTicket = () => {
//     // Navigate to the movie info and booking page
//     navigate(`/user/movie-info-and-booking/${movie._id}`);
//   };

//   return (
//     <div className="card card-compact bg-base-100 w-96 shadow-xl h-full">
//       <figure className="h-60">
//         <img
//           src={movie?.image}
//           alt={movie.title}
//           className="w-full h-full object-cover"
//         />
//       </figure>
//       <div className="card-body flex flex-col justify-between">
//         <div>
//           <h2 className="card-title text-xl font-bold">{movie.title}</h2>
//           <p className="text-sm text-gray-700 line-clamp-3">
//             {movie?.description}
//           </p>
//         </div>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary" onClick={handleBookTicket}>
//             Book Ticket
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useNavigate } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate(`/user/movie-info-and-booking/${movie._id}`);
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl h-full">
      <figure className="h-60">
        <img
          src={movie?.image || 'path/to/fallback-image.jpg'} // Fallback image
          alt={movie.title || 'Movie Poster'} // Descriptive alt text
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-xl font-bold">{movie.title}</h2>
          <p className="text-sm text-gray-700 line-clamp-3">
            {movie?.description || 'Description not available'}  
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleBookTicket}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
