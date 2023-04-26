import Swal from "sweetalert2";

export const handleFormSubmit = async ({
  poster,
  categoria,
  genero,
  titulo,
  sinopsis,
  language,
  director,
  releaseDate,
  setIsLoading,
  closeHandler,
  setPoster,
  setCategoria,
  setGenero,
  setTitulo,
  setSinopsis,
  setLanguage,
  setDirector,
  setReleaseDate,
}) => {
  const url = import.meta.env.VITE_FRONT_API;

  const formData = new FormData();
  formData.append("file", poster);
  formData.append("categoryId", categoria);
  formData.append("genderId", genero);
  formData.append("title", titulo);
  formData.append("sinopsis", sinopsis);
  formData.append("language", language);
  formData.append("director", director);
  formData.append("release_date", releaseDate);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: "La película ha sido publicada exitosamente",
    });

    closeHandler();
    setPoster("");
    setCategoria("");
    setGenero("");
    setTitulo("");
    setSinopsis("");
    setLanguage("");
    setDirector("");
    setReleaseDate("");
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudo publicar la película. Por favor, inténtalo de nuevo más tarde",
    });
  } finally {
    setIsLoading(false);
  }
};
