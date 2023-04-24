import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useState } from "react";

export const ModalComponent = ({ visible, onClose }) => {
  const [poster, setPoster] = useState("");
  const [categoria, setCategoria] = useState("");
  const [genero, setGenero] = useState("");
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [language, setLanguage] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  console.log("poster", poster);

  const closeHandler = () => {
    onClose();
    console.log("closed");
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("file", poster);
  //   formData.append("categoryId", categoria);
  //   formData.append("genderId", genero);
  //   formData.append("title", titulo);
  //   formData.append("sinopsis", sinopsis);
  //   formData.append("language", language);
  //   formData.append("director", director);
  //   formData.append("release_date", releaseDate);

  //   try {
  //     const response = await fetch("http://51.222.31.16/api/v1/films", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     // closeHandler();
  //   } catch (error) {
  //     console.error("Error al publicar la película: ", error);
  //     // Aquí podrías mostrar un mensaje de error o hacer alguna otra acción
  //   }
  // };

  const handleSubmit = async (event) => {
    // event.preventDefault();

    var formdata = new FormData();
    formdata.append(
      "file ",
      fileInput.files[0],
      "/C:/Users/jaime/Downloads/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
    );
    formdata.append("categoryId", "1");
    formdata.append("genderId", "2");
    formdata.append("title", "Jaimefront");
    formdata.append(
      "sinopsis",
      "ñlkjasdfñlkjasdf ñlkjasdfñlkj  ñlkjañlsdfkj ñlkjasdfñ lkj "
    );
    formdata.append("language", "es");
    formdata.append("director", "Jaime test2");
    formdata.append("release_date", "2023-04-03");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://51.222.31.16/api/v1/films", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Bienvenido Agregar tu película
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            aria-label="poster"
            name="poster"
            type="file"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Poster"
            onChange={(event) => setPoster(event.fileInput.files[0])}
          />
          <Input
            aria-label="categoria"
            name="categoria"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Categoria"
            onChange={(event) => setCategoria(event.target.value)}
          />
          <Input
            aria-label="genero"
            name="genero"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Genero"
            onChange={(event) => setGenero(event.target.value)}
          />
          <Input
            aria-label="titulo"
            name="titulo"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Titulo"
            onChange={(event) => setTitulo(event.target.value)}
          />
          <Input
            aria-label="sinopsis"
            name="sinopsis"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Sinopsis"
            onChange={(event) => setSinopsis(event.target.value)}
          />
          <Input
            aria-label="language"
            name="language"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Lenguage"
            onChange={(event) => setLanguage(event.target.value)}
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
          />
          <Input
            aria-label="release_date"
            name="release_date"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Año de lanzamiento"
            onChange={(event) => setReleaseDate(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={(event) => handleSubmit(event)}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
