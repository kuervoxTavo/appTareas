import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Navegacion = () => {

  const {logout} = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to="/">
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/projects">
            Projectos
          </NavLink>

          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to="/admin/users">
              Usuarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
          <NavLink className="nav-link" to="/login">
            Iniciar session
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Registrarse
          </NavLink>
          <NavLink className="nav-link" to="/account">
            Mi Cuenta
          </NavLink>
          <NavLink className="nav-link" onClick={logout}>
            Cerrar session
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
