import React, { useState, useEffect, useContext } from "react";
import { LogoutApp } from "../components/LogoutApp";
import {
  Table,
  Text,
  Button,
  Container,
  Card,
  Loading,
  Row,
  Col,
  Tooltip,
} from "@nextui-org/react";
import Swal from "sweetalert2";

import { IconButton } from "../components/IconButton";
import { DeleteIcon } from "../components/DeleteIcon";
import { EditIcon } from "../components/EditIcon";
import { ModalComponent } from "../components/ModalComponent";

export const AdminPage = () => {

  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const options = { year: "numeric", month: "short", day: "numeric" };

  const actualizarPeliculas = () => {
    // fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     "http://52.202.2.211/api/v1/films"
    //   )}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const { items } = JSON.parse(data.contents);
    //     setPeliculas(items);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setIsLoading(false);
    //   });
  };

  useEffect(() => {
    actualizarPeliculas();
  }, []);

  const eliminarPelicula = (id) => {
    console.log("Eliminar reserva", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `
        https://api.allorigins.win/get?url=${encodeURIComponent(
          `http://52.202.2.211/api/v1/films/${id}
          `
        )}
        `,
          {
            method: "DELETE",
          }
        )
          .then(() => {
            actualizarPeliculas();
            console.log("Reserva eliminada exitosamente");
          })
          .catch((error) => console.error(error));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const columns = [
    { name: "Titulo", uid: "title" },
    { name: "Director", uid: "director" },
    { name: "Año", uid: "release_date" },
    { name: "Editar", uid: "actions" },
  ];

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "id":
      case "title":
      case "correo":
      case "telefono":
        return cellValue;
      case "fecha":
        const date = new Date(cellValue);
        return date.toLocaleDateString("es-ES", options);

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user")}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                // onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton
                  onClick={() => eliminarPelicula(item.id)}
                  color="error"
                >
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return (
    <Container
      css={{
        width: "100%",
        margin: "0 auto",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <Text h3>Listado de Peliculas</Text>
      {isLoading && <Loading />}
      <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
          overflow: "scroll",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              css={{
                margin: "0 auto",
                padding: "0.5rem",
              }}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body>
          {peliculas.map((pelicula) => (
            <Table.Row key={pelicula.id}>
              {columns.map((column) => (
                <Table.Cell
                  key={column.uid}
                  css={{
                    padding: "0.5rem 1rem",
                  }}
                >
                  {renderCell(pelicula, column.uid)}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Card
        isHoverable
        css={{
          minHeight: "90px",
          minWidth: "350px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <fieldset>
          <Button onPress={openModal} css={{ maxW: "40%" }}>
            Agregar pelicula
          </Button>
          <Button onPress={actualizarPeliculas} css={{ maxW: "40%" }}>
            Actualizar
          </Button>
          <LogoutApp />
        </fieldset>
        <ModalComponent visible={modalVisible} onClose={closeModal} />
      </Card>
    </Container>
  );
};
