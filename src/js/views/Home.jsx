import React, { useState } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([])
  const [idCounter, setIdCounter] = useState(0)

  function addMovie (movie) {
    setMovies([...movies, {...movie, id: idCounter}])
    setIdCounter(idCounter + 1)

    console.log(movies)
  }

  return (
    <>
      <div>
        <MovieForm addToMovies = {addMovie} />
      </div>

      <div>
        <h1>Movie List:</h1>
        <MovieList moviesArray={movies} />
      </div>
    </>
  );
}

export default Home;
