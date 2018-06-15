console.log("homework wed 6-13!");


 // Commit 1 - Easy Going answered

// for (let i = 1; i < 21; i++){
//       console.log(i);
//     }

// Commit 2 - Get Even answered
//
for(let i=0; i <=20; i++){
    if ( i%2 === 0 )
      console.log(i);
    }

// Commit 3 - Excited Kitten answered
// Part 1.
//
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// const cat = ('Love me, pet me HSSSSSS!')
//
// for (let i=0; i<20; i++){
//   console.log("cat");
// }

// Part 2 NOTES: well i got the random numbers to work! just couldn't link the array...

//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//
 array = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

function getRandomint(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomint(3));{
  if (0){
  console.log([0]);
}
  if (1){
    console.log([1]);
}
  if (0){
      console.log([2]);}
}
//

// TEST:
// for (let i=0; i <20; i++){
//   if(i % 2 === 0){
//   console.log("...human...why you taking pictures of me?...");
// } else {
//   console.log("Love me, pet me! HSSSSSS!");
// }
// }
//
// (i % 5 === 0)
// Commit 4 - Fizz FizzBuzz answered

// almost got it! couldn't get the 5 or 3 plus 5 part to build out correctly...
//
// for (let i=0; i <=100; i++){
//   if(i % 3 === 0){
//   console.log("Fizz")
// } else if(i % 5 === 0){
//   console.log("Buzz")
//     else if((i % 3 === 0) && (i % 5 ==0))
//     console.log("FizzBuzz");
//   }
// }
// }

//(i % 5 === 0)
// } else(i % 2 === (3) || (5)){
//   console.log("FizzBuzz");
// }
// }

// Commit 5 - Getting to Know you answered

// const thom = ["Thom", 1000, "Christchurch"];
// const karolin = ["Karolin", 16, "New York"];
// const kristyn = ["Kristyn", 5, "Pittsburgh"];
// const matt = ["Matt H", 186, "Philadelphia"];
//
// thom[0] = "Gameboy";
// console.log(thom[0]);
//
// karolin[1] = (16 + 1)
// console.log(karolin[1]);
//
// matt[2] = "Gotham City"
// console.log(matt[2]);
//
// kristyn[2] = "Brooklyn"
// console.log(kristyn[2]);

//TEST
// const phish =['trey', 'mike', 'page', 'fishman']
//
// //phish[o] -> trey
// // phish.length = 4
// for (let i = 0; i < phish.length; i++){
//     console.log(phish[i]);
// }

// Commit 6 - Yell at the Ninja turtles answered

//NOTES well i at least got practice writing out a call toUpperCase, didn't work but i'll perfect it tomorrow, i really wanted to make some turtle power happen!

const ninja turtles =['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

const ninja turtles = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'turtle power'
  }
})
const b =
String.prototype.toUpperCase.call(true);

console.log('Donatello'.toUpperCase()); // 'DONATELLO'

//NOTES WELL... THIS WORKED! NOT SURE IF THIS IS THE BEST WAY TO DO THIS...

const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return ('Donatello ' + 'Leonardo ' + 'Raphael ' + 'Michaelangelo');
  }
});

// const b = String.prototype.toUpperCase.call(true);
//
// // prints out 'ABCDEF TRUE'.
// console.log(a);

// Commit 7 - Kristyn and Thom have their outfits ready for class - array practice

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
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
// // Alien Attire
//
// kristynsCloset[0][3] = "new shoe spot";
// console.log("thomsCloset");



// Dress Us Up

// Commit 8 - I loops through their closets

// Commit 9 - Project Euler Problem 1 answered


// notes...
      //
      //// // // use .log
      // const nums = [1, 22, 400, 300]
      // const newNums = nums.sort();
      // console.log(newNums);


      // for (let i = 1; i < 11; i++){
      //   if(i % 2 === 0){
      //       console.log('this is even, i');
      //   } else {
      //       console.log('this is odd');
      //   }
//
