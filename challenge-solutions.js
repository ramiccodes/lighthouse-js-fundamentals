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