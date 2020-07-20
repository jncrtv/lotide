// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let checkmark = String.fromCodePoint(0x2705)
  let errormark = String.fromCodePoint(0x274C)
  if (actual === expected){
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);;
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);