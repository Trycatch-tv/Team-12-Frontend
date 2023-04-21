import { Button, Link } from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const LogoutApp = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Link>
      <Button rounded bordered onPress={handleLogout} css={{ maxW: "40%" }}>
        LogoutApp
      </Button>
    </Link>
  );
};
