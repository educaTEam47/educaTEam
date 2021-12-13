module.exports.validateRegisterInput=
(
    Name,
    password,
    confirmPassword,
    email,
    identification,
    number,
    direction,
    faculty,
    type,
) =>{
    const errors ={};
    if(faculty.trim()===''){
        errors.faculty = 'La falcultad no puede estar vacia'
    }
    if(direction.trim()===''){
        errors.direction = 'La direccion/ubicacion no puede estar vacia'
    }
    if(number.trim()===''){
        errors.number = 'El telefono no puede estar vacio'
    }
    if(email.trim()===''){
        errors.email = 'El email no puede estar vacio'
    }
    if(identification.trim()===''){
        errors.identification = 'La Cedula no puede estar vacia'
    }
    if(Name.trim()===''){
        errors.Name = 'El nombre no puede estar vacio'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
          errors.email = 'El email debe existir y ser valido';
        }
    }
    if (password === '') {
        errors.password = 'La contraseña no puede ser vacia';
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Las Contraseñas deben coincidir';
      }
      return {
        errors,
        valid: Object.keys(errors).length < 1
      };
    
};

module.exports.validateLoginInput = (email, password) => {
    const errors = {};
    if (email.trim() === '') {
      errors.email = 'El email no puede estar vacio';
    }
    if (password.trim() === '') {
      errors.password = 'La contraseña no puede estar vacia';
    }  return {
        errors,
        valid: Object.keys(errors).length < 1
      };
    }