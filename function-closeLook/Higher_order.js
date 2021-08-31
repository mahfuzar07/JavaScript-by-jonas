//1. Function can Pass Function as an Arguments
//2. Function can return function from another function
var numbers = [1, 2, 3];

var result = numbers.map(function (number) {
  return number * 2;
});
console.log(result);

///Another one Higher Oeder Function

function add(a, b) {
  return a + b;
}
function manipulation(a, b, func) {
  var c = a + b;
  var d = a - b;
  function multiply() {
    var m = func(a, b);
    return c * d * m;
  }
  return multiply;
}
var multiply = manipulation(3, 4, add);
console.log(multiply());
