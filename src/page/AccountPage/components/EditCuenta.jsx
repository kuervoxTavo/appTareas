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
import { useEffect } from "react";

const EditCuenta = ({ isOpenEditModal, closeEditModal }) => {
  /* useForm de la libreria ---- react-hook-form */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  /* Recibe el parametro para validar la informacion */

  /* Se resetea el formulario cada vez que se cambia el estado de visible */
  useEffect(() => {
    if (!isOpenEditModal) {
      reset();
    }
  }, [isOpenEditModal]);

  /* Contruye la funcion onsubmit */
  const enviando = (formData) => {

    console.log('sdsdsdsdsd')
    
    console.log(formData);

    closeEditModal();
  };

  return (
    /* Verifica si esta visible el modal*/
    <Modal show={isOpenEditModal} onHide={closeEditModal}>
      {/* Cabcera del modal */}
      <ModalHeader closeButton>
        <ModalTitle>Editar cuenta</ModalTitle>
      </ModalHeader>

      {/* Cuerpo de la ventana modal */}
      <ModalBody>
        <Form onSubmit={handleSubmit(enviando)}>
          <FormGroup>
            <FormLabel>Nombre</FormLabel>
            <FormControl
              type="text"
              placeholder="Escribe un nombre nueva"
              {...register("name")}
            />
            {/* En caso de erro en la validacion */}
            {errors.name && (
              <FormText>
                <Alert variant="danger">{errors.name.message}</Alert>
              </FormText>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="Escribe una email nueva"
              {...register("email")}
            />
            {/* En caso de erro en la validacion */}
            {errors.email && (
              <FormText>
                <Alert variant="danger">{errors.email.message}</Alert>
              </FormText>
            )}
          </FormGroup>


        </Form>
      </ModalBody>

      {/* Opciones del modal */}
      <ModalFooter>
        <Button variant="secondary" onClick={closeEditModal}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(enviando)}>
          Actualizar cuenta
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditCuenta;
