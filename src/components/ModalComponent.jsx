import { useState } from "react";
import { Modal, Button, Text, Input, Loading } from "@nextui-org/react";
import dataGenero from "../data/dataGenero";
import dataCategorias from "../data/dataCategorias";
import { validateFields } from "../helpers/validateFields";
import { handleFormSubmit } from "../helpers/handleFormSubmit ";
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

  const closeHandler = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    const errors = validateFields({
      poster,
      categoria,
      genero,
      titulo,
      sinopsis,
      director,
      releaseDate,
      setIsLoading,
    });

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsLoading(false);
      return;
    }

    handleFormSubmit({
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
    });
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
