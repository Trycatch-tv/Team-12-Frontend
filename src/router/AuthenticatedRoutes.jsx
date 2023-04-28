import { Route } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage";
import { LogoutApp } from "../components/LogoutApp";
import { CineList } from "../pages/CineList";

export const AuthenticatedRoutes = () => {
  return (
    <>
      {/* <Route path="/private" element={<AdminPage />} /> */}
      {/* <Route path="/private/logout" element={<LogoutApp />} /> */}
      {/* <Route path="/private/cine-list" element={<CineList />} /> */}
    </>
  );
};
