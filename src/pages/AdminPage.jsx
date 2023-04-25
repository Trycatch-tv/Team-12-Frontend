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

  const url = import.meta.env.VITE_FRONT_API;

  const agregarPelicula = async (pelicula) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pelicula),
      });
      const nuevaPelicula = await response.json();
      setPeliculas([...peliculas, nuevaPelicula]);
      console.log("Pelicula agregada exitosamente");
    } catch (error) {
      console.error(error);
    }
  };

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
        ${url}/${id}
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

  const actualizarPeliculas = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const { items } = await response.json();
      if (JSON.stringify(peliculas) !== JSON.stringify(items)) {
        setPeliculas(items);
        console.log("Listado actualizado");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    actualizarPeliculas();
  }, []);

  // const search = "";
  // const sort = "";
  // const { movies, getMovies, loading } = useMovies({ search, sort });
  // console.log("admin:", movies);
  // const options = { year: "numeric", month: "short", day: "numeric" };

  // const actualizarPeliculas = () => {
  //   getMovies({ search: null });
  //   console.log("Listado actualizado");
  // };

  // useEffect(() => {
  //   getMovies({ search: null });
  //   setPeliculas(movies);
  //   setIsLoading(false);
  // }, [movies]);

  // const eliminarPelicula = (id) => {
  //   console.log("Eliminar reserva", id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(
  //         `
  //       http://51.222.31.16/api/v1/films/${id}
  //       `,
  //         {
  //           method: "DELETE",
  //         }
  //       )
  //         .then(() => {
  //           actualizarPeliculas();
  //           console.log("Reserva eliminada exitosamente");
  //         })
  //         .catch((error) => console.error(error));
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   });
  // };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
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
          {peliculas?.map((pelicula) => (
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
