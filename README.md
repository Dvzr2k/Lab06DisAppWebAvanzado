# Designed for Lab06

The homework from lab06 

## Usage
In the root directory execute 
```bash
node bin
``` 
if you fill all the required fields you must get something like this at the end
```bash
----------------------------¿CUANTOS DIAS FALTAN PARA NAVIDAD?---------
Faltan 232 días para desearte una feliz Navidad.
--------------------------------------------------------
--------------------------------------------------------
--------------------------------------------------------
-------------AVERIGUA TU EDAD PONIENDO TU FECHA DE NACIMIENTO?---------
Ingrese su fecha de nacimiento (DD-MM-YYYY): 15-03-2003
La edad es 20 años.
--------------------------------------------------------
--------------------------------------------------------
--------------------------------------------------------
-----------------------VALIDA EL FORMULARIO-----------------------------
Nombre: Mrio
Email: mario@gmail.com
Telefono: 910307653
Fecha de nacimiento(YYYY-MM-DD): 2003-07-23
Edad: 19
Formulario válidado correctamente!
```
## Testing

For testing you need to execute this command in the root directory
```bash
npm test
```
For testing "diasHastaNavidad" you need to change in /test/index.test.js
the number of ".toBe(232)" to the exact days from today till christmas so it can validate and pass the test
```javascript
test('diasHastaNavidad devuelve el número de días correcto', () => {
    expect(diasHastaNavidad()).toBe(232);
  });

```


## Author

Diego Valdez Rodriguez 5C24B
