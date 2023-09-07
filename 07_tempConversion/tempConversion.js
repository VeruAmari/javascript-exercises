const convertToCelsius = function(toCel) {
  return Number(((toCel - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(toFar) {
  return Number(((toFar * 9/5) + 32).toFixed(1));
};

// To Farenheit (x × 9/5 + 32)
// To Celcius ((x − 32) × 5/9 °C )

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
