import { Contacto } from "./Contacto.js";

const contactos = [];

export const agregarContacto = (nombre, numero, email, imagen, notas) => {
  const contacto = new Contacto(nombre, numero, email, imagen, notas);

  console.log(contacto);
  //Agregar a algun lado el contacto
  contactos.push(contacto);
  console.log(contactos);

  //Local storage


};

export const editarContacto = () => {};

export const eliminarContacto = () => {};
