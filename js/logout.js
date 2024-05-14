// ----------------------------------
// 1. Proteccion de ruta
// ----------------------------------

import { estaLogueado } from "./util";

const $botonLogout = document.getElementById("boton-salir");

// ----------------------------------
// 1. Proteccion de ruta
// ----------------------------------

if (estaLogueado()) {
  $botonLogout.classList.remove("d-none");
}

// ----------------------------------
// 1. Proteccion de ruta
// ----------------------------------

$botonLogout.addEventListener("click", () => {
  swal
    .fire({
      title: "Atención",
      text: "¿Estás seguro que deseas cerrar sesion?",
      confirmButtonText: "Si, cerrar",
      cancelButtonText: "No, mantenerse logueado",
      showCancelButton: true,
    })
    .then((res) => {
      if (res.isConfirmed) {
        // Cerrar sesión

        //Eliminar la sesion de SS
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('estaLogueado');
        
        //Redirigir al usuario
        window.location.assign('/');
      }
    });
});
