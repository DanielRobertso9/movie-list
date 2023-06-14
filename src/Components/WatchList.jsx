import React from "react";
import MovieCard from "./MovieCard";

const WatchList = (props) => {
  const { list, removeMovie } = props;

  const watchListDisplay = list.map((movie, index) => {
    return <MovieCard movie={movie} list={list} key={movie.id} removeMovie={removeMovie}/>;
  });
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{watchListDisplay}</div>
    </div>
  );
};

export default WatchList;
