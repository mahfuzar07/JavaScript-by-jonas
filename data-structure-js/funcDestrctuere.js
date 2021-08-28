//Arrow Function
const studentInfo = student => {
  console.log(`${student.id}`);
};
const student = {
  id: 101,
  fullName: 'Mahfuzar Rahman',
};
studentInfo(student);

//Function Destrctureing
const studentInfo2 = ({ id, fullName }) => {
  console.log(`${id},${fullName}`);
};
const student1 = {
  id: 101,
  fullName: 'Mahfuzar Rahman',
};
studentInfo2(student1);
