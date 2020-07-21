const assertEqual = function(actual, expected) {
  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);
  if (actual === expected) {
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  
  let newArr = [];
  
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};


assertEqual(tail([5]), '');