import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
    const {setPage, page, movieList, list, addMovie, removeMovie} = props

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        list={list}
        movie={movie}
        key={movie.id}
        addMovie={addMovie}
        removeMovie={removeMovie}
      />
    );
  });

  const decrement = () => {
    if(page>1){
      setPage(page - 1)   
    }}

  const increment = () => {
    setPage(page + 1)
  };

  return (
    <div className="page">
      <h1>Daniel's Movie Theater</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
