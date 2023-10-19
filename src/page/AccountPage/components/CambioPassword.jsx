import React from "react";
import {
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import changePassword from "../../../validation/changePassword";
import { useEffect } from "react";

const CambioPassword = ({ isOpenChangePassModal, closeChangePassModal }) => {
  /* useForm de la libreria ---- react-hook-form */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: changePassword });
  /* Recibe el parametro para validar la informacion */

  /* Se resetea el formulario cada vez que se cambia el estado de visible */
  useEffect(() => {
    if (!isOpenChangePassModal) {
      reset();
    }
  }, [isOpenChangePassModal]);

  /* Contruye la funcion onsubmit */
  const enviando = (formData) => {
    alert("cambiando .... password ...");

    console.log(formData);
    closeChangePassModal();
  };

  return (
    /* Verifica si esta visible el modal*/
    <Modal show={isOpenChangePassModal} onHide={closeChangePassModal}>
      {/* Cabcera del modal */}
      <ModalHeader closeButton>
        <ModalTitle>Cambiar Password</ModalTitle>
      </ModalHeader>

      {/* Cuerpo de la ventana modal */}
      <ModalBody>
        <Form onSubmit={handleSubmit(enviando)}>
          <FormGroup>
            <FormLabel>Nueva Constraseña</FormLabel>
            <FormControl
              type="password"
              placeholder="Escribe una contraseña nueva"
              {...register("password")}
            />
            {/* En caso de erro en la validacion */}
            {errors.password && (
              <FormText>
                <Alert variant="danger">{errors.password.message}</Alert>
              </FormText>
            )}
          </FormGroup>
        </Form>
      </ModalBody>

      {/* Opciones del modal */}
      <ModalFooter>
        <Button variant="secondary" onClick={closeChangePassModal}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(enviando)}>
          Actualizar contraseña
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CambioPassword;
