import React, { useState, useEffect } from "react";
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
import { useMovies } from "../hooks/useMovies";
import { deleteMovie } from "../api/deleteMovie";

export const AdminPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const search = "";
  const sort = "";
  const [movieDeleted, setMovieDeleted] = useState(false);

  const { getMovies, loading, movies } = useMovies({ search, sort });

  const eliminarPelicula = (id) => {
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
        deleteMovie(id)
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setMovieDeleted(true);
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Error!",
              "There was an error deleting the movie.",
              "error"
            );
          });
      }
    });
  };

  useEffect(() => {
    getMovies({ search: null });
  }, []);

  useEffect(() => {
    if (movieDeleted) {
      getMovies({ search: null });
      setMovieDeleted(false);
    }
  }, [movieDeleted, getMovies]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const columns = [
    { name: "Titulo", uid: "titulo" },
    { name: "Director", uid: "director" },
    { name: "Año", uid: "año" },
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
              <Tooltip content="Delete user" color="error">
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
      {loading && <Loading />}
      <Table
        aria-label="Tabla de listado de películas"
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
          {movies?.map((pelicula) => (
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
          <Button onPress={getMovies} css={{ maxW: "40%" }}>
            Actualizar
          </Button>
          <LogoutApp />
        </fieldset>
        <ModalComponent visible={modalVisible} onClose={closeModal} />
      </Card>
    </Container>
  );
};
