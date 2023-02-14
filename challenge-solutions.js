// My code for Voting Station Calculation
// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

// const goodStations =[];

// function chooseStations (station) {
//   for (const station of stations) {
//     if (station[1] >= 20) {
//       if (station[2] === 'community centre' || station[2] === 'school') {
//         goodStations.push(station[0]);
//       }  
//   }
// }
// } 
// chooseStations(stations);
// console.log(goodStations);

// // My code for X marks the perfect shot
// const moves = ['south', 'east', 'east', 'east', 'east'];

// function finalPosition(moves) {
//   let x = 0;
//   let y = 0;
//   const coordinates = [];

//   for (const move of moves) {
//     if (move === 'north') {
//       y++;
//     } else if (move === 'south') {
//       y--;
//     } else if (move === 'west') {
//       x--;
//     } else if (move === 'east') {
//       x++
//     }
//   }

//   coordinates.push(y);
//   coordinates.push(x);

//   return coordinates;
// }

// console.log(finalPosition(moves));

// // My code for Age Calculator
// function ageCalculator(name, birth, currYear) {
//   const age = currYear - birth;

//   return `${name} is ${age} years old`;
// }

// console.log(ageCalculator("Ramic", 2002, 2023));

// //My code for How Many Hundreds
// function howManyHundreds(num) {
//   const amount = num / 100;

//   return Math.floor(amount);
// }

// console.log(howManyHundreds(12467));

// // My code for Area Calculators
// function calculateRectangleArea(length, width) {
//   if (length === 0 || length === -1 || width === 0 || width === -1) {
//     return undefined
//   } else {
//     return length * width
//   }
  
// };

// function calculateTriangleArea(base, height) {
//   if (base === 0 || base === -1 || height === 0 || height === -1) {
//     return undefined
//   } else {
//     return base * (height / 2);
//   }
// };

// function calculateCircleArea(radius) {
//   if (radius === 0 || radius === -1) {
//     return undefined;
//   } else {
//     return Math.PI * (radius * radius);
//   }
// };

// console.log(calculateCircleArea(1.5));

// //My code for Looping - Range 
// const range = function(start, end, step) {

//   if (end < start || step <= 0 ) {
//     return [];
//   } else {
//       const numList = [];
//       for (let i = start; i <= end; i += step) {
//         numList.push(i);
//       }
//       return numList;
//   }
// }

// console.log(range(0, 100, -1));

// // My code for lastIndexOf
// const lastIndexOf = (array, value) => {
//   let index;
//    for (let i = array.length - 1; i >= 0; i--) {
//     if (value === array[i]) {
//       index = i;
//       return index;
//     }
//    }
//    return -1;
// }

// console.log(lastIndexOf([2,3,5,1,4], 5));

// // My code for Concatenate Arrays
// const concat = (array1, array2) => {
//   const array3 = array1.concat(array2);
//   return array3
// }

// console.log(concat([1,2,3],[4,5,6]));

// // My code for Trash to Treasure
// const smartGarbage = (trash, bins) => {
//   if (trash === "waste") {
//     bins.waste += 1
//   } else if (trash === "recycling") {
//     bins.recycling += 1
//   } else if (trash === "compost") {
//     bins.compost += 1;
//   }
//   return bins;
// }

// console.log(smartGarbage('waste', {waste: 4, recycling: 2, compost: 5}));

// //My code for Driving Mayor Daisy
// const carPassing = (cars, speed) => {
//   let car = {
//     time: Date.now(),
//     speed: speed
//   };
//   cars.push(car);
//   return cars;
// }



//   console.log(carPassing([
//     {
//       time: 1568329654807,
//       speed: 40,
//     }], 38))

// //My code for We're rooting for you
// const judgeVegetable = (veg, metric) => {
//   return (veg.reduce((bestVeg, other) => other[metric] > bestVeg[metric] ? other : bestVeg).submitter)
// }

// console.log(judgeVegetable([
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ], "redness"));

// My code for Kata 2

// const conditionalSum = (arr, condition) => {
//   let tally = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (condition === "even") {
//       if (arr[i] % 2 === 0) {
//         tally += arr[i];
//       }
//     } else if (condition === "odd") {
//       if (arr[i] % 2 !== 0) {
//         tally += arr[i];
//       }
//     } else {
//       return undefined;
//     }
//   }
//   return tally;
// }

// console.log(conditionalSum([], "odd"));

//My code for Kata 3
// const numberOfVowels = (string) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "u" || string[i] === "o" || string[i] === "i" || string[i] === "e" || string[i] === "a") {
//       count += 1;
//     } else {
//       count += 0;
//     }
//   }
//   return count;
// }

// console.log(numberOfVowels("archimedes"));

//My code for Kata 5
// const urlEncode = (string) => {
//   let url = ""
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === " ") {
//       url += "%20";
//     } else {
//       url += string[i];
//     }
//   }
//   return url;
// }

// console.log(urlEncode("how to center a div"));

//My code for Kata 1
// const sumLargestNumbers = (arr) => {
//   let firstNum = 0;
//   let secondNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstNum) {
//       secondNum = firstNum;
//       firstNum = arr[i];
//     } else if (arr[i] > secondNum) {
//         secondNum = arr[i];
//     }
//   }
//   return firstNum + secondNum;
// }

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

//My code for Kata 4
// const instructorWithLongestName = (insts) => {
//   let firstName = "";
//   let secondName = "";
//   for (let i = 0; i < insts.length; i++) {
//     if (insts[i].name.length > firstName.length) {
//       secondName = firstName;
//       firstName = insts[i].name;
//     } else if (insts[i].name.length > secondName.length) {
//         secondName = insts[i].name;
//     }
//   }
//   return firstName;
// }

// console.log(instructorWithLongestName([
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));

// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));

//My code for Kata 6
// const whereCanIPark = (spots, vehicle) => {
//   for (let i = 0; i < spots.length; i++) {
//     for (let j = 0; j < spots[i].length; j++) {
//       if (vehicle === 'regular') {
//         if (spots[i][j] === "R") {
//           return [j, i];
//         }
//       } else if (vehicle === 'small') {
//         if (spots[i][j] === "S" || spots[i][j] === "R") {
//           return [j, i];
//         }
//       } else if (vehicle === 'motorcycle') {
//         if (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") {
//           return [j, i];
//         }
//       }
//     }
//   }
//   return false;
// }
// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))

//My code for Kata 7
// const checkAir = (sample, threshold) => {
//   let dirty = 0;
//   for (let i = 0; i < sample.length; i++) {
//     if (sample[i] === 'dirty') {
//       dirty++;
//     }
//   }
//   if (dirty / sample.length > threshold) {
//     return "Polluted";
//   } else {
//     return "Clean";
//   }
// }

// console.log(checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
//   0.3
// ));

// console.log(checkAir(
//   ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
//   0.25
// ));

// console.log(checkAir(
//   ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
//   0.9
// ))