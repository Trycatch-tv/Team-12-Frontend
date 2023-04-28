import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store";

export const useAuth = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const onLogin = () => {
    dispatch(login());
  };

  const onLogout = () => {
    dispatch(logout());
  };
  return { onLogin, onLogout, isAuthenticated };
};
