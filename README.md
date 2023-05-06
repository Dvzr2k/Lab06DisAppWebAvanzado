# Designed for Lab06

The homework from lab06 

## Usage
In the root directory execute 
```bash
node bin
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
