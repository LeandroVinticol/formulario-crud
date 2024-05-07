import { obtenerContactosDeLS } from "../util.js";
import { eliminarContacto } from "./abm.js";

export const agregarContactoALS = (contacto) => {
  //traemos desde LS lo que haya guardado
  const contactos = obtenerContactosDeLS();
  //agregamos lo nuevo a lo que estaba creado
  contactos.push(contacto);
  //actualizamos contactos
  localStorage.setItem("contactos", JSON.stringify(contactos));
};

const cargarFilaTabla = (contacto, indice) => {
  const $tbody = document.getElementById("tbody-contactos");

  const $tr = document.createElement("tr");

  //INDICE
  const $tdIndice = document.createElement("td");
  $tdIndice.textContent = indice;
  $tr.appendChild($tdIndice);

  //IMAGEN
  const $tdImagen = document.createElement("td");
  const $imagen = document.createElement("img");
  $imagen.src = contacto.imagen;
  $imagen.alt = contacto.nombre;
  $imagen.classList.add("imagen-tabla");
  $tdImagen.appendChild($imagen);
  $tr.appendChild($tdImagen);

  //NOMBRE
  const $tdNombre = document.createElement("td");
  $tdNombre.textContent = contacto.nombre;
  $tr.appendChild($tdNombre);
  //NUMERO
  const $tdNumero = document.createElement("td");
  $tdNumero.textContent = contacto.numero;
  $tr.appendChild($tdNumero);
  //EMAIL
  const $tdEmail = document.createElement("td");
  $tdEmail.textContent = contacto.email;
  $tr.appendChild($tdEmail);
  //NOTAS
  const $tdNotas = document.createElement("td");
  $tdNotas.textContent = contacto.notas;
  $tr.appendChild($tdNotas);
  //ACCIONES
  const $tdAcciones = document.createElement("td");
  const $btnEditar = document.createElement("button");
  const $btnEliminar = document.createElement("tbutton");
  $btnEditar.classList.add("btn", "btn-sm", "btn-warning", "me-2");
  $btnEliminar.classList.add("btn", "btn-sm", "btn-danger");
  $btnEditar.textContent = "Editar";
  $btnEliminar.textContent = "Eliminar";
  $btnEditar.onclick = () => {
    console.log(`Editando contacto ${contacto.nombre}`);
  };
  $btnEliminar.onclick = () => {
    eliminarContacto(contacto.codigo, contacto.nombre);
  };
  $tdAcciones.appendChild($btnEditar);
  $tdAcciones.appendChild($btnEliminar);
  $tr.appendChild($tdAcciones);

  $tbody.appendChild($tr);
};

export const cargarTabla = () => {
  //recuperar contactos
  const contactos = obtenerContactosDeLS();
  //vaciar la tabla de los datos anteriores
  const $tbody = document.getElementById("tbody-contactos");
  $tbody.innerHTML = "";
  //crear una fila (tr) por cada contacto
  contactos.forEach((elemento, indice) => {
    cargarFilaTabla(elemento, indice + 1);
  });
};
