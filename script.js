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
 * DRY - Dont Repeat Yourself
 */
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = caclulateAge(1990);
var ageMike = caclulateAge(1948);
var ageMary = caclulateAge(1969);
console.log(ageJohn, ageMike, ageMary);

//Calculate years left till retirement

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " reitires in " + retirement + " years.");
  } else {
  }
  console.log(firstName + " is already reitired.");
}

yearsUntilRetirement(1990, John);
yearsUntilRetirement(1948, Mike);
yearsUntilRetirement(1969, Mary);
*/

/******************
 * FUNCTION STATEMENTS AND EXPRESSIONS
 */
//function declaration
//function whatDoYouDo(job, firstName) {
//}

//function expression
//function immediately finishes if return is triggered though case so no 'break' is needed
/*
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives for cab in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites.";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));
*/

/***********
 * ARRAYS
 */
/*
var names = ["John", "Mark", "Jane"];
//not as commonly used
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

//MUTATE ARRAY DATA

//can change an item in the array
names[1] = "Ben";
//add mary to a specific index
//names[5] = "Mary";

//add mary to final spot in array
names[names.length] = "Mary";
console.log(names);

//Different data types

var john = ["John", "Smith", 1990, "teacher", false];
//add element to end of array
john.push("blue");
//add to beginning of array
john.unshift("Mr.");

//remove last element from array
john.pop();
john.pop();
//remove first element
john.shift();
//will return the position of the argument you pass in
//if passed element is not in array it will return '-1'
console.log(john.indexOf(1990));
console.log(john);

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is Not a designer"
    : "John is a designer";
console.log(isDesigner);
*/

/**************
 * CODING CHALLENGE
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48, and $268.

To top he waiter a fair amount, John created a simple tip calculater (as a function). He likes to tip 20% of
the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to mave 2 arrays:
1) Containing all three tips (one for each bull)
2) Containing all three final paid amounts (bill + tip).
 */
/*
var johnBills = [124, 48, 268];

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/***********
 * Objects and Properties
 */

//define key value pairs, each value has a name called the key
//in arrays the order matters a lot while in objects it doesnt
//easiest way of creating a new object is with the object literal
//basically a container we can fill with variables which are called properties
/*
//Object Literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(john);
//contents of the object are accessable via dot notation
console.log(john.firstName);
//also accessable via array
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

//can also mutate the data
john.job = "designer";
john["isMarried"] = true;
console.log(john);
//New Objet syntax
//make a new empty object then fill it up
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
*/

/************
 * Objects and Methods
 */
/*

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    //use this to refer to john.birthYear
    //return 2019 - this.birthYear;
    this.age = 2019 - this.birthYear;
  }
};

*/
//we want to add a function to john that calculates age instead of hardcoding it because it changes every year
//the function calAge is now a method of john
/*
console.log(john.calcAge());

//to store the age in the john object

//john.age = john.calcAge();
console.log(john);

//An object has a special keyword called 'this' which refers back to itself.
*/
/***************
 * Coding Challenge
 */

/*
 Lets remember the first coding challenge where Mark and John compared their BMI's. Lets
 now implement the same functionality with objects and methods. 
 1. for each of them create an object with properties for their full name, mass, and height.
 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return itfrom the method.
 3. In, the end, log to the console who has the highest BMI, together with teh full nameand the respective BMI. 

 Remember: BMI = mass / Height^2 = mass / (height* height). (mass in kg and height in meter)
 */
/*
var mark = {
  fullName: "Mark Smith",
  mass: 100,
  height: 1.95,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  fullName: "John Smith",
  mass: 160,
  height: 1.77,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
//mark.calcBmi();
//john.calcBmi();
//can call and immediately return values in the function below instead of calling them seperately

console.log(mark, john);

if (john.calcBmi() > mark.calcBmi()) {
  console.log(john.fullName + " has a bigher bmi of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a bigher bmi of " + mark.bmi);
} else {
  console.log("They have the same bmi.");
}
*/

/********
 * Loops and iteration
 */

//more control structures - loops
//count from 0-9
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}
*/
/*
var john = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

//same functionality in while loop

while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/
//continue (quit the current iteration of a loop and continue to next one) and break statements (to break out of a loop)
//allows us to skip non string values in the array
/*
var john = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

//breaks out of loop and quits printing
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}


//looping backwards
var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/***********
 * Coding Challenge
 */

/* Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

 This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180, and $42.
 John likes to tip 20% of the bill when the bill is less than $50., 15% if the bill is between $50 and $200, and 10%
 if the bill is more than $200.

 Implement a tip calculator using objects and loops: 
 1. Create and object with an array for the bill values.
 2.Add a method to calculate the tip
 3. Rhis method should include a lopp to iterateover all the paid bills and do the tip calculations
 4. s an output, create 1) a new array contaiing all the tips 2) an array contaiing final paid amounts (bill + tip.
  HINT: Start with two empty arrays as poperties and fill them up in the loop.
*/
/*
var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      //Determine percentage based on tipping rules
      var percentage;
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      //Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.calcTips();
console.log(john);

/*
 Marks family also went on a holiday, going to 4 different restaurants. The bills were $77, $375,
 $110, and $45.
 Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between 
 $100 and $300, and 25% if the bill is more thna $300. 

 5. implement the same functionality as before, this time using Mark's tippingrules.
 6. Create a function (not a method) to calculate the average of a given array of tips.
 HINT: Loop over the array, and in each iteration store thecureent sum ina variable (starting from 0). 
 After you have the sum of the array, divide it by the number of elements in it to get the average.
 7. Calculate the average tip for each family.
 8. Log to the console which family paid the highest tips on average. 
 */
/*
var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      //Determine percentage based on tipping rules
      var percentage;
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      //Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

//Do the calculations
mark.calcTips();
console.log(john, mark);
//calc avg and store in each object

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(mark, john);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s faily pays higher tips , with an averge of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s faily pays higher tips , with an averge of $" +
      mark.average
  );
} else {
  console.log("They pay the same amount of tips.");
}
*/

/****
 * Javascript Versions
 */

/*
 
 Short history of javascript

1996: first released in 1996 and changed names from Livescript to Javascript. Has nothing to do with Java.

1997: ES1 (ECMAScript 1) became the first version of the Javascript language standard

2009: ES5: (ECMAScript 5) was released with lots of new features

2015: ES6 (ECMAScript 2015) was released: the biggest update to the language to date

2015: Changed to an annual release cycle with new additions every year renamed for the year released

ES5: Fully supported in all browers;
Ready to be used today

ES6/2015    }  Well supported in all modern browers
ES7/ES2016  }  No support in Older Browsers
ES8/2017    }  Cn use most features in prodution with transpiling and polyfilling (converting to ES5)

future versions, together are called ESNext;
Some features are supported in modern browsers.

 */

/**
  * How our Code is Executed
  */

/**
 * Javascript is always hosted in an envirment typically in a browser such as Chrome Firefox etc
 * This is where Javascript runs. There can be other hosts such as the Node.js server.
 * When we write our javascript code and want ot run it the host where the javascript is hosted 
 * has some kind of javascript engine that takes our code and executes it. There are many different
 * engines out there, like googles v8 engine that is used in google chrome. There are others like Reno, 
 * Spidermonkey etc. First the code is parsed by a parser and checks the syntax. If incorrect it throws an
 * error and stops the execution. If everything is correct the parser then produces a data structure known as
 * the Abstract Syntax Tree. This is then translated into machine code ( a set of instructions that can be 
 * executed by the computers processor) where the code runs.
 * 
 * 
 */

/********
  * Execution contexts and stack
  */

/**
 * All javascript code needs to run in an environment and these environments are called 'Execution Contexts'. Can imagine it
 * to be a box or container which stores variables and in which a piece of our code is evaluated and executed.
 * The default execution context is the Global Execution context- this means code that is not inside any function, that is
 * associated with the global object. In the browser, that would be the window object.Everything we declare in the 
 * global context gets attributed to the window object in the browser. Every time we call a function it gets its own brand
 * new execution context. 
 * 
 * var name = 'John';           //global execution context
 * 
 * function first() {           //also in global context
 * var a =  'Hello!';
 * second();                    //new function calls create new execution contexts taking precedence in the stack
 * var x = a + name;
 * }
 * 
 * function second() {           //also in global context
 * var b = 'Hi';
 * third();                     //once the newest execution context is done executing it pops off the stack and the 
 * var z = b + name;            //previous context is executed
 * }
 * 
 * function third() {           //also in global context
 * var c = 'Hey!';
 * var z = c + name;
 * }
 * 
 * first();                     //Gets its own execution context and is placed above the global execution context
 *                              //forming the execution stack for the duration of this first function call
 *                              //the execution context for that function becomes the active context in which 
 *                              //the code is executed
 * 
 */
