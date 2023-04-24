// get a api sin usar allorigins

// export const searchMovies = async ({ search }) => {
//   const url = "http://51.222.31.16/api/v1/films";
//   let endpoint = url;

//   if (search && search !== "") {
//     endpoint += `?query=${search}`;
//   }

//   try {
//     const response = await fetch(endpoint);
//     if (!response.ok) {
//       throw new Error("Network response was not ok.");
//     }
//     const { items } = await response.json();
//     return items.map((movie) => ({
//       titulo: movie.title,
//       genero: movie.gender.name,
//       año: movie.release_date,
//       director: movie.director,
//       calificacion: movie.calificacion,
//       reparto: movie.reparto,
//       banner: movie.poster_url ? movie.poster_url : "../assets/cinema.jpg",
//       sinopsis: movie.sinopsis,
//       id: movie.id,
//     }));
//   } catch (error) {
//     throw new Error("Error en la búsqueda");
//   }
// };

// get a api usando allorigins

export const searchMovies = async ({ search }) => {
  import.meta.env.VITE_FRONT_API;
  const url = import.meta.env.VITE_FRONT_API;
  let endpoint = url;

  if (search && search !== "") {
    endpoint += `?query=${search}`;
  }

  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    const { items } = JSON.parse(data.contents);

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
