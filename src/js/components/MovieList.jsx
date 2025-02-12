import React from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  if (props.moviesArray.length === 0) {
    return (
      <>
        <div>
          <h5>Todavía no hay películas que mostrar</h5>
        </div>
      </>
    );
  }

  return (
    <>
      {props.moviesArray.map((movie, index) => {
        return (
          <div key={index}>
            <MovieItem title={movie.title} year={movie.year} id={movie.id} />
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
