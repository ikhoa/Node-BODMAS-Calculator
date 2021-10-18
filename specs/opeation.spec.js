const calClass = require('../src/operations');
const chai = require('chai');
const expect = chai.expect;

describe('Calculate test suit', function () {
  before(function() {
    //Will run before all tests in this block
  });
  it('Should pass for a valid expression', () => {
    const Calculator = new calClass([1, '+',  1]);
    expect(Calculator.isValidExpression()).to.be.equal(true)
  })

  it('Should fail if expression is invalid', () => {
    const Calculator = new calClass([1, '+', '76ss']);
    expect(Calculator.isValidExpression()).to.be.equal(false)
  })

  it('Should correctly calculates the sum of 1 +  3 * 10', () => {
    const Calculator = new calClass([1 , '+' ,3, '*', 10]);
    expect(Calculator.compute()).to.be.equal(4)
  })

  it('correctly calculates the sum of -1 and -1', () => {
    const Calculator = new calClass([-1, '+', -1]);
    expect(Calculator.compute()).to.be.equal(-2)
  })

  it('correctly calculates the difference of 33 and 3', () => {
    const Calculator = new calClass([33, '-', 3]);
    expect(Calculator.compute()).to.be.equal(30)
  })

  it('correctly calculates the product of 12 and 12', () => {
    const Calculator = new calClass([12, '*', 12]);
    expect(Calculator.compute()).to.be.equal(144)
  })

  it('correctly calculates the quotient of 1 + 10 / 12', () => {
    const Calculator = new calClass([1, '+', 10, '/', 2]);
    expect(Calculator.compute()).to.be.equal(6)
  })

})
