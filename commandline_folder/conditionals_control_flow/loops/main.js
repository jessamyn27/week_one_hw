console.log("hello there");

// what is an array
// an array is a listeners
const list = ['string', [], {}, 1, null, undefined];
// accessing an array
// //
// we use the index number and the name of the array
// // in order to access whatecer item we happen to want in the array
// console.log(list[o]);

// // 'string'
// console.log(list.length);
//
//
// const ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];
// console.log(ghostBusters1984[0]);
// console.log(ghostBusters1984[2]);
// // console.log(list.length);
// //
// const kitchenSink = ['dirty spoon', 'sponge', 'plate thats gross', 'soap', 'water']
// //
// // //print out the array
// //
// // for (let i = 0; i < kitchenSink.length; i++)
// //   console.log(`This is in my sink: ${kitchenSink[i]}`);
// //
// //to print every other item so (i + i + 2) shorthand is i += 2
//
// // i is short for iterator
//
//   for (let i = 0; i < kitchenSink.length; i += 2){
//     console.log(`This is in my sink: ${kitchenSink[i]}`);
//   };
//
// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "Jojo McDodd"];
//
// // show the odd numbers
//
// for (let i = 1; i < drSeuss.length; i+=2)
// console.log(`Who is: ${drSeuss[i]}`);

// using conditionals to select elements in an array

// const foodSelections = ['pizza', 'ramen', 'tea', 'ice cream', 'apple'];

// we only want to print the items if the index number is EVEN
//
// for (let i = 0; i < foodSelections.length; i++){
//   if(i % 2 === 0){
//     console.log(foodSelections[i], i);
//   }
// }
//

// we want every even index number and when i = 3

// for (let i = 0; i < foodSelections.length; i++){
//   if((i === 3) || (i % 2 === 0)){
//     console.log(foodSelections[i], i); //<- index number
//   }
// }

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
//
// // want it to go odd
//
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if(i % 2 !== 0){
//     console.log(looneyTunesChars[i], i); //<- index number
//   }
// }
//

// const veggies = ['red pepper', 'leek', 'pumpkin', 'brocoli'];
//
// // how do i change brocoli to "spinach"
// // not redefining veggies, redefining "veggies[3]"
// // we cannot reassign "veggies" but we can change the array name and size of it
// //
// // veggies[3] = 'spinach';
// // console.log(veggies);
// //
// // const number = 2;
// //
// // veggies[number] = 'pumpkin latte';
// //
// // console.log(veggies);
//
// console.log(veggies[veggies.length -1]);

// multi dimensional array
//
// const pairs = [['snoopy', 'linus'] ['peppermint patty', 'woodstock']]
//
// // pairs [0] is snoopy and linus
// // to get pairs [0][1] you can get just linus
// //
// // change linus to charlie brown do pairs [0][1] = charlie brown
//
// //
// // ARRAY METHODS
// // use .push
// const faves = ['Park and Rec', 'The Minion'];
// faves.push('The Office');
// console.log(faves);
//
// // use .sort
// const favSorted = faves.sort();
// console.log(favSorted);
//
// // use .log
// const nums = [1, 22, 400, 300]
// const newNums = nums.sort();
// console.log(newNums);
//
 
//
