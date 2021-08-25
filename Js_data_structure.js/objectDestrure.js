//Normal Object
const studentInfo = {
  id: 101,
  fullName: 'Mahfuzar Rahman',
  result: 2.5,
};
console.log(studentInfo.fullName);
//Object Destructuring
const { id, fullName, result } = studentInfo;
console.log(id);

//Nested  Object Destructuring
const studentInfo = {
  id: 101,
  fullName: 'Mahfuzar Rahman',
  result: 2.5,
  language: {
    native: 'bangla',
    beginner: 'english',
  },
};
const { id, fullName, result, language } = studentInfo;
console.log(language.native);
