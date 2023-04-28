import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store";

export const usePruebaStore = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.prueba);

  const onIncrement = () => {
    dispatch(increment());
  };

  return { counter, onIncrement };
};
