import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const ProtecteRoute = ({ children, redirecTo = "/login" }) => {

  const { isLogget } = useAuth();

  if (isLogget()) {
    return children ? children : <Outlet />;
  }

  return <Navigate to={redirecTo} />;

};

export default ProtecteRoute;
