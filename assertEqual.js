// FUNCTION IMPLEMENTATION
const printAssert = function(flag, actual, expected) {
  if (flag) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    printAssert(true, actual, expected);
  } else {
    printAssert(false, actual, expected);
  }
};


module.exports = assertEqual;

