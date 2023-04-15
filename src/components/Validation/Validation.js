const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El email ingresado no es válido';
    }
    if(!userData.email){ // userData.email.length === ''
        errors.email = 'Debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'El password debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'El password debe tener un tamaño entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;