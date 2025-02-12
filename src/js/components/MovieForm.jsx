import React, { useState } from "react";

function MovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addToMovies(formData);
    alert("Formulario enviado");
    setFormData({
      title: "",
      year: "",
    });
  }

  return (
    <>
      <form
        className="container-md my-5"
        onSubmit={handleSubmit}
        method="POST"
        action="http://localhost:3000/"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título de la película:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Año de la Película:
          </label>
          <input
            type="text"
            className="form-control"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success my-3">Enviar</button>
      </form>
    </>
  );
}

export default MovieForm;
