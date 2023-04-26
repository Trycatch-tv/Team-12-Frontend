import React from "react";
import { Card, Grid, Text, Image, Row, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "../styles/generalStyles.css";
import LinkedinIcon from "../assets/icon/LinkedinIcon";
import GitHubIcon from "../assets/icon/GitHubIcon";
import GmailIcon from "../assets/icon/GmailIcon";

export const DevelopCards = ({ ...info }) => {
  const imgURL = (url) => {
    return new URL(`../assets/developers/${url}.jpg`, import.meta.url).href;
  };

  return (
    <>
      <Grid css={{ padding: "1rem" }}>
        <Row
          justify="center"
          css={{
            marginBottom: "-60px",
            zIndex: "5",
          }}
        >
          <Image
            src={imgURL(info.image)}
            alt="Product Image"
            objectFit="cover"
            css={{
              width: "100%",
              height: "100%",
              borderRadius: "180%",
              filter: "none",
              boxShadow: "rgb(174 174 179) 1px -1px 5px 1px",
              "&:hover": {
                transform: "scale(1.006)",
              },
            }}
          />
        </Row>
        <Card
          isHoverable
          css={{
            w: "100%",
            alignContent: "center",
          }}
        >
          <Card.Header css={{}}>
            <Spacer y={1} />
          </Card.Header>
          <Card.Body
            css={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              padding: "5px",
              alignItems: "center",
            }}
          >
            <Text
              css={{
                color: "rgb(80 84 86)",
                marginBottom: "0",
                marginTop: "0.5rem",
              }}
              weight="bold"
            >
              {info.name}
            </Text>
          </Card.Body>
          <Card.Footer
            css={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0 10px 10px 10px",
              width: "100%",
            }}
          >
            <Row
              align="center"
              justify="center"
              css={{
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Text
                css={{
                  color: "rgb(80 84 86)",
                  margin: "0",
                }}
              >
                Rol: {info.title}
              </Text>
              <Row
                justify="center"
                align="center"
                css={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginTop: "10px",
                  flexDirection: "row",
                }}
              >
                {info.linkedin ? (
                  <Link to={info.linkedin} target="_blank">
                    <LinkedinIcon />
                  </Link>
                ) : null}
                {info.github ? (
                  <Link to={info.github} target="_blank">
                    <GitHubIcon />
                  </Link>
                ) : null}
                {info.email ? (
                  <Link to={`mailto:${info.email}`} target="_blank">
                    <GmailIcon />
                  </Link>
                ) : null}
              </Row>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};
