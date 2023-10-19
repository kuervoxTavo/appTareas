import React from "react";
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import useAuth from "../../../auth/useAuth";

const DeleteCuenta = ({ isOpenDeleteModal, closeDeleteModal }) => {
  const { logout } = useAuth();

  const eliminarCuenta = () => {
    logout();
  };

  return (
    /* Verifica si esta visible el modal*/
    <Modal show={isOpenDeleteModal} onHide={closeDeleteModal}>
      {/* Cabcera del modal */}
      <ModalHeader closeButton>
        <ModalTitle>Eliminar Cuenta de usuario</ModalTitle>
      </ModalHeader>

      {/* Cuerpo de la ventana modal */}
      <ModalBody>
        <Alert variant="danger">
          ¿ Esta seguro que decea eliminar la cuenta, se perddra toda la
          informacion?{" "}
        </Alert>
      </ModalBody>

      {/* Opciones del modal */}
      <ModalFooter>
        <Button variant="secondary" onClick={closeDeleteModal}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={eliminarCuenta}>Eliminar Cuenta</Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteCuenta;
