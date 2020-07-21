const assertEqual = function(actual, expected) {
  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);
  if (actual === expected) {
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i],arr2[i]);
    if (arr1[i] !== arr2[i]){
    
      return false;
    }
  }
  return true;
}






assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 0, 3]), false);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([], []), true);