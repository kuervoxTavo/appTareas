import React, { useState } from "react";

export const useModal = () => {
  /* Variable de estado , opciones del modal */
  const [isOpen, setIsOpen] = useState(false);

  /* Funciones para abrir y cerrar el modal */

  const openModal = () => setIsOpen(true);
  const closeModal =  () => setIsOpen(false);

  /* Retorna las opciones de la ventana modal */
  return [isOpen, openModal, closeModal];
};
