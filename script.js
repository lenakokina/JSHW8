function createCalculator(num) {
  let result = num;
  return {
      'sum': (value) => (result += value),
      'sub': (value) => (result -= value),
      'mult':(value) => (result *= value),
      'div': (value) => (result /= value),
      'set': (value) => (result = value),
  };
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));
console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));