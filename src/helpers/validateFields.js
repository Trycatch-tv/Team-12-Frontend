import Swal from "sweetalert2";

export const validateFields = ({
  poster,
  categoria,
  genero,
  titulo,
  sinopsis,
  director,
  releaseDate,
  setIsLoading,
}) => {
  let errors = {};

    setIsLoading(true);


  if (!poster) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes adjuntar el poster.",
    });
    setIsLoading(false);
  }
  if (categoria === "Categoria") {
    errors.categoria = "Debes seleccionar una categoría";
  }

  if (genero === "Genero") {
    errors.genero = "Debes seleccionar un género";
  }

  if (!titulo) {
    errors.titulo = "Debes indicar el titulo.";
  }
  if (!sinopsis) {
    errors.sinopsis = "Debes indicar la sinpsis.";
  }

  if (!director) {
    errors.director = "Debes indicar el director.";
  }

  if (!releaseDate) {
    errors.releaseDate = "Debes indicar la fecha.";
  }
  return errors;
};
