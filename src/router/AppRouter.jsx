import { Route, Routes } from "react-router-dom";
import { Pdp } from "../pages/Pdp";
import { CineList } from "../components/cartelera/CineList";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AdminPage } from "../pages/AdminPage";
import { LogoutApp } from "../components/LogoutApp";
import { LoginPage } from "../pages/LoginPage";
import { AboudUs } from "../pages/AboudUs";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRouter />}>
        <Route path="/" element={<CineList />} />
        <Route path="/movie/:id" element={<Pdp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboudUs" element={<AboudUs />} />
      </Route>
      <Route path="/private" element={<PrivateRouter />}>
        <Route path="/private" element={<AdminPage />} />
        <Route path="/private/logout" element={<LogoutApp />} />
      </Route>
    </Routes>
  );
};
