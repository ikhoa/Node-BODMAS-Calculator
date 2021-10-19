const operation = require('./operations');
const readline = require('readline');
const Calculator = require("../src/operations");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
     Welcome to the Calculator App
`);

r1.question('Enter first value: ', (val1) => {
  r1.question(`
        Please enter an  arithmetic sign from the following options:
        Addition (+)
        Subtraction (-)
        Multiplication (*)
        Division (/)
        Enter sign: `, (sign1) => {
    r1.question('Enter Second value: ', (val2) => {
      r1.question(`
        Please enter an  arithmetic sign from the following options:
        Addition (+)
        Subtraction (-)
        Multiplication (*)
        Division (/)
        Enter sign: `, (sign2) => {
        r1.question('Enter third value: ', (val3) => {
          const exp = [val1.trim(), sign1.trim(), val2.trim(), sign2.trim(), val3.trim()]
          const calculator = new Calculator(exp);
          if (!calculator.isValidExpression()) {
            console.log(`${exp.join('')} Please enter a valid math expression`)
          } else {
            console.log(`${exp.join('')} = ${calculator.compute()}`)
          }
          r1.close()
        });
      });
    });
  });
});


