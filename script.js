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
/*
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

*/
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


let names = ['John', 'Mark', 'Jane',];
let years = new Array(1990, 1969, 1948);

names[1] = 'Ben'; //Mutating 1 position
names[names.length] = 'Mary';//Adding new element to array length position
names.push('Dave');//Adds element to end
names.unshift('Paul');//Adds element to start
names.pop();//Delete last element
names.shift();//delete first element
console.log(names);
console.log(names.indexOf('Jane'));//Prints position element is in array.

const isNameInArray = names.indexOf('Barry') === -1 ? 'The name Barry is not in the array' : 'The name Barry is in the array';
console.log(isNameInArray);
/*
let tips = [];
let billTotal = [];
let bill = [124, 48, 268];

function calculateTip() {
  if (bill < 50) {
    tip = bill * (20/100);
    return tips.push[tip];
    billTotal = bill + tips;
  }else if (bill >= 50 && bill <= 200) {
    let tip = bill * (15/100);
    return tips.push();
    billTotal = bill + tips;
  }else {
    let tip = bill * (10/100);
    return tips[0];
    billTotal = bill + tips;
  }
}
calculateTip();
console.log(tips);
console.log(billTotal);
*/


function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = .2;
    }else if (bill >= 50 && bill < 200) {
      percentage = .15;
    }else {
      percentage = .1;
    }
    return percentage * bill;
}

const bills = [124, 48, 268];
const tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])];

const finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);


function calculateYearsToRetirement(yob) {
  let howLongToRetirement = 2020 - yob;
  return 67 - howLongToRetirement;
}

const ageArray = [1982, 1967, 1945, 1995];
const yearsToRetirementa = [calculateYearsToRetirement(ageArray[0]),
                           calculateYearsToRetirement(ageArray[1]),
                           calculateYearsToRetirement(ageArray[2]),
                           calculateYearsToRetirement(ageArray[3])];

console.log(yearsToRetirementa);

function canIRetire(ageTilRetirement) {
  if (ageTilRetirement <= 0) {
    return 'You can already retire';
  }else {
    return 'you cannot retire yet';
  }
}

const retire = [canIRetire(yearsToRetirementa[0]),
                canIRetire(yearsToRetirementa[1]),
                canIRetire(yearsToRetirementa[2]),
                canIRetire(yearsToRetirementa[3])];

console.log(retire);

//Objects an properties

const ben = { // an object
  firstName:'Ben', //by key 'firstName' value 'ben'
  lastName:'Jackson', //by key 'lastName' value 'jackson'
  age:24,//by key 'age' store value 30
  family: ['Jane', 'Mark', 'Emily'],//Objects can store arrays
  isMarried: false
};
ben.job = 'programmer';
console.log(ben);
console.log(ben.firstName);
console.log(ben['lastName']);

const marks = {
  fullName: 'Mark Noble',
  marksHeight: 1.88,
  marksWeight: 88.9,
  calculateBMI: function() {
    this.marksBMI = this.marksWeight / (this.marksHeight * this.marksHeight);
    return this.marksBMI;
  }
};

const johns = {
  fullName: 'John Samuel',
  johnsHeight: 1.76,
  johnsWeight: 76,
  calculateBMI: function() {
    this.johnsBMI = this.johnsWeight / (this.johnsHeight * this.johnsHeight);
    return this.johnsBMI;
  }
};

marks.calculateBMI();
johns.calculateBMI();
console.log(marks);
console.log(johns);

function compareBMI() {
  if (marks.marksBMI > johns.johnsBMI) {
    console.log( marks.fullName + ' BMI is ' + marks.marksBMI + ' ,it is higher than. ' + johns.fullName + ' BMI which is only ' + johns.johnsBMI + '.');
  } else if (marks.marksBMI < johns.johnsBMI) {
    console.log('Johns BMI is ' + johns.johnsBMI + ' ,it is higher than. ' + 'Marks BMI which is only ' + marks.marksBMI + '.');
  } else {
    console.log('Marks BMI is ' + marks.marksBMI + 'which is the same as johns BMI ' + johns.johnsBMI + '.');
  }
}

compareBMI();

//const marksBMI = marksWeight / (marksHeight * marksHeight);


//Loops Iteration

for (let i = 0; i < 3; i++) {
  console.log(i);
}

/*
const i = 0;
while(i < nick.length) {
  console.log(nick[i]);
  i++;
}
*/

const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = nick.length - 1; i >= 0; i--) {
  console.log(nick[i]);
} //If the element type is different to a string the loop will continue("jump over") one iteration of the loop.

/*const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = 0; i < nick.length; i++) {
  if (typeof nick[i] !== 'string') break;
  console.log(nick[i]);//Will print 'Nick', ' Smith'  */

//if (typeof nick[i] !== 'string') continue;


//Coding challenge - Tip calculator

/*
let tips = [];
let billTotal = [];
let bill = [124, 48, 268];

function calculateTip() {
  if (bill < 50) {
    tip = bill * (20/100);
    return tips.push[tip];
    billTotal = bill + tips;
  }else if (bill >= 50 && bill <= 200) {
    let tip = bill * (15/100);
    return tips.push();
    billTotal = bill + tips;
  }else {
    let tip = bill * (10/100);
    return tips[0];
    billTotal = bill + tips;
  }
}
calculateTip();
console.log(tips);
console.log(billTotal);
*/

const johnTips = {
  bills: [124, 48, 268, 180, 42],
  calculateTip: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];
      if (bill < 50) {
        percentage = .2;
      }else if (bill >= 50 && bill < 200) {
        percentage = .15;
      }else {
        percentage = .10;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  }
}

const adamTips = {
  bills: [77, 475, 110, 45],
  calculateTip: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      let bill = this.bills[i];
      if (bill < 100) {
        percentage = .2;
      }else if (bill >= 100 && bill < 300) {
        percentage = .10;
      }else {
        percentage = .25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  }
}

const calcTipAverage = function(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

adamTips.calculateTip();
johnTips.calculateTip();
console.log(adamTips, johnTips);

let tipAverage;


console.log(tipAverage);
