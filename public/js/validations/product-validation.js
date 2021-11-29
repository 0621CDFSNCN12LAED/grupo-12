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

//Error divs
let nameErrorDiv = document.querySelector("#name-error-msg")
let descriptionErrorDiv = document.querySelector("#description-error-msg")
let imageErrorDiv = document.querySelector("#image-error-msg")
let categoryErrorDiv = document.querySelector("#category-error-msg")
let subcategoryErrorDiv = document.querySelector("#subcategory-error-msg")
let priceErrorDiv = document.querySelector("#price-error-msg")


// Prevent submit event & print error messages in HTML
const productForm = document.querySelector('main form');
const ulErrors = document.querySelector('.product-validation-errors');



productForm.addEventListener('submit', (event) => {
  const validationErrors = validationObject();
  //console.log(validationErrors)

  //name frontend setup 
  frontEndSetup(nameErrorDiv,productName,validationErrors.name,event)
  //description frontend setup 
  frontEndSetup(descriptionErrorDiv,productDescription,validationErrors.description,event)  
  //price frontend setup 
  frontEndSetup(priceErrorDiv,productPrice,validationErrors.price,event)  
  //category frontend setup 
  frontEndSetup(categoryErrorDiv,productCategory,validationErrors.category,event)  
  //subcategory frontend setup 
  frontEndSetup(subcategoryErrorDiv,productSubcategory,validationErrors.subcategory,event)  
  //image frontend setup 
  frontEndSetup(imageErrorDiv,productImage,validationErrors.image,event)  
});


function validationObject(){
  let errors = {}
  //validaciones de nombre
  if (productName.value.length < 5) {
    errors.name = "El campo de nombre debe tener al menos 5 caracteres"
  }
  if (productName.value.trim() == '') {
      errors.name = "Debes ingresar un nombre"
  }
  //validaciones de descripcion
  if (productDescription.value.length < 20 ) {
    errors.description = "La descripción debe tener al menos 20 caracteres"
  }  
  //validacion de precio
  if (productPrice.value.trim() == '') {
    errors.price = "Debes ingresar un precio"
  }
  //validacion de category
  if (productCategory.value.trim() == '') {
    errors.category = "Debes ingresar una categoria"
  }
  //validacion de dubcategory
  if (productCategory.value.trim() == '') {
    errors.subcategory = "Debes ingresar una subcategoria"
  }
  //validacion de imagen
  let fileResponse = fileValidation()
  if(!fileResponse){
    errors.image = "El archivo debe ser de formato PNG, JPG, JPEG o GIF"
  }

  return errors
}

function frontEndSetup (errorDiv,registerValue,errorMessage,event) {
  if (errorMessage) {
      event.preventDefault()
      errorDiv.innerHTML = `<p> ${errorMessage} </p>`
      registerValue.classList.add('is-invalid');
  } else {
      errorDiv.innerHTML = ''
      registerValue.classList.remove('is-invalid');
      registerValue.classList.add('is-valid');
  }
}
// File validation
function fileValidation() {
  var filePath = productImage.value;
  // Allowing file type
  var allowedExtensions = 
          /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if (!allowedExtensions.exec(filePath)) {
      return false;
  } else  {
    return true
  }
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
