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
