//Passing Arguments Works value References
const flight = 'BD777';
const passengerInfo = {
  name: 'Mahfuzar Rahman',
  passport: 14524789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'BD778';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 14524789) {
    console.log('checked In');
  } else {
    console.log('wrong Passport');
  }
};
checkIn(flight, passengerInfo);
console.log(flight);
console.log(passengerInfo);
