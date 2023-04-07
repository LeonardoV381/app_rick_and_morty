export default function Validation(userData){
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const regexNumber = /^(?=.*[0-9])/;
let errors={};

    if(!regexEmail.test(userData.username)){
        errors.username = "Por favor digita un correo electrónico válido"
    }
    if(userData.username === ""){
        errors.username = "Por favor digita un correo electrónico"
    }
    if(userData.username.length > 35){
        errors.username = "El correo ingresado no es un email válido"
    }
    if(!regexNumber.test(userData.password)){
       errors.password="La contraseña debe tener al menos un número"
    }
    if(userData.password.length <6 || userData.password.length >10){
        errors.password="Las contraseña debe tener entre 6 y 10 caracteres"
    }

    return(errors)

}