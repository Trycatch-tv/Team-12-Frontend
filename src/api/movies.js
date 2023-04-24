
export const searchMovies = async ({ search }) => {
  const url = "https://51.222.31.16/api/v1/films";
  let endpoint = url;

  if (search && search !== "") {
    endpoint += `?query=${search}`;
  }

  try {
    const response = await fetch(endpoint);
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
