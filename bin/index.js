const readline = require('readline-sync');
const { diasHastaNavidad, calcularEdad, formValidator } = require('../source/index');

console.log(`----------------------------¿CUANTOS DIAS FALTAN PARA NAVIDAD?---------`);
console.log(`Faltan ${diasHastaNavidad()} días para desearte una feliz Navidad.`);
console.log(`--------------------------------------------------------`);
console.log(`--------------------------------------------------------`);
console.log(`--------------------------------------------------------`);
console.log(`-------------AVERIGUA TU EDAD PONIENDO TU FECHA DE NACIMIENTO?---------`);
console.log(`La edad es ${calcularEdad()} años.`);
console.log(`--------------------------------------------------------`);
console.log(`--------------------------------------------------------`);
console.log(`--------------------------------------------------------`);
console.log(`-----------------------VALIDA EL FORMULARIO-----------------------------`);
const form = {
    name: readline.question('Nombre: '),
    email: readline.question('Email: '),
    phone: readline.question('Telefono: '),
    birthdate: readline.question('Fecha de nacimiento(YYYY-MM-DD): '),
    age: readline.question('Edad: ')
    
  };

  const requiredFields = ['name', 'email', 'phone', 'birthdate', 'age'];
  const validationResult = formValidator(form, requiredFields);
  
  if (validationResult.isValid) {
    console.log('Formulario válidado correctamente!');
  } else {
    console.log('Errores de validación:');
    console.log(validationResult.errors);
  }


