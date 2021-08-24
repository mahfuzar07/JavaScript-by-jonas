const age = 17;
if (age >= 18) {
  console.log('sara can apply for driving licence');
} else {
  const yearLeft = 18 - age;
  console.log(`sara is too young. wait another ${yearLeft} years`);
}

//Find Prime Number or not
const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 'This is not  Prime  Number';
    } else {
      return 'This Is Prime Number';
    }
  }
};
const result = isPrime(19);
console.log(result);
