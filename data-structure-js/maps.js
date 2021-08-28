//Maps[The Map object holds key-value pairs and remembers the original insertion order of the keys.]
const rest = new Map();
rest.set('name', 'mahfuzar');
console.log(rest.get('name'));

//between Object vs Map
//object[more traditional key,value store]
//[easier to write and access value with.add[]]
const task = {
  task: 'code',
  date: 'today',
};
//output[{task:"code",date:"today"}]
//------------------------------------
const task1 = new Map([
  ['task', 'code'],
  ['date', 'today'],
]);
//output[Map(2) {"task"=>"code","date"=>"today"}]
//Maps[keys can have any data type, easy to iterate,to compute size]
