import { obtenerContactosDeLS } from "../util.js";
import { Contacto } from "./Contacto.js";
import { cargarTabla } from "./util.js";

export const agregarContacto = (nombre, numero, email, imagen, notas) => {
  const contacto = new Contacto(nombre, numero, email, imagen, notas);

  //Local storage
  const contactos = obtenerContactosDeLS();

  contactos.push(contacto);

  localStorage.setItem("contactos", JSON.stringify(contactos));
};

export const editarContacto = () => {};

export const eliminarContacto = (idContacto, nombreContacto) => {
  //Confirmar que se desea eliminar el contacto
  swal
    .fire({
      title: "Atención",
      text: `¿Estás seguro que deseas eliminar el contacto de ${nombreContacto}? Esta acción es irreversible.`,
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        //eliminar contacto
        console.log("Eliminar el contacto");
        //obtener lista de contactos
        const contactos = obtenerContactosDeLS();
        //filtrar contacto
        const nuevosContactos = contactos.filter((contacto) => {
          return contacto.codigo !== idContacto;
        });

        //actualizar lista en LS
        localStorage.setItem("contactos", JSON.stringify(nuevosContactos));

        //actualizar tabla
        cargarTabla();

        //notificar al usuario del exito
        swal.fire({
          title: "Exito",
          text: `Contacto ${nombreContacto} eliminado correctamente`,
          icon: "success",
          showConfirmButton: true,
          showCancelButton: false,
          confirmButtonText: "Tremen2",
        });
      }
    });
};
