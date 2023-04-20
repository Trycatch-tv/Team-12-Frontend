import data from "../data/catalogo.json";

export const searchMovies = async ({ search }) => {

  if (!search || search === "") {
    return data.map((movie) => ({
      titulo: movie.titulo,
      genero: movie.genero,
      año: movie.año,
      director: movie.director,
      calificacion: movie.calificacion,
      reparto: movie.reparto,
      banner: movie.banner,
      sinopsis: movie.sinopsis,
    }));
  }

  const filteredMovies = data.filter((movie) =>
    movie.titulo.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Filtered movies:", filteredMovies);

  return filteredMovies.map((movie) => ({
    titulo: movie.titulo,
    genero: movie.genero,
    año: movie.año,
    director: movie.director,
    calificacion: movie.calificacion,
    reparto: movie.reparto,
    banner: movie.banner,
    sinopsis: movie.sinopsis,
  }));
};
