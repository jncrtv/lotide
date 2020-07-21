const assertArraysEqual = function(actual, expected) {
  
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
};

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [1, 0, 3], false);
assertArraysEqual([1, 2, 3], [], false);
assertArraysEqual([], [], true);