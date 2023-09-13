const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(a) {
	let total = 0;
  a.forEach((x) => total += x);
  return total;
};

const multiply = function(a) {

  let total = a[0];
  if (a.length > 1) {
    for (let i = 1; i < a.length; i++) {
      total *= a[i]
    }
  }
  return total;

};

const power = function(x, y) {
	if (y > 1) {
    return power(x, y - 1) * x;
  }
  return x;
};

const factorial = function(x) {
	if (x > 1) {
    return factorial(x - 1) * x;
  };
  return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
