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

//takeUntil function
const takeUntil = (array, callback) => {
  let i = 0;
  let result = [];
  
  while (!callback(array[i])) {
    result.push(array[i]);
    i++;
  }
  return result;
};

module.exports = takeUntil;


// // test1
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');


// //test2
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// //assertTest
// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
// // ---
// assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

