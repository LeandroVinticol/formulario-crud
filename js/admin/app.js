import { agregarContacto } from "./abm.js";
import { cargarTabla } from "./util.js";
import {
  validateEmail,
  validateName,
  validateNumber,
  validateUrl,
} from "./validator.js";
//0.CARGAR TABLA

cargarTabla();

//1.SELECCIONAR ELEMENTOS

const $form = document.getElementById("form-contacto");
const $inputNombre = document.getElementById("input-nombre");
const $inputNumero = document.getElementById("input-numero");
const $inputEmail = document.getElementById("input-email");
const $inputImagen = document.getElementById("input-imagen");
const $inputNotas = document.getElementById("input-notas");

//2.EVENT LISTENER DEL BLUR

$inputNombre.addEventListener("blur", () => {
  validateName($inputNombre);
});
$inputNumero.addEventListener("blur", () => {
  validateNumber($inputNumero);
});
$inputEmail.addEventListener("blur", () => {
  validateEmail($inputEmail);
});
$inputImagen.addEventListener("blur", () => {
  validateUrl($inputImagen);
});

//3.EVENT LISTENER DEL SUBMIT

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Validar campos

  if (
    !validateName($inputNombre) ||
    !validateNumber($inputNumero) ||
    !validateEmail($inputEmail) ||
    !validateUrl($inputImagen)
  ) {
    alert("Revisá los campos");
    return;
  }

  // alert("Todo Ok");

  const nombre = $inputNombre.value;
  const numero = $inputNumero.value;
  const email = $inputEmail.value;
  const imagen = $inputImagen.value;
  const notas = $inputNotas.value;

  agregarContacto(nombre, numero, email, imagen, notas);

  //Resetear formulario

  $form.reset();
  $inputNombre.classList.remove("is-valid", "is-invalid");
  $inputNumero.classList.remove("is-valid", "is-invalid");
  $inputEmail.classList.remove("is-valid", "is-invalid");
  $inputImagen.classList.remove("is-valid", "is-invalid");

  //Actualizar tabla

  cargarTabla();

  //Notificar al usuario
  swal.fire({
    title: "Exito",
    text: `Contacto creado bajo el nombre de ${nombre}`,
    icon: "success",
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "Tremen2",
  });
});
