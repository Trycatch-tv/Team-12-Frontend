export const getMovieId = async (id) => {
  const url = "https://51.222.31.16/api/v1/films";
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const item = await response.json();
    return item;
  } catch (error) {
    throw new Error("Error en la búsqueda");
  }
};
