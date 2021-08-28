// First class Function
function add(a, b) {
  return a + b;
}
// First class Function
//1. A function can be Stored in an [variable].
var sum = add;
console.log(sum(4, 5));
//2. A function can be Stored in an [ Array].
var arr = [];
arr.push(add);
console.log(arr[0](5, 5));
//3. A function can be Stored in an [Object].
var obj = {
  sum: add,
};
console.log(obj.sum(5, 6));
//4. We can Create Function as need.
setTimeout(function () {
  console.log(add(3, 9));
}, 100);
