class Equation{
  constructor(equation){
      equation = equation.replace(new RegExp(" ",'g'), "");   
      const a = "*x^2";
      const b = "*x";  
      var aIndex =  equation.indexOf(a);
      var aStr = equation.substring(0, aIndex)
      var bIndex =  equation.indexOf(b, aIndex + a.length);
      var bStr = equation.substring(aIndex + a.length, bIndex)
      var cStr = equation.substring(bIndex + b.length)
      
      this.a = parseInt(aStr);
      this.b = parseInt(bStr);
      this.c = parseInt(cStr);
      this.D = Math.pow(this.b, 2) - 4 * this.a * this.c;
  }        

  get x1(){
      return this.squareRoot(1);    
  }

  get x2(){
      return this.squareRoot(-1);
  }

  toArray(){
      return [this.x1, this.x2]
      .filter(i => { return i; })
      .sort((left, right) => { return left - right; });
  }

  squareRoot (sign){
      var divider = 2 * this.a;
      var minusB = -1 * this.b;
      if(this.D > 0){
          var sqrt = Math.pow(this.b, 2) - 4 * this.a * this.c;
          return  Math.round((minusB + sign * Math.sqrt(sqrt)) / divider);
      }else if(this.D == 0){
          return  Math.round(minusB / divider);
      }    
      return undefined;    
  }
};

module.exports = function solveEquation(equation) {  
  var equation = new Equation(equation);
  return equation.toArray();
}
