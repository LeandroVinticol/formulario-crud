export const validateName = (field) => {
  //No sea vacio, null, etc
  if (!field || !field.value.trim()) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    return false;
  }

  //Longitud
  if (field.value.trim().length < 3 || field.value.trim().length > 25) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    return false;
  }

  //Letras
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
  if (!regex.test(field.value)) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    return false;
  }

  field.classList.remove('is-invalid');
  field.classList.add('is-valid');

  return true;
};
