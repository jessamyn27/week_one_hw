console.log("homework day 4");

// verbal questions
// What is the difference between a parameter and an argument?

// A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters. Parameter is variable in the declaration of function. Argument is the actual value of this variable that gets passed to function.

//
//console.log will display the parameter passed to the log method in the console window. Use this method to display a string or variable in the console window.

//When using the return statement, the function will stop executing, and return the specified value.


// 2. Palindrome
// //
// const checkPalindrome = (poop) => {
// if (poop.toLowerCase('') === poop.split('').reverse().join('')) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// };
// checkPalindrome("poop");
// checkPalindrome("Poop");

 //
 // 3. Digit Sum  write a function sumDigits that accepts a number and returns the sum of its sumDigits
 // got it to string, split up to sep variables, not sure how to get them to sum up together

//  const sumDigits = (addItUp) => {
//   var summed = addItUp.toString().split('');
// return summed;
// }
//
// console.log(sumDigits(42));
//
//  // // => 6;
//  // found this on GOOGLE! tested it out returns => 5
//  function pythagorean(sideA, sideB){
//    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//  }
//
//  console.log(pythagorean(4, 3));
//
// //"Commit 5 - Sum Array".

let sum = (0);
for (i =0, i < array.length, i++)
sum += array [i];
return sum;

// function getSum () {
//   return Array.from(arguments).reduce((sum, value) => {
//     if (Array.isArray(value)) {
//       sum += getSum.apply(this, value)
//     } else {
//       sum += Number(value)
//     }
//
//     return sum
//   }, 0)
// }
//
// var sum = getSum (1, '1', '3', [2, '2', '10']);
//
// console.log(sum);
//
// // Commit 6 - Prime Numbers - found this solution in stackoverflow, but need to understand how to convert it to a const with arrow and how it's psudocoded out so i can learn to create these myself!!!
//
// for (let checkPrime = 0; checkPrime <= 100; checkPrime++) {
//
//     var notPrime = false;
//     for (var i = 2; i <= checkPrime; i++) {
//         if (checkPrime%i===0 && i!==checkPrime) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(checkPrime);
//     }
// }

// Commit 7 -

// // // // // // // // // // // // // // // // // //
//Notes...




 // const printGreeting = (name) => {
 //   console.log("this is " + name);
 // }
 // printGreeting("yo mama");
 // // question 2 reverse and split
 //
 // const reverseWordOrder = (parameter) =>
 // console.log(parameter.split("").reverse());
 //
 // reverseWordOrder("hello")
 //
 // // question 3 using calculate USING SWITCH AND BREAK
 //
 // const calculate = (numi,num2,operation) => {
 //   switch(operation)
 // }
 //
 // const calculate = (num1, num2, operation) =>
 //   switch(operation) {
 //     if (true) {
 //       if else
 // }
 //   }
 //
 //   if console.log();
 //
 //   const calculator = (num1,num2,operation) => {
 //
 //  switch(operation) {
 //    case 'add': return num1 + num2;
 //    break;
 //    case 'sub': return num1 - num2;
 //    break;
 //    case 'mult': return num1 * num2;
 //    break;
 //    case 'div': return num1/num2;
 //    break;
 //    case 'exp': return num1 ** num2;
 //    break;
 //    default:
 //    return 'You passed me something that  doesnt comput'
 //
 //
 //  }
 //
 // }
