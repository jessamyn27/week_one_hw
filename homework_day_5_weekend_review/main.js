// console.log("first weekend omg...");
//
// Long_Weekend covering loops, functions, and datatypes
//
// Conceptual Questions // // // // // // // // // // // // // // // // // //

// question and answer

// How do we assign a value to a variable?
// const x = value
// // How do we change the value of a variable?
// var variableName = value
// var variableName = newValue
// // How do we assign an existing variable to a new variable?
// var newVariable = oldVarialbe


// Strings // // // // // // // // // // // // // // // // // // // // // //

// Question

// Create a variable called firstVariable.
// assign it the value of a string => "Hello World"
// change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// change the value of secondVariable to a string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// ANSWER

// firstVariable = "Hello World"
// console.log(firstVariable);
// firstVariable = 27
// console.log(firstVariable);
// secondVariable = firstVariable
// .secondVariable
// console.log(firstVariable);
// ANSWER IS 27

// Booleans // // // // // // // // // // // // // // // // // // // // // //

// question :

// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';
// a _ b;
// c _ d;
// 'Name' ___ 'Name';
// a _ b ___ c;
// a _ a ___ d;
// e ___ 'Kevin';
// 48 ___ '48';
// ...
//

// ANSWER:

// a < b; // true
// c > d; // true
// 'Name' = 'Name'; // true
// a < b < c; // true
// a = a < d; // true
// e = 'Kevin'; // true
// 48 = '48'; // true
// ...


// The Farm // // // // // // // // // // // // // // // // // // // // // //

// Questions

// Write code that will print out "mooooo" if the variable animal is equal to cow.
//
// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."

// Answers
//
// const farm = (animal) => {//this is my function
//   if (animal == 'cow') {
//   return 'cow';
// } else {
//   return "Hey! You're not a cow."
// }
// }
//  console.log(farm('pig'));

// Drivers Ed // // // // // // // // // // // // // // // // // // // // // //

// Questions

// Write a variable that will hold a person's age.
//
// Write code that will print out "Here are the keys", if the age is 16 years or older.
//
// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

// // Answers

// const driver = (age) => {
//   if (age >= 16) {
//   return "Here are the keys";
// }
//   else {
//     return "Sorry, you're too young.";
//   }
// };
// console.log(driver(16));


// Just Loop It // // // // // // // // // // // // // // // // // // // // // //

// Questions

// Write code that will print out all the numbers in the range 0 - 10.
//
// Write code that will print out all the numbers in the range 10 - 4000.
//
// Write code that will print out every other number in the range 10 - 4000.
//

// Answers

// for (let i=0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i=10; i <= 4000; i++) {
//   console.log(i);
// }

// for (let i=10; i <= 4000; i+=2) {
//   console.log(i);
// }

// NOTES
// for (let i=1; i <= 1000; i++) {
// 	console.log('The number is: ' + i);
// }
// for (initial condition; while condition; repeating expression) {}

// Lets Get Even // // // // // // // // // // // // // // // // // // // // // //

// QUESTIONS

// Print out the even numbers that are within the range of 1 - 100.
//
// Adjust your code to add a message next to the even number that says: "is an even number".
//
// Example Output:
//
// 2 is an even number
// 4 is an even number
// 6 is an even number

// ANSWERS

// for (let i=0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log((i) + " is an even number");
// } else {
//     console.log((i) + " is an even number")
// }
// }

// Give Me Five // // // // // // // // // // // // // // // // // // // // // //

// Questions

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:
//
// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:
//
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// ANSWERS

// for (let i=0; i <= 100; i++) {
//   if (i % 5 == 0) {
//   console.log('I found a ' + i + '. High five!');
// } if (i % 3 == 0) {
//   console.log('I found a ' + i + '. Three is a crowd')
// }
// }

// Savings Account // // // // // // // // // // // // // // // // // // // // // //

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
//
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.

// ANSWERS

// let bankAccount = 0
// for (let i = 0; i <= 10; i++) {
//  bankAccount += i;
// }
// console.log(bankAccount);

// let bankAccount = 0
// for (let i = 0; i <= 100; i++) {
//  (bankAccount += (i*2));
// }
// console.log(bankAccount);

// Multiples of 3 and 5 // // // // // // // // // // // // // // // // // // //

// QUESTIONS

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
//  You just solved Project Euler problem 1!

// ANSWERS

// let numbers = 0;
// for (let i = 1; i < 1000; i++) {
//   if (i % 5 === 0 || i % 3 === 0) {
//  numbers += i;
// }
// };

// console.log(numbers); // // // // // // // // // // // // // // //

//Question

// Easy Does It / // // // // // // // // // // //


// Create an array that contains three quotes and store it in a variable called quotes.

// ANSWER

// const foodQuotes = ['I am addicted to ramen', 'pasta is my go to', 'veggie burgers are the splurge']
// console.log(foodQuotes);

// // // // // // // // // // / // // // // // // // // //

// .push // adds at the end of the index

// .unshift //adds to the array end of the first index

// .shift //deletes the first


// Random// // // // // // // // // // / // // // // // // // /

//Question and Answers

// Given the following array
//
// const randomThings = [1, 10, "Hello", true]
//
// // // how do you access the 1st element in the array?
//
// // console.log(randomThings[0]);
//
// // Change the value of "Hello" to "World".
//
// randomThings[2] = "World";
// console.log(randomThings[2]);

// Check the value of the array to make sure it updated the array.
//

// We've Got Class// // // // // // // // // // / // // // //

//Question


// Given the following array
// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
//
// What would you write to access the 3rd element of the array?

// console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"

// ourClass[2] = ["Octocat"];

// Add a new element, "Cloud City" to the array.

// ourClass.push("Cloud City")

// Mix It Up/ // // // // // // // // // / // // //

// ourClass.random;
// console.log(ourClass);


// NOTES
// ourClass[2] = "Octocat";
// ; //adds to the array at the last index.
// ourClass.unshift("First City"); //adds to the array at the 1st index.
// ourClass.shift("First City"); //deletes the first array index.
// console.log(ourClass);

//Question & Answers


// Given the following array

// const myArray = [5 ,10 ,500, 20]
// //
// // using the push method, add the string "Egon" to the end of the array.
//
// myArray.push('Egon')
// console.log(myArray);
//
// // using a method, remove the string from the end of the array.
//
// myArray.splice(4);
// console.log(myArray);
// //
// // using the unshift method, add the string "Bob Marley" to the beginning of the array
// //
//
// myArray.unshift('Bob Marley')
// console.log(myArray);
//
// // using a different method, remove the string from the beginning of the array
// //
// myArray.shift(0)
// console.log(myArray);
// // use the reverse method on this array
//

// notes
// .push // adds at the end of the index

// .unshift //adds to the array end of the first index

// .shift //deletes the first

// Biggie Smalls / // // // // // // // // // / // // //


//Question

// Write an if..else statement:
//
// console.log little number if the number is entered is less than 100
//
// If the number entered is 100 or more, alert big number.

// ANSWER

// const number = (i) => {
//   if (i <= 100) {
//   return "little number";
// }
//   else {
//     return "big number";
//   }
// };
// console.log(number(12));

// Monkey in the Middle / // // // // // // // // // / // // //

//Question

// Write an if...else if...else statement:
//
// console.log little number if the number entered is less than 5.
//
// If the number entered is more than 10, log big number.
//
// Otherwise, console.log "monkey".
//
 // ANSWER

//  const number = (i) => {
//    if (i <= 5) {
//    return "little number";
//  }
//    else if (i > 10) {
//      return "big number";
//    }
//    else {
//  return "monkey";
// }
// }
// console.log(number(3));
// console.log(number(40));
// console.log(number(7));


// What's in Your Closet? / // // // // // // // // // / // //

//Question

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
//
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// //
// // // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//
// //  QUESTIONS & ANSWERS:
//
// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// //
// console.log('kristyn is rocking that ' + kristynsCloset[2] + ' today!');
//
// // Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
// //// myArray.shift(0)
//
// kristynsCloset.shift('0');
// console.log(kristynsCloset);
// const kristynShoe = ['left shoe']
// console.log(kristynShoe);
//
// // Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// //
// kristynsCloset.splice(5,0, 'raybans');
// console.log(kristynsCloset);
//
// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// //
// kristynsCloset[4] = ('stained knit hat')
// console.log(kristynsCloset);
//
// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// //
// thomsCloset[0][0];
// console.log(thomsCloset[0][0]);
//
// // In the same way, access one item from Thom's pants array.
// //
// console.log(thomsCloset[1][2]);
//
// // Access one item from Thom's accessories array.
// //
// console.log(thomsCloset[2][0]);
//
// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// //
// console.log('Thom is looking rediculous in those ' + (thomsCloset[2][0] ) + ' those ' + (thomsCloset[2][2]) + ' & his nighttime ' + (thomsCloset[1][2]));
//
// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// //
//
// thomsCloset[1][2] =`Footie Pajamas`;
// console.log(thomsCloset[1][2]);

// Functions / // // // // // // // // // / // /// // // // //


//Question

// printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
//
//
// const printGreeting = (name) => {
//   console.log(`I'm a snuggle monster named ${name}`);
// }
// printGreeting('Bambino');

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// const printGreeting = (name) => {
// console.log(`Hello there, ${name}`);
// }
// printGreeting('Slimer');
//

// reverseWordOrder

//Question & Answers

// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
//
// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"
//
// const reverseWordOrder = (string) => {
//   return string.split(" ").reverse().join(" ");
// }
// console.log(reverseWordOrder("Ishmael me Call"));

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"
//
//
//Question


// Calculate  // // // // // // // // / // /// // //

// Write a function called calculate.
//
// This function should take three arguments, two numbers and a string.
//
// Name the parameters num1, num2, and operation.
//
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
//
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
//
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
// Answer

// const calculate = (num1, num2, operation) => {
//   switch(operation) {
//     case 'add': return num1 + num2;
//     break;
//     case 'sub': return num1 - num2;
//     break;
//     case 'mult': return num1 * num2;
//     break;
//     case 'div': return num1/num2;
//     break;
//     case 'exp': return num1 ** num2;
//     break;
//   }
// }
//
// console.log(calculate(2, 3,'exp'));
// console.log(calculate(2, 3, 'mult'));
// console.log(calculate(4, 3, "sub"));
// console.log(calculate(4, 3, "exp"));
// => 1
// => 64
//
// Questions and Answers

// 1 // // // // // // // // / // /// // // // // // // //

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
//

// const printCool = (name) => {
//   console.log(`${name} is cool`);
// }
// printCool('Captain Reynolds');
// => "Captain Reynolds is cool";
//
// 2 // // // // // // // // / // /// // // // // // // //

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// var cube=function(x) {
// return x * x * x;
// };
// var x=5 ;
// console.log(cube(x));

// console.log(calculateCube(5));
// => 125
//
// 3 // // // // // // // // / // /// // // // // // // //

// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// this didn't work at all, i need to learn how to write this out or use switch and break?

// const isAVowel = (letter) => {
//   if ("a" === true); {
//     console.log("is a vowel");
// }
//   if ("e" === true); {
//     console.log("is a vowel");
// }
//   if ("i" === true); {
//     console.log("is a vowel");
// }
//   if ("o" === true); {
//     console.log("is a vowel");
// }
//   if ("u" === true); {
//     console.log("is a vowel");
// }
// }
// console.log(isAVowel("u"));
//4 // // // // // // // // / // /// // // // // // // //

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
//
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// okay didn't quite work how the question asked but both strings printed haha

// let string1 = [1, 34, 80];
// let string2 = [5, 9, 27];
// const getTwoLengths = (string1, string2) => {
//     for (let i = 0; i <= string1.length; i ++) {
//         return string1.length;
//     }
//     for (let i = 0; i <= string2.length; i ++) {
//         return string2.length;
//     }
//   }
//     console.log(string1, string2);


// getTwoLengths("Hank","Hippopopalous");

// const str1 = "Hank ";
// const str2 = "Hippopopalous";
// var res = str1.concat(str2);
// console.log(res);

// 5 // // // // // // // // / // /// // // // // // // //

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// yep went down a rabbit hole a few times, gonna need help with making numbers show up for work... yikes
//
// function getMultipleLengths(){
//     var output = [1, 2, 3, 4, 5];
//     for(var i = 0; i < arguments.length; i++){
//          output.push(arguments[i]);
//     }
//     console.log(output.join(" "));
//
// getMultipleLengths("hello", "what", "is", "up", "dude")

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
//

// 6 // // // // // // // // / // /// // // // // // // //

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
//
// console.log(maxOfThree(6, 9, 1));
// => 9
//
// ANSWER yep tried this out and tried to look up the correct format... gonna need to ask my cohort for this one...

// maxOfThree = (num1, num2, num3) => {
//   if (num1 - num2 < 0) {
//   return num3;
// }
//   if (num1 - num3 < 0) {
// }
//     return num2;
//   if (num2 - num3 < 0) {
//     return num3
// }
// }
// console.log(maxOfThree(7, 17, 27) );

// console.log(maxOfThree());

// 7 // // // // // // // // / // /// // // // // // // //

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// const printLongestWord = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
// printLongestWord.toString();
// //
// console.log(printLongestWord);

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
//
// 8 // // // // // // // // / // /// // // // // // // //

// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
//
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// yep idk  but somehow i got this i think, need more help with "return" and other methods i think it's called?
//
// const transmogrify = (x, y, z) => {
//  return((x * y)**z);
// }
// console.log(transmogrify(5, 3, 2));
//

Notes

// let bankAccount = [x, y, z];
// for (let i = 0; i <= 100; i++); {
//  (bankAccount += (i * x * y * z));
// }
// console.log(bankAccount[5, 3, 2]);


// Notes
// arr1 = (5)
// arr2 = (3)
// arr3 = (2)
// var sum = 0;
// for(var i=0; i< arr1.length; i++) {
//     sum += arr1[i]*arr2[i];
// }
// console.log(arr1.sum);
// console.log(transmogrify(5, 3, 2));
// => 225
//
// Objects // // // // // // // // / // /// // // // // // // //

// Syntax // // // // // // // // / // /// // // // // // // //

// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
//
// const skateboard = { // skateboard is the object or dictionary
//   wheels:    4, // wheels is the key and the comma is instead of semi-colons and 4 is the value they are a pair
//   gripColor: "black",
//   company:   "Toy Machine",
//   graphic:   "monster graphic",
//   kickflip:  () => { // kickflip is the method
//                console.log("SIIIICK DOOD");
//              }
// };
// Example:
//
// {} curly braces define the object.
//
// Me // // // // // // // // / // /// // // // // // // //

// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.
// The object would look something like this if we console logged it:
//// => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}
//
// Using dot notation, access the name property in your object.
// Without writing directly into the object, update the value of age to be 1000 years old.
// Using dot notation, verify that age has been updated.
// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
// Access the value of "place of residence"
//
// answer

// const me = {
//   name: "Jessamyn",
//   age: 27,
//   email:   "hangten@gmail.com",
//   food:  () => {
//                console.log("ramen");
//              }
// };
// console.log(me);
// me.food();
// me.placeOfResidence = "La Jolla"
// console.log(me);

// Slimer // // // // // // // // / // /// // // // // // // //
// probably just very late but i looked through our lessons on objects and MDN and coudn't find a clear way to add / change / delete an object, key or value...kinda guessed a lot haha

// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
// Given the slimer object:
// What would you write to access the name and console.log it?

// console.log(monster.name);

// What would you write to change the type to 'creature' (without changing it inside the object)

// $.each(monster , function(){
//    monster.type = "creature"
// });

// What would you write to add a key to the object called age, and set the age to 6?

// monster.age = 6;
// monster.age;
// console.log the object to make sure type is creature, and age is 6
//
// Ogres // // // // // // // // / // /// // // // // // // //

// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
//
// Using objects, create models and have them interact.
//
// how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
//
// how would you model an ogre? Your ogre will want hitpoints.
//
// Write a very small program that will simulate a battle between your adventurer and an ogre.
//
// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.
// If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).
//

// we worked on this one in class on friday together, kind of get it...
//
// const adventurer = {
// name: 'Yowza',
// startPoints: 100,
// // hitpointArm: 10,
// // hitpointLeg: 25,
// attack() {
//   return ogre.startPoints -= 10;
// },
// };
//
// const ogre = {
//  name: 'Yowzed',
//  startPoints: 100,
//  // hitpointArm: 5,
//  // hitpointLeg: 30,
// attack() {
//   return adventurer.startPoints -= 5;
// }
// };
//
// // console.log(adventurer.attack()); //90
// // console.log(ogre.attack()); //95
// //
// // console.log(adventurer.attack()); //90
// // console.log(ogre.attack()); //95
//
//
// for (let i = 0; adventurer.startPoints >= 0 && ogre.startPoints >= 0; i++) {
//  adventurer.attack();
//  ogre.attack();
// } //used && bc both conditions need to be true or it'll keep running.
//
//  if (adventurer.startPoints == 0) {
//     console.log("Ogre wins. OH NO, the humanity!");
//  } else {
//    console.log("Adventurer wins, the person has been saved.");
//  };
//
// console.log(adventurer);
// console.log(ogre);
// //
