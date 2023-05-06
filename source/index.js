const moment = require('moment');
const validator =require('validator');
const readline = require('readline-sync');

function diasHastaNavidad() {
  const hoy = moment();
  const navidad = moment('2023-12-25');
  const diferencia = navidad.diff(hoy, 'days');
  return diferencia;
};

function calcularEdad() {
    const fechaNacimiento = moment(readline.question("Ingrese su fecha de nacimiento (DD-MM-YYYY): "), 'DD-MM-YYYY');
    const hoy = moment();
    const edad = hoy.diff(fechaNacimiento, 'years');
    return edad;
};
function formValidator(form, required) {
    const errors = {};
  
    required.forEach((field) => {
      const fieldName = field;
      const fieldValue = form[fieldName];
      if (!fieldValue) {
        errors[fieldName] = "Requerido";
      }
    });
  
    Object.keys(form).forEach((field) => {
      const fieldName = field;
      const fieldValue = form[fieldName];
  
      switch (fieldName) {
        case "email":
          if (!validator.isEmail(fieldValue)) {
            errors[fieldName] = "email invalido";
          }
          break;
        case "phone":
          if (!validator.isMobilePhone(fieldValue, 'es-PE')) {
            errors[fieldName] = "numero de telefono no valido";
          }
          break;
        case "birthdate":
          if (!moment(fieldValue, 'YYYY-MM-DD', true).isValid()) {
            errors[fieldName] = "Formato no valido";
          }
          break;
        case "age":
          if (!validator.isNumeric(fieldValue, { no_symbols: true })) {
            errors[fieldName] = "La edad es un numero";
          }
          break;
        default:
          if (!fieldValue) errors[fieldName] = "Campo requerido";
      }
    });
  
    if (Object.keys(errors).length === 0) {
      return { isValid: true };
    } else {
      return { isValid: false, errors };
    }
  };
  
  module.exports = {
    diasHastaNavidad,
    calcularEdad,
    formValidator
  };
  