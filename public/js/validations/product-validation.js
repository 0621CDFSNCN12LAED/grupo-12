
let productName = document.querySelector("#name")
let productDescription = document.querySelector("#description")
let productImage = document.querySelector("#image")
let productCategory = document.querySelector("#category")
let productSubcategory = document.querySelector("#subcategory")
let productDiscount = document.querySelector("#discount")
let productStarred = document.querySelector("#starred")
let productPrice = document.querySelector("#price")
let productStock = document.querySelector("#stock")
let productForm = document.querySelector("main form")


productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let errors = []

    if(productName.value.length < 5){
        // AGREGAR VALIDACIONES
        errors.push("El nombre debe tener al menos 5 caracteres")
        console.log("nombre menos a 5")
    }
    if(productName.value.trim() == ""){
        errors.push("Debes ingresar un nombre")

        // AGREGAR VALIDACIONES
    }
    if(productDescription.value.length < 20){
        // AGREGAR VALIDACIONES
        errors.push("La descripcion debe ser de 20 caracteres o mas")

        
    }
    //Validacion imagenes

    //Validacion final
    console.log(errors)
    if (errors.length > 0) {
        let ulErrors = document.querySelector('.product-validation-errors');
        for (let i = 0; i < errors.length; i++) {
            ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
        };
    }else{
        alert('La validación fué exitosa')
        form.submit();
    }

})

