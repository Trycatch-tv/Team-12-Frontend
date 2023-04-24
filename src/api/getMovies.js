export const getMovies = async () => {
  const url = import.meta.env.VITE_FRONT_API;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const { items } = await response.json();
    return items.map((movie) => ({
      titulo: movie.title,
      genero: movie.gender.name,
      año: movie.release_date,
      director: movie.director,
      calificacion: movie.calificacion,
      reparto: movie.reparto,
      banner: movie.poster_url ? movie.poster_url : "../assets/cinema.jpg",
      sinopsis: movie.sinopsis,
      id: movie.id,
    }));
  } catch (error) {
    throw new Error("Error en la búsqueda");
  }
};
