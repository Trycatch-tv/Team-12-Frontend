import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../testcontext/authContext";
import { useAuth } from "../hooks";

export const PublicRouter = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/private" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};
