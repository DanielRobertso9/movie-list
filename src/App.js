import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MovieScreen from "./Components/MovieScreen";
import WatchList from "./Components/WatchList";
import axios from "axios";

function App() {
  console.log(process.env.REACT_APP_API_KEY)

  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const API = `https://api.themoviedb.org/3/movie/popular?api_key=08367dc1e5d6e3e9a5e8f8eab282eb9a&language=en-US&page=${page}`;

  const getData = () => {
    axios.get(API).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  useEffect(() => {
    getData();
  }, [page]);

  // const addMovie = (movie) => {
  //   setList(list.push(movie))
  // }

  const addMovie = (movie) => setList([...list, movie]);

  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    setList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList list={list} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
