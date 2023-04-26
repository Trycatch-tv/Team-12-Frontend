import React from "react";
import { DevelopCards } from "../components/DevelopCards";
import data from "../data/data.json";
import { Container, Grid, Row } from "@nextui-org/react";


export const AboudUs = () => {
  return (
    <Grid.Container
      gap={2}
      alignItems="center"
      justify="center"
      css={{
        padding: "1rem",
        width: "100%",
        maxW: "1200px",
        margin: "0 auto",
      }}
    >
      {data.map((info, index) => (
        <Grid
          sm={4}
          md={3}
          css={{
            padding: "0.5rem",
            width: "100%",
            margin: "0 auto",
            maxW: "250px",
          }}
        >
          <DevelopCards key={index} {...info} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
