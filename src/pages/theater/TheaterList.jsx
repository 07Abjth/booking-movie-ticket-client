 
export const TheaterList = ({ theaters, shows, selectedMovieId }) => {
  if (!theaters.length) {
    return <p>No theaters available for this movie</p>;
  }

  return (
    <div>
      {theaters.map((theater) => {
        // Filter shows related to the current theater and selected movie
        const theaterShows = shows.filter(show => show.theater === theater._id && show.movie === selectedMovieId);

        return (
          <div key={theater._id} className="mb-4 p-4 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold">{`${theater.name} - ${theater.location}`}</h3>
            
            {/* Show the available showtimes */}
            <div className="flex flex-wrap mt-2">
              {theaterShows.length > 0 ? (
                theaterShows.map((show) => {
                  const showDate = new Date(`${show.date}`); // We can use just the date field for display
                  return (
                    <button
                      key={show._id}
                      className="px-4 py-2 mr-2 mb-2 rounded-md bg-gray-200"
                    >
                      {`${showDate.toLocaleDateString()} - ${show.time}`} {/* Format date and show time */}
                    </button>
                  );
                })
              ) : (
                <p>No showtimes available</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
