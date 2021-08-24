//JavaScript Truty and Falsy Value
// 5 Falsy value
//[ 0 ]
console.log(Boolean(0));
//[ "" ]
console.log(Boolean(''));
//[ undefined ]
console.log(Boolean(undefined));
//[ null ]
console.log(Boolean());
//[ NaN ]
console.log(Boolean(''));

//Everything is Truthy value except these 5 falsy values

//example
let money = 0;
if (money) {
  console.log("Don't Spend it all");
} else {
  console.log('You Should get a Job');
}
