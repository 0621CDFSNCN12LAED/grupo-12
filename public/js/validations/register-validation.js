// Error Divs
let firstNameErrorDiv = document.querySelector('#firstName-error-msg');
let lastNameErrorDiv = document.querySelector('#lastName-error-msg');
let emailErrorDiv = document.querySelector('#email-error-msg');
let password1ErrorDiv = document.querySelector('#password1-error-msg');
let password2ErrorDiv = document.querySelector('#password2-error-msg');
let imageErrorDiv = document.querySelector("#image-error-msg")

// Register Inputs
let registerFirstName = document.querySelector('#register-firstName');
let registerLastName = document.querySelector('#register-lastName');
let registerEmail = document.querySelector('#register-email');
let registerPassword1 = document.querySelector('#register-password1');
let registerPassword2 = document.querySelector('#register-password2');
let registerImage = document.querySelector('#register-image');



//Validate Email function --> Esto podriamos globalizarlo
function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

// File validation
function fileValidation() {
    var filePath = registerImage.value;
    // Allowing file type
    var allowedExtensions = 
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
        return false;
    } else  {
      return true
    }
  }

// Prevent submit event & print error messages in HTML
const registerForm = document.querySelector('main form');

registerForm.addEventListener('submit', (event) => {
    console.log("Submit")
    let objectError = validationObject()
    console.log(objectError)

    //firstName frontend setup 
    frontEndSetup(firstNameErrorDiv,registerFirstName,objectError.firstName,event)
    //lastName frontend setup 
    frontEndSetup(lastNameErrorDiv,registerLastName,objectError.lastName,event)
    //Email frontend setup 
    frontEndSetup(emailErrorDiv,registerEmail,objectError.email,event)  
    //Password frontend setup 
    frontEndSetup(password1ErrorDiv,registerPassword1,objectError.password1,event)   
    //Password2 frontend setup 
    frontEndSetup(password2ErrorDiv,registerPassword2,objectError.password2,event)    
    //Image frontend setup 
    frontEndSetup(imageErrorDiv,registerImage,objectError.image,event)   

});


function validationObject(){
    let errors = {}
    //validaciones de Email
    if(validateEmail(registerEmail.value) == false){
        errors.email = "Eso no parece ser un email valido!"
    }
    if (registerEmail.value.trim() == '') {
        errors.email = "Debes ingresar un email"
    }
    //Validaciones firstName
    if (registerFirstName.value.length < 2) {
        errors.firstName = "Su nombre debe contener al menos 2 caracteres"
    }
    if (registerFirstName.value.trim() == '') {
        errors.firstName = "Debes ingresar un nombre"
    }
    //Validaciones lastName
    if (registerLastName.value.trim() == '') {
        errors.lastName = "Debes ingresar un apellido"
    }
    //Validaciones password1
    if (registerPassword1.value.length < 8) {
        errors.password1 = "La contraseña debe contener al menos 8 caracteres"
    }
    if (registerPassword1.value.trim() == '') {
        errors.password1 = "Debes ingresar una contraseña"
    }  

    //Validaciones password2
    if(registerPassword2.value !== registerPassword1.value ) {
        errors.password2 = "Las contraseñas no coinciden!"
    }
    if (registerPassword2.value.trim() == '') {
        errors.password2 = "Debes repetir la contraseña"
    }
    //Validaciones de imagen
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


