export const deleteMovie = async (id) => {
  const url = import.meta.env.VITE_FRONT_API;
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      return;
    }
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const item = await response.json();
    return item;
  } catch (error) {
    throw new Error(`Error deleting movie with id ${id}: ${error.message}`);
  }
};
