// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// in this code the variable "name" is set to a string of "Dane".
// the if statement says that if the string of 'name' is exactly equal to the string 'Mary' then the console logs 'Hi, Mary!' otherwise the console logs 'How do you do?'.
// in this case the console would log 'How do you do?' as the string for name is 'Dane' and not 'Mary'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// in this code we declare a variable "secret";
// in the next line we declare a variable 'code' with value 123.
// in the if statement we see if 'code' directly equals 123, then the variable 'secret' is assigned the string 'super' and code is assigned the value of 'code' times 2.
// once that if statement runs, another if statement says that if the current value of 'code' is greater than 250, then secret is assigned the string 'duper'. then we see the console logging the value of variable 'secret'.
// in this code, the console would log the value of 'secret as 'super' because the code would be doubled from the first if statement but that would only yield a value of 246 which is less than 250. So only the first if statement would execute fully changing "secret" to 'super'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we declare variable 'isStudent' with a boolean value 'true'
// we declare variable 'age' with value of 34
//we declare variable 'zip' with value of 55407
// in the if statement we have 4 possible options. 
// 1. if variables isStudent is true and 'zip' is greater than 80000, then the console logs 'You're a student on the West Coast!'.
// 2. otherwise if variables 'isStudent' is false and 'age' is less than 30, the console logs "What are your hobbies?"
// 3. otherwise if variable 'isStudent' is true, the console logs 'welcome to Prime'
// 4. and if none of those conditions are met, then the console logs "How about the weather?".
// in this example, the console would log 'Welcome to Prime' as the first two conditions of the if statement are not met but 'isStudent' is true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// colorOne should be 'blue' and colorTwo should be 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//we should switch the || to && because we want to show AND not OR.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

the condition in the if statement should be 'age >= minAge' and the console.log should log "enter". TECHNNICALLY the if statement would log the correct value. it just doesn't follow the logical flow of the question asked.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

