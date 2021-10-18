const operation = require('./operations');
const readline = require('readline');
const calClass = require("../src/operations");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
     Welcome to the Calculator App
`);

r1.question('Enter first value: ', (val1) => {
  r1.question(`
    Please select from the following options:
    [1] Addition (+)
    [2] Subtraction (-)
    [3] Multiplication (*)
    [4] Division (/)
    Enter your choice: `, (sign1) => {
    r1.question('EnterSecond value: ', (val2) => {
      r1.question(`
        Please select from the following options:
        [1] Addition (+)
        [2] Subtraction (-)
        [3] Multiplication (*)
        [4] Division (/)
        Enter your choice: `, (sign2) => {
        r1.question('Enter third value: ', (val3) => {
          const exp = [val1.trim(), sign1.trim(), val2.trim(), sign2.trim(), val3.trim()]
          console.log(exp)
          const Calculator = new calClass(exp);
          if (!Calculator.isValidExpression()) {
            console.log('Please enter a valid math expression')
          } else {
            console.log(` ${exp} = ${Calculator.compute()}`)
          }
          r1.close()
        });
      });
    });
  });
});


