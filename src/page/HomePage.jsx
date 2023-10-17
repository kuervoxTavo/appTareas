import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        {/* Comportamiento de las columnas segun su tamaño */}
        <Col xs={{span: 12}} md={{span: 6}} className="mb-4">
          <h2>Bienvenid@ a este gestor de tareas</h2>
          <p>Aqui podras gestionar tus proyectos</p>
          <p>Marcar tus tareas terminadas, Agrgadas, eliminar o actualizar</p>
          <div>
            <Link to="/login">Ingresa</Link> o
            {/* Coloca un boton de react bootstrap que se comporta como link
            para ello se le coloca el as , alias*/}
            <Button as={Link} to="/register" className="ml-1">
              Crea una cuenta
            </Button>
          </div>
        </Col>
        <Col>
          <img className="img-fluid" src="/img/task-manager.svg" alt="" />
          <p>Gestina tu tiempo aumenta tu productividad</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
