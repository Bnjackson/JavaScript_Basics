//Type coercion
const firstName = 'john';
let age = 28;

console.log(firstName + ' ' + age);//Type coercion JavaScript automatically converts types from one to another when needed. The number is converted into a string.

let job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);

//Variable Mutation - Variable mutation is when you modify a variables original value.
age = 'twenty eight';//The age variable is mutated from a number to a string.

let johnAge, markAge, year;
johnAge = 24;
markAge = 27;
year = 2020;

if (johnAge < markAge) {
  console.log('Mark is older than John');
}else {
  console.log('John is older than Mark');
}
console.log(typeof johnAge);


let marksWeight, marksHeight, johnsHeight, johnsWeight;
marksWeight = 101;
marksHeight = 1.8;
johnsHeight = 1.6;
johnsWeight = 63;

const marksBMI = marksWeight / (marksHeight * marksHeight);
const johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

console.log(marksBMI);
console.log(johnsBMI);

if(marksBMI > johnsBMI) {
  console.log(true);
}else {
  console.log(false);
}

//const markHigherBMI = marksBMI > johnsBMI;
//console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + markHigherBMI);

const relationshipStatus = 'single';

if(relationshipStatus === 'marriage') {
  console.log(firstName + ' is married!');
}else {
  console.log(firstName + ' is not married');
}

//Boolean Logic

const johnsAge = 22;

if (johnsAge < 13) {
  console.log(firstName + ' is a boy');
} else if(johnsAge >= 13 && johnsAge < 20) {
  console.log(firstName + ' is a teenager');
} else if(johnsAge >= 20 && johnsAge <= 30) {
  console.log(firstName + ' is a young man');
} else {
  console.log(firstName + ' is a man');
}

johnsAge >= 18 ? console.log(firstName + ' Drinks Beer')
:console.log(firstName + ' Drinks Juice');

switch(true) {
  case johnsAge < 13:
  console.log(firstName + ' is a boy');
  break;
  case johnsAge >= 13 && johnsAge < 20:
  console.log(firstName + ' is a teenager');
  break;
  case johnsAge >= 20 && johnsAge <= 30:
  console.log(firstName + ' is a young man');
  default:
  console.log(firstName + ' is a man');
}


const x = '5';
const y = 5;

if(x == y) {
  console.log('im a gay');
}else {
  console.log('im am not gay');
}

const johnsScore = (140 + 120 + 100) / 3;
const mikesScore = (140 + 120 + 100) / 3;
const marysScore = (140 + 120 + 100) / 3;

if (johnsScore > mikesScore && johnsScore > marysScore) {
    console.log('Johns team won scoring ' + johnsScore + '. Mikes team lost only scoring ' + mikesScore + '.' + ' Marys team lost scoring ' + marysScore + '.');
} else if (mikesScore > johnsScore && mikesScore > marysScore) {
    console.log('Mikes team won scoring ' + mikesScore + '. Johns team lost only scoring ' + johnsScore + '.' + ' Marys team lost scoring ' + marysScore + '.');
} else if (marysScore > johnsScore && marysScore > mikesScore) {
    ('Mikes team lost scoring ' + mikesScore + '. Johns team lost only scoring ' + johnsScore + '.' + ' Marys team won scoring ' + marysScore + '.');
} else {
    console.log('Johns team drew scoring ' + johnsScore + '. Mikes team drew scoring ' + mikesScore + '.' + ' Marys team drew scoring ' + marysScore + '.');
}

/*if (johnsScore > mikesScore) {
  console.log('Johns team won scoring ' + johnsScore + '. Mikes team lost only scoring ' + mikesScore + '.' );
}else if (mikesScore > johnsScore) {
  console.log('Mikes team won scoring ' + mikesScore + '. Johns team lost only scoring ' + johnsScore + '.' );
}else {
    console.log('Johns team drew scoring ' + johnsScore + '. Mikes team drew scoring ' + mikesScore + '.' );
}
*/

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

const ageBen = calculateAge(1995);
const ageAdam = calculateAge(1990);
const agePaul = calculateAge(1984);

console.log(ageBen, ageAdam, agePaul);

function yearsToRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  }else {
    console.log(firstName + ' has already retired.');
  }
}

yearsToRetirement(1995, 'john');
yearsToRetirement(1962, 'mark');
yearsToRetirement(1935, 'matt');

let whatDoYouDo = function(job, firstName) { //Function Expression

}

function whatIsYourJob(job, firstName) { //Function Declaration
  switch(job) {
    case 'teacher':
    return firstName + ' is a teacher.';
    case 'fireman':
    return firstName + ' is a fireman.';
    case 'nurse':
    return firstName + ' is a nurse.';
    case 'police':
    return firstName + ' is a policeman.';
    case 'driver':
    return firstName + ' is a driver.';
    default:
    return firstName + ' is unemployed.'
  }
}
console.log(whatIsYourJob('dock worker', 'John'));
console.log(whatIsYourJob('driver', 'Sarah'));
console.log(whatIsYourJob('teacher', 'mike'));
