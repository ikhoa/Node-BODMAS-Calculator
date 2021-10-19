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

  it('Should fail if expression contains alphabets', () => {
    const Calculator = new calClass([1, '+', '76ss']);
    expect(Calculator.isValidExpression()).to.be.equal(false)
  })

  it('Should fail if expression has more than two arithmetic sign', () => {
    const Calculator = new calClass([1, '+', '+', 1, '+', '+']);
    expect(Calculator.isValidExpression()).to.be.equal(false)
  })

  it('Should correctly calculate  1 +  3 * 10', () => {
    const Calculator = new calClass([1 , '+' ,3, '*', 10]);
    expect(Calculator.compute()).to.be.equal(31)
  })

  it('correctly calculate  -1 -1 / 10', () => {
    const Calculator = new calClass([-1, '+', -1, '/', 10]);
    expect(Calculator.compute()).to.be.equal(-1.1)
  })

  it('correctly calculate  33 -  3 * 56', () => {
    const Calculator = new calClass([33, '-', 3, '*', 56]);
    expect(Calculator.compute()).to.be.equal(-135)
  })

  it('correctly calculate  12 * 12 / 12', () => {
    const Calculator = new calClass([12, '*', 12, '/', 12]);
    expect(Calculator.compute()).to.be.equal(12.)
  })

  it('correctly calculate the quotient of 1 + 10 / 12', () => {
    const Calculator = new calClass([1, '+', 10, '/', 2]);
    expect(Calculator.compute()).to.be.equal(6)
  })

})
