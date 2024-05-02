import { obtenerContactosDeLS } from "../util.js";
import { Contacto } from "./Contacto.js";

export const agregarContacto = (nombre, numero, email, imagen, notas) => {
  const contacto = new Contacto(nombre, numero, email, imagen, notas);

  //Local storage
  const contactos = obtenerContactosDeLS();

  contactos.push(contacto);

  localStorage.setItem("contactos", JSON.stringify(contactos));
};

export const editarContacto = () => {};

export const eliminarContacto = () => {};
