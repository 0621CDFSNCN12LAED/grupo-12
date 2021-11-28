// Form fields with any validation requirements
let productName = document.querySelector('#name');
let productDescription = document.querySelector('#description');
let productImage = document.querySelector('#image');
let productCategory = document.querySelector('#category');
let productSubcategory = document.querySelector('#subcategory');
let productDiscount = document.querySelector('#discount');
let productStarred = document.querySelector('#starred');
let productPrice = document.querySelector('#price');
let productStock = document.querySelector('#stock');

// Prevent submit event & print error messages in HTML
const productForm = document.querySelector('main form');
const ulErrors = document.querySelector('.product-validation-errors');

productForm.addEventListener('submit', (event) => {
  const validationErrors = formIsInvalid();

  if (validationErrors.length > 0) {
    event.preventDefault();
    console.log(validationErrors)

    ulErrors.classList.remove('hidden');
    ulErrors.innerHTML = '';

    for (const error of validationErrors) {
      ulErrors.innerHTML += `<li> ${error} </li>`;
    }
  } else {
    ulErrors.classList.add('hidden');
    ulErrors.innerHTML = '';
  }
});

function formIsInvalid() {
  let errors = [];

  if (productName.value.trim() == '') {
    errors.push('Debes ingresar un nombre');
    productName.classList.add('is-invalid');
  } else {
    productName.classList.remove('is-invalid');
    productName.classList.add('is-valid');
  }

  if (productName.value.length < 5) {
    productName.classList.add('is-invalid');
    errors.push('El campo de nombre debe tener al menos 5 caracteres');
  } else {
    productName.classList.remove('is-invalid');
    productName.classList.add('is-valid');
  }

  if (productDescription.value.length < 20) {
    productDescription.classList.add('is-invalid');
    errors.push('La descripcion debe ser de 20 caracteres o mas');
  } else {
    productDescription.classList.remove('is-invalid');
    productDescription.classList.add('is-valid');
  }

  return errors;
}

/* PASOS A SEGUIR:

0. Asignar 1 clase a todos los inputs que quiero validar y almacenarlos en 1 variable.
1. Con un FOR EACH preguntar si el input seleccionado es el que quiero validar.
2. Escribir la condicion y agregar las clases necesarias.
3.

  const fields = document.querySelectorAll('.fields');

  fields.forEach((field) => {
    if (field.name == 'name' && field.value.trim() == '') {
      Aca ponemos las condiciones y las clases bla bla bla
    }

    if (field.name == 'name' && field.value.length < 5) {
      Aca ponemos las condiciones y las clases bla bla bla
    }

    Etc etc etc

  });

*/
