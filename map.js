// const assertArraysEqual = function(actual, expected) {
//   if (actual && expected) {
//     let checkmark = String.fromCodePoint(0x2705);
//     let errormark = String.fromCodePoint(0x274C);
    
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
//         return;
//       }
//     }
//     console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
//     return;
//   } else {
//     console.log('Array undefined. Makre sure actual and expected arrays are entered');
//   }
// };


const map = (arr, callBack) => {
  const results = [];
  
  for (let i of arr) {
    results.push(callBack(i));
  }

  return results;
}

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(results1,["g", "c", "t", "m", "t"]);