import { Modal, Button, Text, Input, Loading } from "@nextui-org/react";
import { useState } from "react";
import dataGenero from "../data/dataGenero";
import dataCategorias from "../data/dataCategorias";
import Swal from "sweetalert2";
import "../styles/ModalComponent.css";

export const ModalComponent = ({ visible, onClose }) => {
  const [poster, setPoster] = useState("");
  const [categoria, setCategoria] = useState("Categoria");
  const [genero, setGenero] = useState("Genero");
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [language, setLanguage] = useState("es");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    titulo: "",
    sinopsis: "",
    director: "",
    releaseDate: "",
  });

  const url = import.meta.env.VITE_FRONT_API;

  const closeHandler = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    const errors = {};

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

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsLoading(false);
      return;
    }

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

      const data = await response.json();

      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "La película ha sido publicada exitosamente",
      });

      closeHandler();
      setPoster("");
      setCategoria("Categoria");
      setGenero("Genero");
      setTitulo("");
      setSinopsis("");
      setLanguage("es");
      setDirector("");
      setReleaseDate("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo publicar la película. Por favor, inténtalo de nuevo más tarde",
      });
    }
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      css={{
        width: "96%",
        margin: "0 auto",
      }}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            Bienvenido Agrega tu película
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body
        css={{
          gap: "0.5rem",
        }}
      >
        <Input
          aria-label="poster"
          name="file"
          type="file"
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Poster"
          onChangeCapture={(event) => {
            if (event.target.files.length > 0) {
              setPoster(event.target.files[0]);
            }
          }}
          id="fileInput"
        />
        <select
          className="select__modal"
          native
          onChange={(event) => setCategoria(event.target.value)}
          value={categoria}
          required
        >
          <option disabled>Categoria</option>
          {dataCategorias.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {formErrors.categoria && (
          <p className="error-message">{formErrors.categoria}</p>
        )}
        <select
          className="select__modal down"
          native
          onChange={(event) => setGenero(event.target.value)}
          value={genero}
        >
          <option disabled>Genero</option>
          {dataGenero.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {formErrors.categoria && (
          <p className="error-message">{formErrors.categoria}</p>
        )}
        <Input
          type="text"
          aria-label="titulo"
          name="titulo"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Titulo"
          onChange={(event) => setTitulo(event.target.value)}
          helperText={formErrors.titulo}
          helperColor="error"
          css={{
            margin: "0",
            marginTop: "0.5rem",
          }}
        />

        <Input
          type="text"
          aria-label="sinopsis"
          name="sinopsis"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Sinopsis"
          onChange={(event) => setSinopsis(event.target.value)}
          helperText={formErrors.sinopsis}
          helperColor="error"
          css={{
            margin: "0",
            marginTop: "0.5rem",
          }}
        />
        <Input
          type="text"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          aria-label="language"
          name="language"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Lenguage"
          helperText={formErrors.language}
          helperColor="error"
          css={{
            margin: "0",
            marginTop: "0.5rem",
          }}
        />
        <Input
          aria-label="director"
          name="director"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Director"
          onChange={(event) => setDirector(event.target.value)}
          helperText={formErrors.director}
          helperColor="error"
          css={{
            margin: "0",
            marginTop: "0.5rem",
          }}
        />
        <Input
          type="date"
          aria-label="release_date"
          name="releaseDate"
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Año de lanzamiento"
          onChange={(event) => setReleaseDate(event.target.value)}
          helperText={formErrors.releaseDate}
          helperColor="error"
          css={{
            margin: "0",
            marginTop: "0.5rem",
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>

        {isLoading ? (
          <Loading />
        ) : (
          <Button auto onPress={(event) => handleSubmit(event)}>
            Send
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
