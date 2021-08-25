//normal Array
let numbers = [10, 20, 30, 40];
console.log(numbers[0]);
//Array Destructuring
let [num1, num2, num3, num4] = numbers;
console.log(num1);

////another
const restaurant = {
  name: 'italiano',
  categories: ['italian', 'pizzeria', 'vegetarian'],
};
const [first, , second] = restaurant.categories;
console.log(`${first}, ${second}`);
