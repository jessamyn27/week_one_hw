console.log("day 4");

// //what is a code block
// if() {
//   // this is a code block that is run if the if statement is passed
//
// }
//  while(){
//  //this is code block while codition is true
// }
//
// // functions act like variable and store code within a block that we can save for later reuse
//
// // old school :
// function name(){
//
// }
// // new school   ARROW function
//
// const funct = () => {
// // code to execute at a later time
//
// }

// DEFINING A FUNCTION
// const printBoo = () => {
//   console.log('======');
//   console.log('Boo');
//   console.log('========');
// }
// // this is how you RUN / INVOKE / CALL A FUNCTION
// printBoo();
//

// naming our functions they should always be declared witha const variable

// function names should containa verb, functions DO something
// 1. they get data
// 2. they set date - assign a value
// 3. they check data
// 4. they print date

//EXAMPLES;

// when you ar defining a function the input, (the input is anything you put in the functon) it's clled a parameter
// const checkInputLength = (input) => {
//   if(input.length > 10){
//     console.log('input length is greater than ten');
//   } else {
//     console.log('is not greater than ten');
//   }
// }
// // when we call a function we call the input an argument
// checkInputLength('YellowPencil')

// const sayName = (name) => {
//   console.log("Hello! my name is " + name);
// }
//
// sayName('Jessamyn');
// sayName('Party Potensh');
//
// const printParameter = (input) => {
//   console.log(input);
// }
//
// printParameter("jessamyn")
//
// const minusOne = (num) => {
//   console.log(num - 1);
// }
//
// minusOne(-1);
// minusOne(10);

// arr doesn't change anything in the array push takes it off
// const getLastElement = (arr) => {
//   console.log(arr[arr.length - 1]);
// }
//
// getLastElement([1, 2, 3, 4, 5])
//
// // const multipy = (num1, num2) => {
// //   console.log(num1 * num2);
// // }
// //
// // multipy(2, 5) // => 10
//
// INTERPOLATION OF MANY PARAMETERS
//
// const makeSentence = (word1, word2, word3) => {
//   console.log(word1 + '' + word2 + '' + word3);
//
//   console.log(`${word1} ${word2} ${word3}`);
// }
//
// makeSentence(['I', 'want', 'tacos']);
//
// const dividedThreeNums = (num1, num2, num3) => {
//   console.log(`${num3/(num2/num1)}!!!`);
//
// // dividedThreeNums(3, 5, 6);
// // STORE RESULT OF THIS LAST ONE WE NEED TO "RETURN KEYWORD TO GET IT BACK FROM THE CONSOLE"
//
// // RETURN KEYWORD GIVES A FUNCTION A VALUE, THE EXIT VALUE
// // return also stops a function instead of console.log which just prints it to the console and has no effect on your code
// const
// const dividedThreeNums = (num1, num2, num3) => {
//   return`${num3/(num2/num1)}!!!`;
//
// dividedThreeNums(3, 5, 6);
//
// const returnTen = () => {
//   return 10;
// }
//
// console.log(8 + returnTen());
//
// // // // // // // // // // // // // // // // // // // //

// SCOPE

// BLOCK SCOPE

// using var in a local scope (inside the brackets of {}) will hoist to the top and read it anyway which can cause bvariable collisionsor accidental overwrites
//
// const needs to be inside the scope not on the global or outside scope
//
// we use const and let not function and var b/c they don't hoist to the top inside a scope creating collision

// {
//   const words = "silly billy";
//   // OR
//   let words = "silly billy";
// }
// console.log(words); //=> undefined

// scope in functions
// our variables will be scoped to blocks, this includes the curlies {} provide, while loops, for loops, conditionals, and functions

// const setItem = () =>{
//   const item = 'spicy meatball';
//   return item;
// }
// console.log(item);
// => will return it but isn't actually running it b/c the return spit it back to
//
// for (var i = 0; i <= 100; i++) {
//   console.log("inside", i);
// }
//  console.log("outside", i);
//
//  // yes
 // yes
 // no
// //  // yes
// const checkSquare = (num) => {
//   if(Math.sqrt(num) % 1 === 0){
//     return true
//   } else {
//     return false
//   }
// }
// // OR another way to write it
//
// // const checkSquare = function (num) {
// //   return num > 0 && Math.sqrt(num) % 1 === 0;
// // }
//
// checkSquare(10);
// console.log(checkSquare(10))
//
// // const checkToLimit = return(checkSquare)
//
// const checkToLimit = (lim) => {
//   for (let i = 0; i <= lim; i++) {
//     console.log(checkSquare(i), i);
//   }
// }
// checkToLimit(10);
// // // // // // // // // // // // // // // // // // // // // //

// LAB
// question 1
const printGreeting = (name) => {
  console.log("this is " + name);
}
printGreeting("yo mama");
// question 2 reverse and split

const reverseWordOrder = (parameter) =>
console.log(parameter.split("").reverse());

reverseWordOrder("hello")

// question 3 using calculate USING SWITCH AND BREAK

const calculate = (numi,num2,operation) => {
  switch(operation)
}

const calculate = (num1, num2, operation) =>
  switch(operation) {
    if (true) {
      if else
}
  }

  if console.log();

  
