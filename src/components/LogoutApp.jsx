import { Button, Link } from "@nextui-org/react";
import { useAuth } from "../hooks";

export const LogoutApp = () => {
  const { onLogout } = useAuth();

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Link>
      <Button rounded bordered onPress={handleLogout} css={{ maxW: "40%" }}>
        LogoutApp
      </Button>
    </Link>
  );
};
