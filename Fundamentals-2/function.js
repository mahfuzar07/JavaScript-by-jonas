//Function is sub of Program- input(argument),code,output

//function Declarations
function fullName() {
  console.log('Mahfuzar Rhaman');
}
fullName();

//function Expressions
let square = function (num) {
  let result = num * num;
  return result;
};
let value = square(3);
console.log(value);

//Convert Fahrenheit To Celsius
let convertFahrenheitToCelsius = function (Fahrenheit) {
  let celsius = ((Fahrenheit - 32) * 5) / 9;
  return celsius;
};
let temp = convertFahrenheitToCelsius(65);
console.log(temp.toFixed(3));
