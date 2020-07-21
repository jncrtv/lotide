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


const without = function(source, itemsToRemove) {
  let result = [];
  let valid = false;

  for (let i = 0; i < source.length; i++) {
    
    for (let j = 0; j < itemsToRemove.length; j++) {
      
      if (source[i] === itemsToRemove[j]) {
        valid = true;
      }
    }
    if (valid === false) {
      result.push(source[i]);
    }
    valid = false;
  }
  return result;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);