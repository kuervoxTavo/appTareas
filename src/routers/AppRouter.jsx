import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import Login from "../page/Login";
import Register from "../page/Register";

import NotFount from "../page/NotFount";
import Layout from "../components/layouts/Layout";
import useAuth from "../auth/useAuth";
import Account from "../page/Account";
import Projects from "../page/Projects";
import Project from "../page/Project";
import AdminUser from "../page/admin/AdminUser";
import ProtecteRoute from "./ProtecteRoute";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />

          {/* Rutas publicas */}
          <Route element={<PublicRoute redirecTo="/projects" />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Rutas privadas para verificar autentificacion */}

          <Route element={<ProtecteRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:projectId" element={<Project />} />
          </Route>

          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUser />
              </AdminRoute>
            }
          />

          <Route path="*" element={<NotFount />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
