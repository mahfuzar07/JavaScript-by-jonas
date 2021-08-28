//Iterating Sets
const orderSet = new Set(['pasta', 'pizza', 'pizza', 'honey']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pasta'));
console.log(orderSet.has('bread'));
orderSet.add('garlic Bread');
console.log(orderSet);
//between Arrays vs Sets
//array[use when need ordered list of values(might contain duplicate)]
//[use when need to manipulate data]
const tasks = ['code', 'eat', 'sleping'];
//output['code', 'eat', 'sleping']
// -----------------------------------------
const tasks = ['code', 'eat', 'code'];
//output['code', 'eat']
//Sets[use when need to work with uniqe values],
//[use to remove duplicates from arrays]
