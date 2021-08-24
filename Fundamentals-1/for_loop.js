for (let x = 0; x <= 10; x++) {
  console.log(x);
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
