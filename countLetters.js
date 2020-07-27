const assertEqual = function(actual, expected) {
  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);
  if (actual === expected) {
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
 
  let tempArr = str.split('');
  let strArray = [];

  for (let i in tempArr) {
    if (tempArr[i] !== ' ') {
      strArray.push(tempArr[i]);
    }
  }

  let result = {};
  
  for (let i of strArray) {
    if (result[i]) {
      result[i]++;
    } else {
      result[i] = 1;
    }
  }
  return result;
};



const result1 = countLetters("lighthouse in the house");


console.log(assertEqual(result1["h"], 4));
console.log(assertEqual(result1["i"], 2));
console.log(assertEqual(result1["l"], 1));
console.log(assertEqual(result1[" "], undefined));
console.log(assertEqual(result1["2"], undefined));