 
export const MovieCard = ({ movie }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img src= {movie?.image}
      alt="moovie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{movie.title}</h2>
    <p>{movie.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Ticket</button>
    </div>
  </div>
</div>
  );
};
 