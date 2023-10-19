import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import DeleteCuenta from "./components/DeleteCuenta";
import CambioPassword from "./components/CambioPassword";
import { useModal } from "../../hook/useModal";

const Account = () => {
  /* Llama al usuario del contexto */
  const { user } = useAuth();

  /* hook para mostrar ocultar ventana modal */

  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
  const [isOpenChangePassModal, openChangePassModal, closeChangePassModal] =
    useModal();

  return (
    <>
      <Container>
        <Row className="mt-5 mb-5">
          <Col xs={12} className="text-center">
            <img
              src="/img/male_avatar.svg"
              /* Estilos de la imagen */
              style={{
                width: "200px" /* Dimenciones de la imagenn */,
                height: "200px",
                borderRadius: "50px" /* Imagen redonda */,
                objectFit: "cover" /* Proporciones de la imagen */,
              }}
              alt="usuario"
            />
          </Col>
          <Col className="mt-4">
            <Card style={{ maxWidth: "360px" }} className="mx-auto p-4">
              <p className="text-center">
                <b>Nombre:</b> {user.name}
              </p>

              <p className="text-center">
                <b>Email:</b> {user.email}
              </p>

              <p className="text-center">
                <b>Telefono:</b> {user.telefono}
              </p>

              <p className="text-center">
                <b>Permisos:</b> {user.permisos[0]}
              </p>

              {/* Opciones de la cuenta */}

              <Button variant="warning">Editar cuenta</Button>

              {/* Boton para cambiar el password */}
              <Button
                variant="link"
                className="mt-2"
                onClick={openChangePassModal}
              >
                Cambiar contraseña
              </Button>

              {/* Boton para eliminar la cuenta */}
              <Button
                variant="danger"
                className="mt-5"
                onClick={openDeleteModal}
              >
                Eliminar cuenta
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteCuenta
        isOpenDeleteModal={isOpenDeleteModal}
        closeDeleteModal={closeDeleteModal}
      />

      <CambioPassword
        isOpenChangePassModal={isOpenChangePassModal}
        closeChangePassModal={closeChangePassModal}
      />
    </>
  );
};

export default Account;
