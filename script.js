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
