import { useContext, useState } from "react";
import { Button, Card, Grid, Input, Text } from "@nextui-org/react";
import { AuthContext } from "../context/authContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "team12") {
      login();
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <Grid.Container gap={2}>
      <Card
        isHoverable
        css={{
          width: "350px",
          margin: "2rem auto",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <Card.Header>
          <Text css={{ margin: "0 auto" }}>Iniciar sesión</Text>
        </Card.Header>
        <Grid css={{ width: "100%" }}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            clearable
            color="success"
            initialValue="getnextui"
            type="test"
            label="Username"
            placeholder="Enter your username"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid css={{ width: "100%" }}>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            clearable
            color="warning"
            initialValue="123"
            type="password"
            label="Password"
            placeholder="Enter your password"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid>
          <Button shadow color="primary" auto onPress={handleLogin}>
            Iniciar sesión
          </Button>
        </Grid>
      </Card>
    </Grid.Container>
  );
};
