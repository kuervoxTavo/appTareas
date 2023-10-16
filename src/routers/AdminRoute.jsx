import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const AdminRoute = ({ children, redirecTo = "/login" }) => {


    const {isLogget, hasPermiso}   = useAuth();


    if (isLogget() && hasPermiso()) {
        return children ? children : <Outlet />;
      }
    
      return <Navigate to={redirecTo} />;


    
}

export default AdminRoute

