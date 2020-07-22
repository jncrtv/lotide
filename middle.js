const assertArraysEqual = function(actual, expected) {
  if (actual && expected) {
    let checkmark = String.fromCodePoint(0x2705);
    let errormark = String.fromCodePoint(0x274C);
    
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log('Array undefined. Makre sure actual and expected arrays are entered');
  }
};

const middle = function(arr) {
  let length = arr.length;
  let result = [];

  // checks to see if array is empty
  
  if (length > 2) {
    let remainder = length % 2;
    
    //check to see if array length is even
    if (remainder === 0) {
      let index1 = length / 2;
      let index2 = index1 - 1;

      result.push(arr[index2], arr[index1]);

    } else {
      let index3 = (length - remainder) / 2;

      result.push(arr[index3]);
    }
  }
  return result;
   
};


console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([]), []));


