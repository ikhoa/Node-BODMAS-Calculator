class Calculator {
  /**
   * Class Constructor
   * @param expression
   */
  constructor(expression) {
    this._expression = expression
  }

  /**
   * Validate tje expression
   * @returns {boolean}
   */
  isValidExpression() {
    for(let char of this._expression) {
      if ((isNaN(char) && !['+', '-', '/', '*', '%', '**'].includes(char))) {
        return false;
      }
    }
    return true
  }

  /**
   * Compute the expression
   */
  compute() {
    let computedExo;
    // try {
    //   return eval(this._expression)
    // } catch (e) {
    //   if (e.name !== 'SyntaxError') throw e
    //   return false;
    // }
    //1*4-12/2
    //Handle Multiply
    computedExo = this._applyMultiplication(this._expression)

    //Handle Divide
    computedExo = this._applyDivision(this._expression)

    //Handle Plus and Minus
    computedExo = this._applyAdditionAndSubtraction(this._expression)

  return computedExo

  }

  /**
   * Apply multiplication to expression
   * @param exp
   * @returns {*}
   * @private
   */
  _applyMultiplication (exp) {
    for (let i = 0; i <= exp.length; i++) {
      let cItem = exp[ i ];
      if (cItem === '*') {
        let tLeft = parseFloat(exp[ i - 1 ]);
        let tRight = parseFloat(exp[ i + 1 ]);
        exp[ i - 1 ] = tLeft * tRight;
        exp.splice(i, 2);
        i = exp.length;
      }
    }
    return exp
  }

  /**
   * Apply Division to expression
   * @param exp
   * @returns {*}
   * @private
   */
  _applyDivision (exp) {
    for (let i = 0; i <= exp.length; i++) {
      let cItem = exp[ i ];
      if (cItem === '/') {
        let tLeft = parseFloat(exp[ i - 1 ]);
        let tRight = parseFloat(exp[ i + 1 ]);
        exp[ i - 1 ] = tLeft / tRight;
        exp.splice(i, 2);
        i = exp.length;
      }
    }
    return exp
  }

  /**
   * Apply addition and subtraction to expression
   * @param exp
   * @returns {number}
   * @private
   */
  _applyAdditionAndSubtraction (exp) {
    let tResult = parseFloat(exp[0]);
    for (let i = 1; i < exp.length; i++) {
      if (exp[ i ] === '+') {
        tResult = tResult + parseFloat(exp[ i + 1 ]);
      } else if (exp[ i ] === '-') {
        tResult = tResult - parseFloat(exp[ i + 1 ]);
      }
      i++;
    }
    return tResult
  }
}

module.exports = Calculator
