import { useSelector } from "react-redux";

export const useUiStore = () => {
  const { isDateModalOpen } = useSelector((state) => state.ui);
  return {
    // Propiedades de la tienda:
    isDateModalOpen,
    // Metodos de la tienda:
  };
};
