import React from "react";

const MovieCard = (props) => {
  const { movie, addMovie, removeMovie, list } = props;

  const inWatchList = list.filter((mov) => {
    return mov.id === movie.id;
  });

  // const button = () => {
  //   if (inWatchList.length === 0) {
  //     <button onClick={() => addMovie(movie)}>Add to List</button>;
  //   } else {
  //     <button onClick={() => removeMovie(movie)}>Remove</button>;
  //   }
  // };

  const button =
inWatchList.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
) : (
    <button onClick={() => removeMovie(movie)}>Remove</button>
);



  return (
    <div className="movie-card">
      <div>
        <img
          alt={`movie-poster-${movie.id}`}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        ></img>
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
