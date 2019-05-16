/*
variables and data types
*/

/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = "28";

var fullAge = true;
console.log(fullAge);

var job = "Teacher";

//Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
*/

/*
Variable mutation and type coercion
*/
/*
var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
*/

/* 
Basic Operators
*/
/*
var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;

console.log(yearJohn);

//Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Opertors
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/

/***************************
 * CODING CHALLENGE 1
 * */
/* Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console contaiing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/
/*
var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

*/

/* If Else Statements */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = false;
if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}


var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher than John\'s');
} else {
  console.log('John\'s BMI is higher than Mark\'s);
}
*/
//var markHigherBMI = BMIMark > BMIJohn;
//console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

/* Boolean Logic */

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + 'is a boy.');
} else if (age >= 13 && age > 20){
    console.log(firstName + ' is a teenager.');    
  } else if (age >= 20 && age < 30){   
    console.log(firstName + ' is a young man.')
} else {
  console.log(firstName + ' is a man');
}
*/
/* Ternary Operators */
/*
var firstName = 'John';
var age = 16;

age >= 21 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);
*/
//same thing as a non ternary expression
/*
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}
*/

//switch statement
//good way to replace a huge if/else statement
// || requires either to be true while && requires both condidtions be true
/*
var job = 'teacher';
switch (job) {
  //works for more than one condition
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code');
  break;
  case 'driver':
console.log(firstName + ' drives for uber in Lisben');
  break;  
  case 'designer':
console.log(firstName + ' designs beautiful webpages');
  break;
  default:
console.log(firstName + ' does something else')
}
*/

//making a switch work with if/else with ranges
/*
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age >= 13 && age <20:
    console.log(firstName + 'is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + 'is a man.');
}

*/

//*******************************
/*  Truthy and Falsy values and equlity operators
*/

//falsy values include : undefined, null, 0, '', NaN
//truthy values inclide: Not falsy values

//handy way to check if a value has been defined
/*
var height;

height = 23;

//if no varibale is entered it will not be defined
//since 9 is undefined we need to make a case for 0 to be defined
// === is a stict operator and compares the two values as written
// == operator does coersion and can take '23' and convert it to a number 23 to compare
// its usually best practice to use the strict operator
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has not been defined");
}
*/

/********
 * CODING CHALLENGE 2
 */

/* 
 John and Mike both play basketball in different teams. In the latest 3 games, 
 John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94, and 123 points.

 1. Calculate the average score for each team
 2. Decide which teams wins in average (highest average score), and print the winner to the console.
 Also include the average score in the output.
 3. Then change the scores to show different winners. Don't forget to take into account there might b a draw.

 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average 
 winner to the console. HINT: you will need the && operator to take the decision.
 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wins with " + scoreMary + " points");
} else {
  console.log("There is a draw");
}
*/

/*******
 * FUNCTIONS
 */
