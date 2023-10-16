import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRoute = ({children, redirecTo='/login'}) => {

    const { isLogget } = useAuth();
    
    if (isLogget() ) {
        return <Navigate to={redirecTo} />;
    }
    
    return children ? children : <Outlet />;
}

export default PublicRoute