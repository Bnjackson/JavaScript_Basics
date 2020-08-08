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
: console.log(firstName ' Drinks Juice');
