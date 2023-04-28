import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

export const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
