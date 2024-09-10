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
//           <Link to={`/user/movie-details/${movie._id}`}>
//           {/* <Link to={`/login`}> */}
          
//           <button className="btn btn-primary">Book Ticket</button>
//           </Link>

          
//           {/* </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };


import { Link } from 'react-router-dom';

// Example boolean to determine login status
const isLoggedIn = false; // Replace this with actual login check logic

export const MovieCard = ({ movie }) => {
  // Determine the link based on login status
  const linkPath = isLoggedIn ?  '/login' : `/user/movie-details/${movie._id}`;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl h-full">
      <figure className="h-60">
        <img
          src={movie?.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-xl font-bold">{movie.title}</h2>

          {/* Tailwind for truncating long text */}
          <p className="text-sm text-gray-700 line-clamp-3">
            {movie?.description}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={linkPath}>
            <button className="btn btn-primary">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
