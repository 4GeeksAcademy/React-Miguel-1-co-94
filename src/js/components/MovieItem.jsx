import React from "react";

function MovieItem(props) {
  return (
    <>
      <div>
        <h5>Esto es el título: {props.title}</h5>
        <p>Esto es el año: {props.year}</p>
        <p>Esto es el id: {props.id}</p>
      </div>
    </>
  );
}

export default MovieItem;
