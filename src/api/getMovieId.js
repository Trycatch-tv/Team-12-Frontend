export const getMovieId = async (id) => {
  const url = import.meta.env.VITE_FRONT_API;
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
