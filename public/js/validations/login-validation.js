// Form fields with any validation requirements
let loginEmail = document.querySelector('#email');
let loginPassword = document.querySelector('#password');

let emailErrorDiv = document.querySelector("#email-error-msg")
let passwordErrorDiv = document.querySelector("#password-error-msg")

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

// Prevent submit event & print error messages in HTML
const loginForm = document.querySelector('main form');
const ulErrors = document.querySelector('.product-validation-errors');

loginForm.addEventListener('submit', (event) => {
    let objectError = validationObject()
    console.log(objectError)
    //validacion Email obligatoria
    if (objectError.email) {
        event.preventDefault()
        emailErrorDiv.innerHTML = `<p> ${objectError.email} </p>`
        loginEmail.classList.add('is-invalid');
    } else {
        emailErrorDiv.innerHTML = ''
        loginEmail.classList.remove('is-invalid');
        loginEmail.classList.add('is-valid');
    }

    //validacion Password obligatoria
    if (objectError.password) {
        event.preventDefault()
        passwordErrorDiv.innerHTML = `<p> ${objectError.password} </p>`
        loginPassword.classList.add('is-invalid');
    } else {
        passwordErrorDiv.innerHTML = ''
        loginPassword.classList.remove('is-invalid');
        loginPassword.classList.add('is-valid');
    }    
     
});


function validationObject(){
    let errors = {}
    if(validateEmail(loginEmail.value) == false){
        errors.email = "Eso no parece ser un email valido!"
    }
    if (loginEmail.value.trim() == '') {
        errors.email = "Debes ingresar un email"
    }
    if (loginPassword.value.trim() == '') {
        errors.password = "Debes ingresar una contraseña"
    }
    return errors
}


