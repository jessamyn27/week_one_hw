console.log("hello there day 3");

//  control flow
// 1 conditionls
// 2 loops - repeat lines of code
// 3 functions = save and later use the code
//
//
//
//
//
// //
// conditionals:
//  if (boolean experssion) {
//    //run this block of code
//  };
 // const sunny = true;
 // const temp = 76;
 //
 // !sometimes called a 'bang' operator and changes the oolen value ot the opposite
 //
 // let toggle = true;
 // console.log("sunny " + toggle);
 // toggle = !sunny;
 // console.log("notSunny " + toggle);
  //
  // const sunny = !true;
  // const temp = 76;
  // const notSunny =!false;
  //
  // console.log(sunny);
  // console.log(notSunny);


  // !sometimes called 'bang' changes the boolen calue to its opposite

 // let toggle = true;
 // console.log("sunny " + !toggle);
 // toggle = !sunny;
 // console.log("notSunny " + toggle);

// all values in JS have an implicit 'truthiness', they can be evaluated as either true or false, so basically javascript converts things to booleans for us.
// // all of the following become false when converted to a boolean
// 1 false
// 2 0
// 3 ""
// 4 null
// 5  undefined
// // 6. NaN
// if (0) {
//   would this block of code run? no it would be false
// }

// //we have some things that ar implicitly
// 1. truthiness1 "hi i am not empty so i am true"
// 2. 1 is truth
// 3. true
//
// theres a simple way to test this also, you can add !! bang operators in front of whatever you are testing to get the original truthiness
//
// equality operators
// // == (equals), !=(not equals), === (absolutely equals)
// so === tests for actual value and date type
  //
  // IN CLASS ALWAYS USE === SO WE KNOW THE DATETYPE WE ARE WORKING WITH AND WHAT IT IS

 // what function do we use to test datattype? TYPEOF(INPUT DATA)
//
// use [] for arrays
// use {} for objects
//
// 5 == "5" -> true, b/c coercision
// 5 === "5" -> false, does not coerce
//

// 1.
// 2. yes
// 3. no
//4 no bc 9 === "9"  USE 9!==9
// 5. bc

// comparison operators, most languages do not implicitly convert strings to numbers the way javascript does.
// < > <= >=

// strings are compared by alphabetical precedence

// 'a' < 'b' true
// 'z' > 'abc' truthiness
// // convert a string into a numbers
//
// parseFloat("20.45") // 20.45
// parseInt ("20.45") // 20
// Number("4") // 4

// is -10 greater than or equal to -100?
// -10 >= -100
// is infinity greater than or equal to -infinity

// // is "McDonald's" greater than "Burger King"
// "McDonalds" > "Burger King"
//
// Logical Operators

// &&, ||
// && = evaluates to true if both sides are true so true && true -> true

// false && true -> false

// OR Operator || if either side is true, then the value is true, checks left to right first

// false || true -> true

// when it hits a true value it stops there and makes it -> truthiness
// true / true /
//
//  //
//  const name = 'Kermit';
//
// let input; // this value would be from an input from a form or something
//
// input = 'Kermit';
//
// if (input === 'Kermit'){
//   console.log("Hello Kermitttt");
// } else {
//   console.log('You are not Kermit, who are you?');
// }
//

// Modulus - gives you the remainder of division '%'

// mod is great for checking for odd or even numbers

// if ( anyNumber % 2 === 0){
//   console.log('the number is even');
// } else {
//     console.log(' the number is odd');
// }
//
// const phish =['trey', 'mike', 'page', 'fishman']
//
// //phish[o] -> trey
// // phish.length = 4
// for (let i = 0; i < phish.length; i++){
//     console.log(phish[i]);
// }
//
//
// const num =['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
//
// for (let i = 0; i < num.length; i+=2){
//     console.log("even"[i]);
// } else (i = 0; i < num.length; i+=3{
//     console.log("odd"[i]);
// }

// CHALLENGE:
//loop 1 through 10
// check if its odd or even and print using Modular

for (let i = 1; i < 11; i++){
  if(i % 2 === 0){
      console.log('this is even, i');
  } else {
      console.log('this is odd');
  }

}
