const Equation = require('./equation');

module.exports = function solveEquation(equation) {  
  var equation = new Equation(equation);
  return equation.toArray();
}
