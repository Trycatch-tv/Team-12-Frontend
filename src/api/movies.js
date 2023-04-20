// función que obtiene los resultados de la API y los almacena en caché
const fetchMovies = async () => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "http://52.202.2.211/api/v1/films"
      )}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const apiData = await response.json();
    const movies = apiData.contents;
    const { items } = JSON.parse(movies);
    localStorage.setItem("moviesCache", JSON.stringify(items)); // almacenar los resultados en caché
  } catch (error) {
    throw new Error("Error al obtener los resultados de la API");
  }
};

// función que busca los resultados en la caché local
export const searchMovies = async ({ search }) => {
  if (!search || search === "") {
    try {
      const movies = JSON.parse(localStorage.getItem("moviesCache")); // buscar los resultados en la caché local
      return movies.map((movie) => ({
        titulo: movie.title,
        genero: movie.gender.name,
        año: movie.release_date,
        director: movie.director,
        calificacion: movie.calificacion,
        reparto: movie.reparto,
        banner: movie.poster_url ? movie.poster_url : "../assets/cinema.jpg",
        sinopsis: movie.sinopsis,
      }));
    } catch (error) {
      throw new Error("Error en la búsqueda");
    }
  } else {
    try {
      const movies = JSON.parse(localStorage.getItem("moviesCache")); // buscar los resultados en la caché local
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      return filteredMovies.map((movie) => ({
        titulo: movie.title,
        genero: movie.gender.name,
        año: movie.release_date,
        director: movie.director,
        calificacion: movie.calificacion,
        reparto: movie.reparto,
        banner: movie.poster_url ? movie.poster_url : "../assets/cinema.jpg",
        sinopsis: movie.sinopsis,
      }));
    } catch (error) {
      throw new Error("Error en la búsqueda");
    }
  }
};

// función que se ejecuta al inicio de la aplicación para obtener los resultados de la API y almacenarlos en caché
fetchMovies();
