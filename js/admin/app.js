import { validateName, validateNumber } from "./validator.js";
//1.SELECCIONAR ELEMENTOS

const $form = document.getElementById('form-contacto');
const $inputNombre = document.getElementById('input-nombre');
const $inputNumero = document.getElementById('input-numero');
const $inputEmail = document.getElementById('input-email');
const $inputImagen = document.getElementById('input-imagen');
const $inputNotas = document.getElementById('input-notas');

//2.EVENT LISTENER DEL SUBMIT

$form.addEventListener('submit', (event)=>{
    event.preventDefault();

    // const nombre = $inputNombre.value;
    // const numero = $inputNumero.value;
    // const email = $inputEmail.value;
    // const imagen = $inputImagen.value;
    // const notas = $inputNotas.value;

    // if(!nombre || !numero || !email || !imagen){
    //     alert(`No ingresó algunos de los campos requeridos`);
    //     return;
    // }

    if(!validateName($inputNombre) || !validateNumber($inputNumero)){
        alert('Revisá los campos');
        return;
    }
});