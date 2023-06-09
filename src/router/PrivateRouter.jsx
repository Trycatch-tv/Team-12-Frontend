import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const PrivateRouter = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

