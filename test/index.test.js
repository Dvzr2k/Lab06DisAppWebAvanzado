const {diasHastaNavidad,formValidator}= require('../source/index');


test('diasHastaNavidad devuelve el número de días correcto', () => {
    expect(diasHastaNavidad()).toBe(233);
  });

test('Se valida correctamente el formulario', () => {
    const form = {
      name: 'Diego',
      email: 'diego@gmail.com',
      phone: '910307632',
      birthdate: '2003-03-15',
      age: '20'
    };
    const requiredFields = ['name', 'email', 'phone', 'birthdate', 'age'];
    expect(formValidator(form, requiredFields).isValid).toBe(true);
  });

