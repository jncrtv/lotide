const printAssert = function(flag, actual, expected) {
  if (flag) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const assertArraysEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    let flag = false;
    if (actual.length === expected.length){

      flag = true;

      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          flag = false;
        }
      }
    }
    printAssert(flag, actual, expected);

  } else {
    console.log(`🚧🚧🚧 Arrays undefined actual: ? ${actual} --- expected: ? ${expected}.`);
  }
};



module.exports = assertArraysEqual;

