import { Route, Routes } from "react-router-dom";
import { Pdp } from "../pages/Pdp";
import { CineList } from "../components/cartelera/CineList";

export const AppRotuer = () => {
  return (
    <Routes>
      <Route path="/" element={<CineList />} />
      <Route path="/movies/:id" element={<Pdp />} />
    </Routes>
  );
};
